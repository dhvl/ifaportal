#!/usr/bin/env python3
"""
generate_brand_icons.py
Deterministic Python script to generate all brand favicon assets for the
UK IFA Practice Growth Platform.
Outputs:
- src/app/icon.svg & public/icon.svg
- src/app/favicon.ico & public/favicon.ico (Multi-resolution 16, 32, 48)
- src/app/apple-icon.png & public/apple-touch-icon.png (180x180)
- public/icon-192.png & public/icon-512.png
- public/site.webmanifest
"""

import os
import subprocess
import struct
import shutil

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_APP_DIR = os.path.join(ROOT_DIR, "src", "app")
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")
TMP_DIR = os.path.join(ROOT_DIR, ".tmp", "brand_icons")

BRAND_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0F3542" />
      <stop offset="50%" stop-color="#08232C" />
      <stop offset="100%" stop-color="#041419" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF3C4" />
      <stop offset="25%" stop-color="#F5C84C" />
      <stop offset="65%" stop-color="#E5A324" />
      <stop offset="100%" stop-color="#BA7409" />
    </linearGradient>
    <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8EECD0" />
      <stop offset="100%" stop-color="#34C793" />
    </linearGradient>
    <filter id="glow" x="-10%" y="-10%" width="120%" height="125%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Deep British Oxford Pine Squircle Base -->
  <rect width="512" height="512" rx="124" fill="url(#bgGrad)" />
  <rect x="10" y="10" width="492" height="492" rx="114" fill="none" stroke="#1D4B5A" stroke-width="8" stroke-opacity="0.9" />
  <rect x="22" y="22" width="468" height="468" rx="102" fill="none" stroke="#3D829B" stroke-width="2" stroke-opacity="0.3" />

  <!-- Live FCA Compliance Indicator Dot (Top Right) -->
  <circle cx="424" cy="88" r="30" fill="#08232C" />
  <circle cx="424" cy="88" r="22" fill="url(#mintGrad)" />
  <circle cx="424" cy="88" r="8" fill="#FFFFFF" fill-opacity="0.85" />

  <!-- Monogram Elements -->
  <g filter="url(#glow)">
    <!-- Letter I -->
    <rect x="76" y="156" width="54" height="200" rx="12" fill="url(#goldGrad)" />

    <!-- Letter F -->
    <path d="
      M 166 168 C 166 161.4 171.4 156 178 156 L 274 156 C 280.6 156 286 161.4 286 168 L 286 196 C 286 202.6 280.6 208 274 208 L 220 208 L 220 236 L 262 236 C 268.6 236 274 241.4 274 248 L 274 276 C 274 282.6 268.6 288 262 288 L 220 288 L 220 344 C 220 350.6 214.6 356 208 356 L 178 356 C 171.4 356 166 350.6 166 344 Z
    " fill="url(#goldGrad)" />

    <!-- Letter A -->
    <path d="
      M 373 156 C 381 156 387 160 391 167 L 442 344 C 445 352 439 356 431 356 L 395 356 C 388 356 384 352 381 346 L 372 316 L 332 316 L 324 346 C 322 352 317 356 310 356 L 274 356 C 266 356 261 350 263 343 L 314 167 C 318 160 324 156 332 156 Z
      M 342 278 L 362 278 L 352 232 Z
    " fill="url(#goldGrad)" fill-rule="evenodd" />

    <!-- Sleek Baseline Bar -->
    <rect x="76" y="382" width="360" height="18" rx="9" fill="url(#goldGrad)" />
  </g>
</svg>"""

MANIFEST_JSON = """{
  "name": "IFA Media",
  "short_name": "IFA Media",
  "description": "FCA-compliant Independent Financial Adviser website portals with custom branding, AI concierge chatbots, and built-in social media retainers.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#08232C",
  "theme_color": "#08232C",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
"""

def create_ico(png_files, out_ico_path):
    images = []
    for fpath in png_files:
        with open(fpath, "rb") as f:
            data = f.read()
        w, h = struct.unpack(">II", data[16:24])
        images.append({"width": w, "height": h, "data": data})

    header = struct.pack("<HHH", 0, 1, len(images))
    offset = 6 + len(images) * 16
    entries = []
    for img in images:
        w_byte = 0 if img["width"] >= 256 else img["width"]
        h_byte = 0 if img["height"] >= 256 else img["height"]
        entry = struct.pack("<BBBBHHII", w_byte, h_byte, 0, 0, 1, 32, len(img["data"]), offset)
        entries.append(entry)
        offset += len(img["data"])

    with open(out_ico_path, "wb") as f:
        f.write(header)
        for entry in entries:
            f.write(entry)
        for img in images:
            f.write(img["data"])

def main():
    os.makedirs(TMP_DIR, exist_ok=True)
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    os.makedirs(SRC_APP_DIR, exist_ok=True)

    master_svg_path = os.path.join(TMP_DIR, "icon.svg")
    with open(master_svg_path, "w") as f:
        f.write(BRAND_SVG.strip())

    # Write SVGs
    shutil.copyfile(master_svg_path, os.path.join(SRC_APP_DIR, "icon.svg"))
    shutil.copyfile(master_svg_path, os.path.join(PUBLIC_DIR, "icon.svg"))
    print("[SUCCESS] Created icon.svg in src/app and public")

    # Render PNGs across sizes using macOS sips
    sizes = [16, 32, 48, 64, 180, 192, 512]
    png_paths = {}
    for s in sizes:
        dest = os.path.join(TMP_DIR, f"icon_{s}.png")
        cmd = ["sips", "-s", "format", "png", "-z", str(s), str(s), master_svg_path, "--out", dest]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        png_paths[s] = dest
        print(f"[SUCCESS] Rendered PNG: {s}x{s}")

    # Create Multi-Resolution Windows ICO (16, 32, 48)
    ico_sources = [png_paths[16], png_paths[32], png_paths[48]]
    create_ico(ico_sources, os.path.join(SRC_APP_DIR, "favicon.ico"))
    shutil.copyfile(os.path.join(SRC_APP_DIR, "favicon.ico"), os.path.join(PUBLIC_DIR, "favicon.ico"))
    print("[SUCCESS] Generated multi-resolution favicon.ico in src/app and public")

    # Apple Touch Icons (180x180)
    shutil.copyfile(png_paths[180], os.path.join(SRC_APP_DIR, "apple-icon.png"))
    shutil.copyfile(png_paths[180], os.path.join(PUBLIC_DIR, "apple-touch-icon.png"))
    print("[SUCCESS] Generated apple-icon.png and apple-touch-icon.png (180x180)")

    # PWA Android Icons
    shutil.copyfile(png_paths[192], os.path.join(PUBLIC_DIR, "icon-192.png"))
    shutil.copyfile(png_paths[512], os.path.join(PUBLIC_DIR, "icon-512.png"))
    print("[SUCCESS] Generated icon-192.png and icon-512.png")

    # Web Manifest
    with open(os.path.join(PUBLIC_DIR, "site.webmanifest"), "w") as f:
        f.write(MANIFEST_JSON.strip() + "\n")
    print("[SUCCESS] Generated site.webmanifest")

    # Cleanup temp
    shutil.rmtree(TMP_DIR, ignore_errors=True)
    print("[SUCCESS] Cleaned up temporary directory")

if __name__ == "__main__":
    main()
