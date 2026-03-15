#!/usr/bin/env python3
"""Print radial brightness profiles for reference vs render."""
import numpy as np
from PIL import Image

ref = np.array(Image.open('LumenLingo/Starburst Galaxy.png').convert('RGB'), dtype=np.float32) / 255.0
ren = np.array(Image.open('/tmp/lumen_verify/starburst_verify_current.png').convert('RGB'), dtype=np.float32) / 255.0

# Crop render to 3:2 center
h, w, _ = ren.shape
target_h = int(w * 2 / 3)
top = (h - target_h) // 2
ren = ren[top:top+target_h, :, :]

# Resize ref to same size
ref_img = Image.fromarray((ref * 255).astype(np.uint8)).resize((ren.shape[1], ren.shape[0]), Image.LANCZOS)
ref = np.array(ref_img, dtype=np.float32) / 255.0

# Compute luma
ref_l = 0.2126 * ref[:,:,0] + 0.7152 * ref[:,:,1] + 0.0722 * ref[:,:,2]
ren_l = 0.2126 * ren[:,:,0] + 0.7152 * ren[:,:,1] + 0.0722 * ren[:,:,2]

h2, w2 = ref_l.shape
cy, cx = h2/2, w2/2
max_r = np.sqrt(cx*cx + cy*cy)
yy, xx = np.mgrid[0:h2, 0:w2]
r = np.sqrt((xx-cx)**2 + (yy-cy)**2) / max_r

bins = np.linspace(0, 1, 65)
centers = (bins[:-1] + bins[1:]) / 2

print(f"  dist      ref      ren     diff")
ref_peak_i = -1
ren_peak_i = -1
ref_peak_v = 0
ren_peak_v = 0
for i in range(64):
    m = (r >= bins[i]) & (r < bins[i+1])
    if m.any():
        rl = float(ref_l[m].mean())
        nl = float(ren_l[m].mean())
        if 0.15 < centers[i] < 0.60:
            if rl > ref_peak_v:
                ref_peak_v = rl
                ref_peak_i = i
            if nl > ren_peak_v:
                ren_peak_v = nl
                ren_peak_i = i
        marker = ""
        if i == ref_peak_i:
            marker += " <REF-PEAK"
        print(f" {centers[i]:6.3f}  {rl:7.4f}  {nl:7.4f}  {nl-rl:+7.4f}{marker}")

# Mark render peak
m = (r >= bins[ren_peak_i]) & (r < bins[ren_peak_i+1])
print(f"\nRef peak at dist={centers[ref_peak_i]:.3f} luma={ref_peak_v:.4f}")
print(f"Ren peak at dist={centers[ren_peak_i]:.3f} luma={ren_peak_v:.4f}")
