const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Paths
const inputLogo = path.join(__dirname, '..', 'public', 'assets', 'logos', 'CIRIV.png');
const outputDir = path.join(__dirname, '..', 'public', 'favicons');

// Favicon sizes to generate
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 150, name: 'mstile-150x150.png' }
];

async function generateFavicons() {
  try {
    // Check if input logo exists
    if (!fs.existsSync(inputLogo)) {
      console.error('❌ Error: CIRIV.png not found at', inputLogo);
      process.exit(1);
    }

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('🔧 Generating favicons from CIRIV logo...');
    console.log('📁 Input:', inputLogo);
    console.log('📁 Output:', outputDir);
    console.log('');

    // Generate each favicon size
    for (const favicon of faviconSizes) {
      const outputPath = path.join(outputDir, favicon.name);
      
      await sharp(inputLogo)
        .resize(favicon.size, favicon.size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated ${favicon.name} (${favicon.size}x${favicon.size})`);
    }

    // Generate ICO file (requires special handling)
    console.log('🔄 Generating favicon.ico...');
    
    // Create multiple sizes for ICO
    const icoSizes = [16, 32, 48];
    const icoPath = path.join(outputDir, 'favicon.ico');
    
    // For ICO, we'll create a 32x32 PNG as fallback
    // Note: Sharp doesn't natively support ICO, so we create PNG
    await sharp(inputLogo)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(outputDir, 'favicon-ico-temp.png'));
    
    console.log('⚠️  Note: Generated PNG for ICO. Use online converter or ImageMagick for true ICO format.');

    console.log('');
    console.log('🎉 Favicon generation complete!');
    console.log('');
    console.log('📋 Generated files:');
    
    // List generated files
    const files = fs.readdirSync(outputDir);
    files.forEach(file => {
      const filePath = path.join(outputDir, file);
      const stats = fs.statSync(filePath);
      console.log(`  - ${file} (${Math.round(stats.size / 1024)} KB)`);
    });

    console.log('');
    console.log('🔧 Next steps:');
    console.log('1. Convert favicon-ico-temp.png to favicon.ico using an online converter');
    console.log('2. Or use ImageMagick: magick favicon-ico-temp.png favicon.ico');
    console.log('3. Delete favicon-ico-temp.png after conversion');
    console.log('4. Test your favicon at: https://realfavicongenerator.net/favicon_checker');

  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

// Check if Sharp is available
try {
  require.resolve('sharp');
  generateFavicons();
} catch (e) {
  console.log('📦 Sharp not installed. Install it with:');
  console.log('npm install --save-dev sharp');
  console.log('');
  console.log('Or use the online generator at: https://realfavicongenerator.net/');
}
