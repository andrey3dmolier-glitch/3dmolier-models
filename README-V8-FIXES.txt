# V8 fixes

Changes:
- Replaced requested badge text with: Ready for AI Model Training
- Main homepage collage uses exactly the five requested images, as local WebP paths.
- Military collage uses exactly the five requested images, as local WebP paths.
- Simulation collage uses exactly the five requested images, as local WebP paths.
- Model detail pages use only local WebP files.
- Removed TurboSquid fallback from model detail page images.
- Fixed model-page relative paths: ../assets/images/large/...
- Added collage-manifest.json.
- Updated download-and-convert-images.py to generate both model images and collage images.

Important:
Run `python download-and-convert-images.py` before uploading to GitHub, otherwise WebP files will not exist and images will not display.
