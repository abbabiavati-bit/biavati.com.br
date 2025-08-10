Place your hero video file(s) in this folder.

Expected filenames (you can change them, but also update .env.local accordingly):
- TURISMO_LITORAL_0609.mp4  (recommended)
- TURISMO_LITORAL_0609.jpg  (optional poster frame)

Then set in .env.local:
NEXT_PUBLIC_HERO_MEDIA_URL="/hero/TURISMO_LITORAL_0609.mp4"
NEXT_PUBLIC_HERO_VIDEO_POSTER="/hero/TURISMO_LITORAL_0609.jpg"  # optional

The homepage hero will auto-play the MP4 (muted, loop, playsinline) with an overlay.
