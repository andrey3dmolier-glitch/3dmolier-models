# 3D Molier Models static website

Static SEO website for GitHub Pages.

## How to publish on GitHub Pages

1. Create a new public GitHub repository, for example `3dmolier-models`.
2. Upload all files from this folder to the repository root.
3. Open repository Settings -> Pages.
4. In Build and deployment, choose Deploy from a branch.
5. Select branch `main` and folder `/root`.
6. Save. GitHub will publish the site at a github.io URL.

## What to edit first

- `data.js`: replace sample model cards with real TurboSquid product links and image URLs.
- `custom-3d-modeling.html`: replace `your-email@example.com` with your email.
- `sitemap.xml`, `robots.txt`, canonical URLs: replace `https://3dmolier.github.io/3dmolier-models/` with your final GitHub Pages URL or custom domain.
- Category pages: expand each page with real model examples and internal links.

## Recommended next step

Add 20-30 real models to `data.js`, grouped by category.
