"""
Compress phone originals from photo-inbox/ into public/photos/.

    python scripts/compress-photos.py            # process everything new
    python scripts/compress-photos.py --force    # redo files that already exist

Rules (match outreach/PHOTO-SHOOT-CHECKLIST.md):
  - reads  C:/shiv-ganga-travels/photo-inbox/   (originals stay there, never committed)
  - writes C:/shiv-ganga-travels/shiv-ganga-travels/public/photos/<same-name>.jpg
  - auto-rotates from EXIF, so a phone shot held sideways comes out upright
  - landscape -> 1920 px wide, portrait -> 1200 px wide (1200x1500 at 4:5)
  - JPEG, quality stepped down from 82 until the file is under 250 KB
  - keeps date/camera EXIF, strips GPS
  - name the file in the inbox the way it should be served:
      gaurikund-pony-rate-board-2026-05.jpg
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

INBOX = Path(r"C:\shiv-ganga-travels\photo-inbox")
OUT = Path(__file__).resolve().parent.parent / "public" / "photos"
MAX_BYTES = 250 * 1024
LANDSCAPE_W = 1920
PORTRAIT_W = 1200
GPS_IFD = 0x8825

force = "--force" in sys.argv
INBOX.mkdir(parents=True, exist_ok=True)
OUT.mkdir(parents=True, exist_ok=True)

srcs = sorted(p for p in INBOX.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".heic", ".webp"})
if not srcs:
    print(f"Nothing in {INBOX}. Drop the phone originals there, named as they should be served.")
    sys.exit(0)

done = skipped = 0
for src in srcs:
    dst = OUT / (src.stem.lower().replace(" ", "-") + ".jpg")
    if dst.exists() and not force:
        skipped += 1
        continue
    try:
        im = Image.open(src)
    except Exception as e:  # HEIC needs pillow-heif; say so instead of dying
        print(f"SKIP {src.name}: {e}")
        continue
    im = ImageOps.exif_transpose(im)
    exif = im.getexif()
    if GPS_IFD in exif:
        del exif[GPS_IFD]
    if im.mode not in ("RGB", "L"):
        im = im.convert("RGB")

    w, h = im.size
    target_w = LANDSCAPE_W if w >= h else PORTRAIT_W
    if w > target_w:
        im = im.resize((target_w, round(h * target_w / w)), Image.LANCZOS)

    q = 82
    while True:
        im.save(dst, "JPEG", quality=q, optimize=True, progressive=True, exif=exif.tobytes())
        size = dst.stat().st_size
        if size <= MAX_BYTES or q <= 50:
            break
        q -= 6
    orient = "landscape" if im.width >= im.height else "portrait"
    print(f"OK   {dst.name}  {im.width}x{im.height} {orient}  {size // 1024} KB  q={q}")
    done += 1

print(f"\n{done} written, {skipped} already existed (use --force to redo). Output: {OUT}")
