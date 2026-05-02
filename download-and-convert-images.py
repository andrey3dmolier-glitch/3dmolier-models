#!/usr/bin/env python3
"""
Download TurboSquid images from image-manifest.json and collage-manifest.json,
then convert them into local WebP files.

Run from the project root:
    python download-and-convert-images.py

Install dependencies first:
    pip install pillow requests
"""
from pathlib import Path
import json, io, sys
import requests
from PIL import Image

ROOT = Path(__file__).resolve().parent

def load_manifest(name):
    p = ROOT / name
    if not p.exists():
        return []
    return json.loads(p.read_text(encoding="utf-8"))

manifest = load_manifest("image-manifest.json") + load_manifest("collage-manifest.json")

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; 3DMolierSiteImageFetcher/1.0)"
})

def save_webp(source_url: str, out_path: Path, max_width: int, quality: int):
    out_path.parent.mkdir(parents=True, exist_ok=True)
    r = session.get(source_url, timeout=60)
    r.raise_for_status()
    img = Image.open(io.BytesIO(r.content)).convert("RGB")
    w, h = img.size
    if w > max_width:
        nh = int(h * (max_width / w))
        img = img.resize((max_width, nh), Image.LANCZOS)
    img.save(out_path, "WEBP", quality=quality, method=6)

failed = []
done = 0
for item in manifest:
    source = item["source"]
    try:
        print(f"Downloading: {item['title']}")
        # Collage items have same preview/large path.
        if item["large"] == item["preview"]:
            save_webp(source, ROOT / item["large"], 1400, 82)
        else:
            save_webp(source, ROOT / item["large"], 1400, 82)
            save_webp(source, ROOT / item["preview"], 520, 76)
        done += 1
    except Exception as e:
        failed.append((item["title"], source, str(e)))
        print(f"FAILED: {item['title']} -> {e}")

print(f"\nCompleted: {done}/{len(manifest)} image records")

if failed:
    print("\nSome images failed:")
    for title, source, err in failed:
        print(f"- {title}: {err}\n  {source}")
    sys.exit(1)

print("\nDone. All images downloaded and converted to WebP.")
