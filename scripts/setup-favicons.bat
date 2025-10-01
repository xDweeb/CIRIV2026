@echo off
echo 🔧 CIRIV 2026 Favicon Setup
echo ==============================
echo.

REM Check if CIRIV logo exists
if not exist "public\assets\logos\CIRIV.png" (
    echo ❌ Error: CIRIV.png not found in public\assets\logos\
    echo Please ensure the CIRIV logo is available at public\assets\logos\CIRIV.png
    pause
    exit /b 1
)

echo ✅ Found CIRIV logo at public\assets\logos\CIRIV.png
echo.

REM Create favicons directory if it doesn't exist
if not exist "public\favicons" mkdir "public\favicons"

echo 📁 Created public\favicons\ directory
echo.

echo 🌐 Next Steps:
echo 1. Go to https://realfavicongenerator.net/
echo 2. Upload your file: public\assets\logos\CIRIV.png
echo 3. Configure options (keep defaults for most settings)
echo 4. Generate and download the favicon package
echo 5. Extract the downloaded zip file
echo 6. Copy these files to public\favicons\:
echo    - favicon.ico
echo    - favicon-16x16.png
echo    - favicon-32x32.png
echo    - apple-touch-icon.png
echo    - android-chrome-192x192.png
echo    - android-chrome-512x512.png
echo    - mstile-150x150.png
echo.

echo 🚀 Alternative: Use ImageMagick (if installed)
echo Download ImageMagick from: https://imagemagick.org/script/download.php#windows
echo.

echo 🎉 Favicon setup instructions ready!
echo The BaseLayout.astro has been updated with proper favicon tags.
echo Your site will display the CIRIV logo in browser tabs once you generate the favicon files.
echo.

pause
