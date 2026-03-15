"""Starburst Ring verification pipeline v3.

Redesigned metrics that actually drive toward the reference image instead of
rewarding arbitrary hue diversity.

Key changes from v2:
  - REMOVED hue_entropy (rewarded diversity → pushed away from purple reference)
  - REMOVED colorfulness ratio (too abstract)
  - REMOVED colour_angle (single scalar, loses spatial info)
  - ADDED hue_hist_match: compares actual hue distribution shapes per zone
  - ADDED colour_zone_lab: compares mean colors in LAB space per zone (Delta-E)
  - ADDED ssim: structural similarity on luma channel
  - RAISED mad weight: most honest pixel-level comparison
"""

from __future__ import annotations

import argparse
import json
import math
from pathlib import Path
from typing import Any

import numpy as np
from PIL import Image

LUMA_WEIGHTS = np.array([0.2126, 0.7152, 0.0722], dtype=np.float32)


def center_crop_to_ratio(img: Image.Image, ratio: float) -> Image.Image:
    img_ratio = img.width / img.height
    if img_ratio > ratio:
        new_w = int(img.height * ratio)
        left = (img.width - new_w) // 2
        return img.crop((left, 0, left + new_w, img.height))
    new_h = int(img.width / ratio)
    top = (img.height - new_h) // 2
    return img.crop((0, top, img.width, top + new_h))


def rgb_to_hsv_np(arr: np.ndarray) -> np.ndarray:
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    cmax = np.max(arr, axis=2)
    cmin = np.min(arr, axis=2)
    delta = cmax - cmin
    hue = np.zeros_like(cmax)
    mask = delta > 1e-6
    rmask = mask & (cmax == r)
    gmask = mask & (cmax == g)
    bmask = mask & (cmax == b)
    hue[rmask] = ((g[rmask] - b[rmask]) / delta[rmask]) % 6.0
    hue[gmask] = ((b[gmask] - r[gmask]) / delta[gmask]) + 2.0
    hue[bmask] = ((r[bmask] - g[bmask]) / delta[bmask]) + 4.0
    hue /= 6.0
    sat = np.zeros_like(cmax)
    nonzero = cmax > 1e-6
    sat[nonzero] = delta[nonzero] / cmax[nonzero]
    return np.stack([hue, sat, cmax], axis=2)


def _srgb_to_linear(c: np.ndarray) -> np.ndarray:
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def srgb_to_lab(arr: np.ndarray) -> np.ndarray:
    """Convert sRGB [0,1] float array (H,W,3) to CIELAB."""
    lin = _srgb_to_linear(arr)
    # sRGB → XYZ (D65)
    x = lin[:, :, 0] * 0.4124564 + lin[:, :, 1] * 0.3575761 + lin[:, :, 2] * 0.1804375
    y = lin[:, :, 0] * 0.2126729 + lin[:, :, 1] * 0.7151522 + lin[:, :, 2] * 0.0721750
    z = lin[:, :, 0] * 0.0193339 + lin[:, :, 1] * 0.1191920 + lin[:, :, 2] * 0.9503041
    # D65 white point
    x /= 0.95047
    z /= 1.08883

    def f(t: np.ndarray) -> np.ndarray:
        return np.where(t > 0.008856, np.cbrt(t), 7.787 * t + 16.0 / 116.0)

    fx, fy, fz = f(x), f(y), f(z)
    L = 116.0 * fy - 16.0
    a = 500.0 * (fx - fy)
    b = 200.0 * (fy - fz)
    return np.stack([L, a, b], axis=2)


def delta_e_76(lab1: np.ndarray, lab2: np.ndarray) -> float:
    """CIE76 Delta-E between two LAB 3-vectors."""
    return float(np.sqrt(np.sum((lab1 - lab2) ** 2)))


def hue_hist_similarity(ref_hsv: np.ndarray, render_hsv: np.ndarray,
                        zone_mask: np.ndarray, n_bins: int = 36) -> float:
    """Compare weighted hue histograms using histogram intersection.
    Returns 0..1 where 1 = identical distributions."""
    bins = np.linspace(0.0, 1.0, n_bins + 1)

    def _weighted_hist(hsv: np.ndarray) -> np.ndarray:
        hue = hsv[:, :, 0][zone_mask]
        w = hsv[:, :, 1][zone_mask] * np.clip(hsv[:, :, 2][zone_mask], 0.0, 1.0)
        hist, _ = np.histogram(hue, bins=bins, weights=w)
        total = hist.sum()
        return hist / total if total > 1e-8 else hist

    h_ref = _weighted_hist(ref_hsv)
    h_ren = _weighted_hist(render_hsv)
    intersection = float(np.minimum(h_ref, h_ren).sum())
    return intersection


def ssim_luma(ref_l: np.ndarray, render_l: np.ndarray,
              window: int = 7) -> float:
    """Simple SSIM on luma arrays. Returns -1..1."""
    c1 = 0.01 ** 2
    c2 = 0.03 ** 2
    k = window
    pad = k // 2
    h, w = ref_l.shape

    def _box_mean(arr: np.ndarray) -> np.ndarray:
        cum = np.cumsum(np.cumsum(arr, axis=0), axis=1)
        out = np.zeros_like(arr)
        for i in range(h):
            for j in range(w):
                r0 = max(i - pad - 1, -1)
                c0 = max(j - pad - 1, -1)
                r1 = min(i + pad, h - 1)
                c1_ = min(j + pad, w - 1)
                area = (r1 - r0) * (c1_ - c0)
                s = cum[r1, c1_]
                if r0 >= 0:
                    s -= cum[r0, c1_]
                if c0 >= 0:
                    s -= cum[r1, c0]
                if r0 >= 0 and c0 >= 0:
                    s += cum[r0, c0]
                out[i, j] = s / area
            return out
        return out

    # Use uniform filter via cumsum for speed
    # Simpler: compute on downsampled grid
    step = max(1, min(h, w) // 64)
    ref_s = ref_l[::step, ::step]
    ren_s = render_l[::step, ::step]

    from numpy.lib.stride_tricks import sliding_window_view
    if ref_s.shape[0] < k or ref_s.shape[1] < k:
        # Too small, fall back to global
        mu_r, mu_e = ref_s.mean(), ren_s.mean()
        sig_r = ref_s.var()
        sig_e = ren_s.var()
        sig_re = ((ref_s - mu_r) * (ren_s - mu_e)).mean()
        return float((2 * mu_r * mu_e + c1) * (2 * sig_re + c2) /
                     ((mu_r**2 + mu_e**2 + c1) * (sig_r + sig_e + c2)))

    ref_w = sliding_window_view(ref_s, (k, k))
    ren_w = sliding_window_view(ren_s, (k, k))
    mu_r = ref_w.mean(axis=(-2, -1))
    mu_e = ren_w.mean(axis=(-2, -1))
    sig_r = ref_w.var(axis=(-2, -1))
    sig_e = ren_w.var(axis=(-2, -1))
    sig_re = ((ref_w - mu_r[..., None, None]) *
              (ren_w - mu_e[..., None, None])).mean(axis=(-2, -1))
    ssim_map = ((2 * mu_r * mu_e + c1) * (2 * sig_re + c2) /
                ((mu_r**2 + mu_e**2 + c1) * (sig_r + sig_e + c2)))
    return float(ssim_map.mean())


def _score_closeness(ref_val: float, render_val: float,
                     tolerance: float) -> float:
    diff = abs(ref_val - render_val)
    return max(0.0, 100.0 - (diff / tolerance) * 100.0)


def analyze(ref_path: Path, render_path: Path,
            size: tuple[int, int] = (512, 341)) -> dict[str, Any]:
    ref = Image.open(ref_path).convert("RGB")
    render = Image.open(render_path).convert("RGB")
    ratio = ref.width / ref.height
    render = center_crop_to_ratio(render, ratio)
    ref = ref.resize(size, Image.Resampling.LANCZOS)
    render = render.resize(size, Image.Resampling.LANCZOS)

    ref_np = np.asarray(ref).astype(np.float32) / 255.0
    render_np = np.asarray(render).astype(np.float32) / 255.0
    ref_l = ref_np @ LUMA_WEIGHTS
    render_l = render_np @ LUMA_WEIGHTS

    h, w = ref_l.shape
    cx, cy = (w - 1) / 2.0, (h - 1) / 2.0
    max_r = min(cx, cy)
    y_idx, x_idx = np.indices((h, w), dtype=np.float32)
    dx = x_idx - cx
    dy = y_idx - cy
    r = np.sqrt(dx * dx + dy * dy) / max_r

    # ── Radial profile ──
    radial_bins = np.linspace(0.0, 1.0, 65)
    centers = (radial_bins[:-1] + radial_bins[1:]) / 2.0
    ref_prof = np.zeros(64, dtype=np.float32)
    render_prof = np.zeros(64, dtype=np.float32)
    for i in range(64):
        m = (r >= radial_bins[i]) & (r < radial_bins[i + 1])
        if m.any():
            ref_prof[i] = float(ref_l[m].mean())
            render_prof[i] = float(render_l[m].mean())

    radial_err = float(np.mean(np.abs(ref_prof - render_prof)))

    # ── Zonal masks ──
    inner_mask = r < 0.16
    ring_mask = (r > 0.22) & (r < 0.40)
    outer_mask = (r > 0.46) & (r < 0.88)

    ref_inner_l = float(ref_l[inner_mask].mean())
    render_inner_l = float(render_l[inner_mask].mean())
    ref_ring_l = float(ref_l[ring_mask].mean())
    render_ring_l = float(render_l[ring_mask].mean())
    ref_outer_l = float(ref_l[outer_mask].mean())
    render_outer_l = float(render_l[outer_mask].mean())

    # ── Ring peak ──
    ring_zone_idx = (centers > 0.15) & (centers < 0.60)
    ring_centers = centers[ring_zone_idx]
    ref_peak_r = float(ring_centers[np.argmax(ref_prof[ring_zone_idx])])
    render_peak_r = float(ring_centers[np.argmax(render_prof[ring_zone_idx])])
    ref_peak_l = float(np.max(ref_prof[ring_zone_idx]))
    render_peak_l = float(np.max(render_prof[ring_zone_idx]))

    # ── MAD ──
    mad = float(np.mean(np.abs(ref_np - render_np)))

    # ── Hue histogram similarity (replaces hue_entropy) ──
    ref_hsv = rgb_to_hsv_np(ref_np)
    render_hsv = rgb_to_hsv_np(render_np)
    hue_sim_outer = hue_hist_similarity(ref_hsv, render_hsv, outer_mask)
    hue_sim_ring = hue_hist_similarity(ref_hsv, render_hsv, ring_mask)

    # ── Colour zone match in LAB (replaces colour_angle) ──
    ref_lab = srgb_to_lab(ref_np)
    render_lab = srgb_to_lab(render_np)

    ref_lab_ring = ref_lab[ring_mask].mean(axis=0)
    ren_lab_ring = render_lab[ring_mask].mean(axis=0)
    ref_lab_outer = ref_lab[outer_mask].mean(axis=0)
    ren_lab_outer = render_lab[outer_mask].mean(axis=0)
    de_ring = delta_e_76(ref_lab_ring, ren_lab_ring)
    de_outer = delta_e_76(ref_lab_outer, ren_lab_outer)

    # ── SSIM ──
    ssim_val = ssim_luma(ref_l, render_l)

    # ── Sub-scores (0-100) ──
    s_radial = max(0.0, 100.0 - radial_err * 600.0)

    s_inner = _score_closeness(ref_inner_l, render_inner_l, 0.10)
    s_ring_sc = _score_closeness(ref_ring_l, render_ring_l, 0.10)
    s_outer = _score_closeness(ref_outer_l, render_outer_l, 0.08)
    s_zonal = (s_inner + s_ring_sc + s_outer) / 3.0

    s_void = _score_closeness(ref_inner_l, render_inner_l, 0.06)

    s_peak_r = _score_closeness(ref_peak_r, render_peak_r, 0.12)
    s_peak_l = _score_closeness(ref_peak_l, render_peak_l, 0.12)
    s_ring_peak = (s_peak_r + s_peak_l) / 2.0

    # Hue histogram: average of outer and ring zone similarity
    s_hue_hist = ((hue_sim_outer + hue_sim_ring) / 2.0) * 100.0

    # LAB colour match: Delta-E < 5 = perfect, > 35 = zero
    s_lab = (max(0.0, 100.0 - de_ring * (100.0 / 35.0))
             + max(0.0, 100.0 - de_outer * (100.0 / 35.0))) / 2.0

    s_mad = max(0.0, 100.0 - mad * 500.0)

    # SSIM: map from [-1,1] to [0,100], typical range 0.3-0.9
    s_ssim = max(0.0, min(100.0, ssim_val * 100.0))

    weights = {
        "mad":          0.22,
        "radial":       0.15,
        "zonal_luma":   0.11,
        "void":         0.08,
        "ring_peak":    0.10,
        "hue_hist":     0.12,
        "colour_lab":   0.12,
        "ssim":         0.10,
    }
    sub_scores = {
        "mad":          s_mad,
        "radial":       s_radial,
        "zonal_luma":   s_zonal,
        "void":         s_void,
        "ring_peak":    s_ring_peak,
        "hue_hist":     s_hue_hist,
        "colour_lab":   s_lab,
        "ssim":         s_ssim,
    }
    total = sum(sub_scores[k] * weights[k] for k in weights)

    result: dict[str, Any] = {
        "final_score": round(total, 2),
        "sub_scores": {k: round(v, 1) for k, v in sub_scores.items()},
        "weights": weights,
        "raw": {
            "mad": round(mad, 4),
            "radial_err": round(radial_err, 4),
            "ref_inner_luma": round(ref_inner_l, 4),
            "render_inner_luma": round(render_inner_l, 4),
            "ref_ring_luma": round(ref_ring_l, 4),
            "render_ring_luma": round(render_ring_l, 4),
            "ref_outer_luma": round(ref_outer_l, 4),
            "render_outer_luma": round(render_outer_l, 4),
            "ref_peak_radius": round(ref_peak_r, 4),
            "render_peak_radius": round(render_peak_r, 4),
            "ref_peak_luma": round(ref_peak_l, 4),
            "render_peak_luma": round(render_peak_l, 4),
            "hue_sim_outer": round(hue_sim_outer, 4),
            "hue_sim_ring": round(hue_sim_ring, 4),
            "delta_e_ring": round(de_ring, 2),
            "delta_e_outer": round(de_outer, 2),
            "ssim": round(ssim_val, 4),
        },
    }
    return result


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Verify Starburst screenshot against reference")
    parser.add_argument(
        "--reference", type=Path,
        default=Path("/Users/sebastiansiemianowski/RubymineProjects/"
                      "lumen-lingo-swift/LumenLingo/Starburst Galaxy.png"))
    parser.add_argument(
        "--render", type=Path,
        default=Path("/tmp/lumen_verify/starburst_verify_current.png"))
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    result = analyze(args.reference, args.render)

    if args.json:
        print(json.dumps(result, indent=2, sort_keys=True))
        return

    print(f"\n{'='*54}")
    print(f"  STARBURST RING  Score: {result['final_score']:.1f} / 100")
    print(f"{'='*54}")
    for k, v in result["sub_scores"].items():
        w = result["weights"][k]
        bar = "#" * int(v / 5) + "." * (20 - int(v / 5))
        print(f"  {k:<16} {bar} {v:5.1f}  (x{w:.0%})")
    print(f"{'_'*54}")

    raw = result["raw"]
    print(f"\n  Raw metrics:")
    print(f"    MAD .............. {raw['mad']:.4f}")
    print(f"    radial_err ....... {raw['radial_err']:.4f}")
    print(f"    inner_luma  ref={raw['ref_inner_luma']:.3f}  ren={raw['render_inner_luma']:.3f}")
    print(f"    ring_luma   ref={raw['ref_ring_luma']:.3f}  ren={raw['render_ring_luma']:.3f}")
    print(f"    outer_luma  ref={raw['ref_outer_luma']:.3f}  ren={raw['render_outer_luma']:.3f}")
    print(f"    peak_radius ref={raw['ref_peak_radius']:.3f}  ren={raw['render_peak_radius']:.3f}")
    print(f"    peak_luma   ref={raw['ref_peak_luma']:.3f}  ren={raw['render_peak_luma']:.3f}")
    print(f"    hue_sim     outer={raw['hue_sim_outer']:.3f}  ring={raw['hue_sim_ring']:.3f}")
    print(f"    delta_e     ring={raw['delta_e_ring']:.1f}  outer={raw['delta_e_outer']:.1f}")
    print(f"    ssim ............ {raw['ssim']:.4f}")
    print()


if __name__ == "__main__":
    main()
