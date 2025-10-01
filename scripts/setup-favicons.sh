#!/bin/bash

# CIRIV Favicon Generation Script
# This script helps you set up favicons for your CIRIV project

echo "🔧 CIRIV 2026 Favicon Setup"
echo "=============================="
echo ""

# Check if CIRIV logo exists
if [ ! -f "public/assets/logos/CIRIV.png" ]; then
    echo "❌ Error: CIRIV.png not found in public/assets/logos/"
    echo "Please ensure the CIRIV logo is available at public/assets/logos/CIRIV.png"
    exit 1
fi

echo "✅ Found CIRIV logo at public/assets/logos/CIRIV.png"
echo ""

# Create favicons directory if it doesn't exist
mkdir -p public/favicons

echo "📁 Created public/favicons/ directory"
echo ""

echo "🌐 Next Steps:"
echo "1. Go to https://realfavicongenerator.net/"
echo "2. Upload your file: public/assets/logos/CIRIV.png"
echo "3. Configure options (keep defaults for most settings)"
echo "4. Generate and download the favicon package"
echo "5. Extract the downloaded zip file"
echo "6. Copy these files to public/favicons/:"
echo "   - favicon.ico"
echo "   - favicon-16x16.png"
echo "   - favicon-32x32.png"
echo "   - apple-touch-icon.png"
echo "   - android-chrome-192x192.png"
echo "   - android-chrome-512x512.png"
echo "   - mstile-150x150.png"
echo ""

echo "🚀 Alternative: Use ImageMagick (if installed)"
echo "Run these commands to generate favicons automatically:"
echo ""

# Check if ImageMagick is available
if command -v magick &> /dev/null || command -v convert &> /dev/null; then
    echo "✅ ImageMagick detected! Generating favicons..."
    
    # Use magick if available, otherwise fall back to convert
    if command -v magick &> /dev/null; then
        CMD="magick"
    else
        CMD="convert"
    fi
    
    # Generate different sizes
    $CMD public/assets/logos/CIRIV.png -resize 16x16 public/favicons/favicon-16x16.png
    $CMD public/assets/logos/CIRIV.png -resize 32x32 public/favicons/favicon-32x32.png
    $CMD public/assets/logos/CIRIV.png -resize 180x180 public/favicons/apple-touch-icon.png
    $CMD public/assets/logos/CIRIV.png -resize 192x192 public/favicons/android-chrome-192x192.png
    $CMD public/assets/logos/CIRIV.png -resize 512x512 public/favicons/android-chrome-512x512.png
    $CMD public/assets/logos/CIRIV.png -resize 150x150 public/favicons/mstile-150x150.png
    
    # Generate multi-size ICO file
    $CMD public/assets/logos/CIRIV.png \( -clone 0 -resize 16x16 \) \( -clone 0 -resize 32x32 \) \( -clone 0 -resize 48x48 \) -delete 0 public/favicons/favicon.ico
    
    echo "✅ Favicons generated successfully!"
    echo ""
    echo "📋 Generated files:"
    ls -la public/favicons/
else
    echo "⚠️  ImageMagick not found. Please install it or use the online generator."
    echo ""
    echo "Install ImageMagick:"
    echo "- macOS: brew install imagemagick"
    echo "- Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "- Windows: Download from https://imagemagick.org/script/download.php#windows"
fi

echo ""
echo "🎉 Favicon setup complete!"
echo "The BaseLayout.astro has been updated with proper favicon tags."
echo "Your site will now display the CIRIV logo in browser tabs!"
