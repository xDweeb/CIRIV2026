# Generate Favicons from CIRIV Logo

## Instructions to Create Favicon Files

You need to create the following favicon files from your CIRIV.png logo:

### Required Files:
1. **favicon.ico** (16x16, 32x32, 48x48 multi-size ICO file)
2. **favicon-16x16.png** (16x16 pixels)
3. **favicon-32x32.png** (32x32 pixels)
4. **apple-touch-icon.png** (180x180 pixels)
5. **android-chrome-192x192.png** (192x192 pixels)
6. **android-chrome-512x512.png** (512x512 pixels)
7. **mstile-150x150.png** (150x150 pixels)

### Online Tools (Recommended):
1. **RealFaviconGenerator** - https://realfavicongenerator.net/
   - Upload your `/public/assets/logos/CIRIV.png`
   - It will generate all required formats automatically
   - Download the zip and extract to `/public/favicons/`

2. **Favicon.io** - https://favicon.io/favicon-converter/
   - Upload CIRIV.png
   - Download generated files to `/public/favicons/`

### Manual Creation (Using Image Editor):
If you prefer to create them manually:
1. Open CIRIV.png in your image editor (Photoshop, GIMP, etc.)
2. Create square versions at these sizes:
   - 16x16, 32x32, 180x180, 192x192, 512x512, 150x150
3. Export as PNG (except favicon.ico which should be ICO format)
4. Place all files in `/public/favicons/` directory

### Command Line Tools:
Using ImageMagick (if installed):
```bash
# Navigate to your project root
cd /path/to/CIRIV2026

# Create different sizes from CIRIV.png
magick public/assets/logos/CIRIV.png -resize 16x16 public/favicons/favicon-16x16.png
magick public/assets/logos/CIRIV.png -resize 32x32 public/favicons/favicon-32x32.png
magick public/assets/logos/CIRIV.png -resize 180x180 public/favicons/apple-touch-icon.png
magick public/assets/logos/CIRIV.png -resize 192x192 public/favicons/android-chrome-192x192.png
magick public/assets/logos/CIRIV.png -resize 512x512 public/favicons/android-chrome-512x512.png
magick public/assets/logos/CIRIV.png -resize 150x150 public/favicons/mstile-150x150.png

# Create ICO file with multiple sizes
magick public/assets/logos/CIRIV.png -resize 16x16 -resize 32x32 -resize 48x48 public/favicons/favicon.ico
```

### Verification:
After creating the files, your `/public/favicons/` directory should contain:
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
- android-chrome-192x192.png
- android-chrome-512x512.png
- mstile-150x150.png

## Next Steps:
Once you have created these files, the BaseLayout.astro has been updated to reference them properly.
