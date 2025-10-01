# CIRIV 2026 Favicon Setup 🎯

Your CIRIV project now has a complete favicon system that will display your logo in browser tabs, bookmarks, and mobile home screens!

## ✅ What's Been Updated

### 1. BaseLayout.astro
- Added comprehensive favicon tags for all devices and browsers
- Supports ICO, PNG, and SVG formats
- Includes Apple Touch icons, Android Chrome icons, and Microsoft tiles
- Added theme color meta tags for light/dark mode support
- Includes web app manifest and browserconfig

### 2. Configuration Files Created
- `/public/site.webmanifest` - PWA manifest for mobile app-like experience
- `/public/browserconfig.xml` - Windows tile configuration
- Temporary SVG favicon as fallback

### 3. Setup Scripts
- `scripts/setup-favicons.bat` (Windows)
- `scripts/setup-favicons.sh` (Mac/Linux)
- `scripts/generate-favicons.js` (Node.js with Sharp)

## 🚀 Quick Setup (Choose One Method)

### Method 1: Online Generator (Recommended)
1. Go to [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload your file: `public/assets/logos/CIRIV.png`
3. Keep default settings (or customize as needed)
4. Generate and download the favicon package
5. Extract files to `public/favicons/` directory

### Method 2: ImageMagick (Command Line)
```bash
# Install ImageMagick first
# macOS: brew install imagemagick
# Windows: Download from imagemagick.org
# Ubuntu: sudo apt-get install imagemagick

# Then run:
cd CIRIV2026
magick public/assets/logos/CIRIV.png -resize 16x16 public/favicons/favicon-16x16.png
magick public/assets/logos/CIRIV.png -resize 32x32 public/favicons/favicon-32x32.png
magick public/assets/logos/CIRIV.png -resize 180x180 public/favicons/apple-touch-icon.png
magick public/assets/logos/CIRIV.png -resize 192x192 public/favicons/android-chrome-192x192.png
magick public/assets/logos/CIRIV.png -resize 512x512 public/favicons/android-chrome-512x512.png
magick public/assets/logos/CIRIV.png -resize 150x150 public/favicons/mstile-150x150.png
magick public/assets/logos/CIRIV.png -resize 32x32 public/favicons/favicon.ico
```

### Method 3: Node.js Script
```bash
cd scripts
npm install
npm run generate-favicons
```

## 📁 Required Files Structure
After generation, your `public/favicons/` should contain:
```
public/favicons/
├── favicon.ico (16x16, 32x32, 48x48)
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png (180x180)
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── mstile-150x150.png
```

## 🎨 Features Included

### Multi-Device Support
- **Desktop browsers**: ICO and PNG favicons
- **iOS devices**: Apple Touch Icon (180x180)
- **Android devices**: Chrome icons (192x192, 512x512)
- **Windows tiles**: MSApplication tile (150x150)
- **Modern browsers**: SVG favicon (scalable)

### Theme Integration
- Light mode theme color: `#0d9488` (teal)
- Dark mode theme color: `#134e4a` (dark teal)
- Matches your site's color scheme

### Progressive Web App Ready
- Web app manifest for mobile installation
- Proper icons for home screen shortcuts
- App-like experience on mobile devices

### Caching & Performance
- Proper file versioning
- Optimized file sizes
- Multiple formats for browser compatibility

## 🔍 Testing Your Favicon

1. **Local testing**: Run your Astro dev server and check browser tab
2. **Online checker**: [Favicon Checker](https://realfavicongenerator.net/favicon_checker)
3. **Mobile testing**: Open on phone/tablet to test home screen icons

## 🛠️ Troubleshooting

### Favicon not showing?
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check browser dev tools for 404 errors
- Ensure files exist in `public/favicons/`

### Wrong icon displaying?
- Some browsers cache favicons aggressively
- Try different browser or incognito mode
- Wait a few minutes for cache to clear

### Files missing?
- Run the setup script again
- Check file paths are correct
- Ensure CIRIV.png exists in source location

## 🎯 Next Steps

1. Generate your favicon files using one of the methods above
2. Test in your browser to see the CIRIV logo in the tab
3. Deploy to see it live across all devices
4. Optional: Customize colors and PWA settings in the manifest

Your CIRIV logo will now appear in:
- Browser tabs and bookmarks
- Mobile home screen shortcuts
- Browser favorites/speed dial
- Windows start menu tiles
- Search engine results (when applicable)

Perfect branding for your international conference! 🌟
