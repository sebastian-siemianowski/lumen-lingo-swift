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


def smooth_circular(values: np.ndarray, passes: int = 2) -> np.ndarray:
    kernel = np.array([1.0, 2.0, 3.0, 2.0, 1.0], dtype=np.float32)
    kernel /= kernel.sum()
    out = values.astype(np.float32)
    pad = len(kernel) // 2
    for _ in range(passes):
        padded = np.concatenate([out[-pad:], out, out[:pad]])
        out = np.convolve(padded, kernel, mode="valid")
    return out


def colorfulness(arr: np.ndarray) -> float:
    rg = arr[:, :, 0] - arr[:, :, 1]
    yb = 0.5 * (arr[:, :, 0] + arr[:, :, 1]) - arr[:, :, 2]
    std_rg, std_yb = np.std(rg), np.std(yb)
    mean_rg, mean_yb = np.mean(rg), np.mean(yb)
    return float(np.sqrt(std_rg**2 + std_yb**2) + 0.3 * np.sqrt(mean_rg**2 + mean_yb**2))


def circular_peak_metrics(profile: np.ndarray) -> dict[str, float]:
    mean = float(np.mean(profile))
    std = float(np.std(profile))
    threshold = mean + std * 0.35
    n = len(profile)
    peaks: list[int] = []

    for i in range(n):
        prev_v = profile[(i - 1) % n]
        curr_v = profile[i]
        next_v = profile[(i + 1) % n]
        if curr_v >= prev_v and curr_v > next_v and curr_v > threshold:
            peaks.append(i)

    widths: list[int] = []
    for peak in peaks:
        height = profile[peak]
        half = mean + (height - mean) * 0.45
        width = 1
        j = (peak - 1) % n
        while j != peak and profile[j] > half:
            width += 1
            j = (j - 1) % n
        j = (peak + 1) % n
        while j != peak and profile[j] > half:
            width += 1
            j = (j + 1) % n
        widths.append(width)

    return {
        "peak_count": float(len(peaks)),
        "mean_peak_width_bins": float(np.mean(widths)) if widths else 0.0,
        "peak_threshold": threshold,
        "profile_mean": mean,
        "profile_std": std,
    }


def rgb_to_hsv_np(arr: np.ndarray) -> np.ndarray:
    r = arr[:, :, 0]
    g = arr[:, :, 1]
    b = arr[:, :, 2]
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

    val = cmax
    return np.stack([hue, sat, val], axis=2)


def weighted_hue_entropy(hsv: np.ndarray, mask: np.ndarray) -> float:
    hue = hsv[:, :, 0][mask]
    sat = hsv[:, :, 1][mask]
    val = hsv[:, :, 2][mask]
    if hue.size == 0:
        return 0.0

    weights = sat * np.clip(val, 0.0, 1.0)
    bins = np.linspace(0.0, 1.0, 19)
    hist, _ = np.histogram(hue, bins=bins, weights=weights)
    total = hist.sum()
    if total <= 1e-8:
        return 0.0
    probs = hist / total
    probs = probs[probs > 1e-8]
    return float(-(probs * np.log2(probs)).sum())


def angular_profile(values: np.ndarray, theta: np.ndarray, mask: np.ndarray, bins: int = 180) -> np.ndarray:
    profile = np.zeros(bins, dtype=np.float32)
    counts = np.zeros(bins, dtype=np.float32)
    theta_vals = theta[mask]
    value_vals = values[mask]
    idx = np.floor((theta_vals / (2.0 * math.pi)) * bins).astype(int) % bins
    np.add.at(profile, idx, value_vals)
    np.add.at(counts, idx, 1)
    counts = np.maximum(counts, 1.0)
    return profile / counts


def analyze(ref_path: Path, render_path: Path, size: tuple[int, int] = (512, 341)) -> dict[str, Any]:
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
    y, x = np.indices((h, w), dtype=np.float32)
    dx = x - cx
    dy = y - cy
    r = np.sqrt(dx * dx + dy * dy) / max_r
    theta = (np.arctan2(dy, dx) + 2.0 * math.pi) % (2.0 * math.pi)

    radial_bins = np.linspace(0.0, 1.0, 65)
    centers = (radial_bins[:-1] + radial_bins[1:]) / 2.0
    ref_prof = []
    render_prof = []
    for i in range(len(radial_bins) - 1):
        m = (r >= radial_bins[i]) & (r < radial_bins[i + 1])
        ref_prof.append(float(ref_l[m].mean()))
        render_prof.append(float(render_l[m].mean()))
    ref_prof = np.array(ref_prof)
    render_prof = np.array(render_prof)

    ring_zone = (centers > 0.15) & (centers < 0.60)
    ref_peak_idx = int(np.argmax(ref_prof[ring_zone]))
    render_peak_idx = int(np.argmax(render_prof[ring_zone]))
    ring_centers = centers[ring_zone]

    ref_hsv = rgb_to_hsv_np(ref_np)
    render_hsv = rgb_to_hsv_np(render_np)

    filament_annulus = (r > 0.30) & (r < 0.58)
    ref_ang = smooth_circular(angular_profile(ref_l, theta, filament_annulus, 180), passes=2)
    render_ang = smooth_circular(angular_profile(render_l, theta, filament_annulus, 180), passes=2)
    ref_fil = circular_peak_metrics(ref_ang)
    render_fil = circular_peak_metrics(render_ang)

    outer_annulus = (r > 0.46) & (r < 0.88)
    inner_annulus = (r < 0.16)
    ring_annulus = (r > 0.22) & (r < 0.40)

    ref_colorfulness = colorfulness(ref_np)
    render_colorfulness = colorfulness(render_np)

    result: dict[str, Any] = {
        "reference_colorfulness": ref_colorfulness,
        "render_colorfulness": render_colorfulness,
        "reference_inner_luma": float(ref_l[inner_annulus].mean()),
        "render_inner_luma": float(render_l[inner_annulus].mean()),
        "reference_ring_luma": float(ref_l[ring_annulus].mean()),
        "render_ring_luma": float(render_l[ring_annulus].mean()),
        "reference_outer_luma": float(ref_l[outer_annulus].mean()),
        "render_outer_luma": float(render_l[outer_annulus].mean()),
        "reference_peak_radius": float(ring_centers[ref_peak_idx]),
        "render_peak_radius": float(ring_centers[render_peak_idx]),
        "reference_peak_luma": float(ref_prof[ring_zone][ref_peak_idx]),
        "render_peak_luma": float(render_prof[ring_zone][render_peak_idx]),
        "reference_filament_peak_count": ref_fil["peak_count"],
        "render_filament_peak_count": render_fil["peak_count"],
        "reference_filament_width": ref_fil["mean_peak_width_bins"],
        "render_filament_width": render_fil["mean_peak_width_bins"],
        "reference_outer_hue_entropy": weighted_hue_entropy(ref_hsv, outer_annulus),
        "render_outer_hue_entropy": weighted_hue_entropy(render_hsv, outer_annulus),
        "mad": float(np.mean(np.abs(ref_np - render_np))),
        "radial_err": float(np.mean(np.abs(ref_prof - render_prof))),
    }

    result["rough_similarity_score"] = max(
        0.0,
        100.0
        - (
            result["mad"] * 90.0
            + result["radial_err"] * 120.0
            + abs(result["reference_peak_radius"] - result["render_peak_radius"]) * 50.0
            + max(0.0, result["reference_filament_width"] - result["render_filament_width"]) * 0.8
        ),
    )

    return result


def main() -> None:
    parser = argparse.ArgumentParser(description="Verify Starburst screenshot against reference image")
    parser.add_argument(
        "--reference",
        type=Path,
        default=Path("/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/Starburst Galaxy.png"),
    )
    parser.add_argument(
        "--render",
        type=Path,
        default=Path("/tmp/lumen_verify/starburst_verify_current.png"),
    )
    parser.add_argument("--json", action="store_true", help="Print JSON only")
    args = parser.parse_args()

    result = analyze(args.reference, args.render)
    if args.json:
        print(json.dumps(result, indent=2, sort_keys=True))
        return

    for key, value in result.items():
        if isinstance(value, float):
            print(f"{key}={value:.4f}")
        else:
            print(f"{key}={value}")


if __name__ == "__main__":
    main()
