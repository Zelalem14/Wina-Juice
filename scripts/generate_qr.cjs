const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const targetUrl = 'https://wina-juice.vercel.app';
const publicDir = path.resolve(__dirname, '..', 'public');
const outputPath = path.resolve(publicDir, 'wina-juice-qr.png');
const standardPath = path.resolve(publicDir, 'wina-juice-qr-standard.png');

async function run() {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. High-resolution PNG (2048x2048) with High Error Correction Level 'H' & Forest Green
  await QRCode.toFile(outputPath, targetUrl, {
    width: 2048,
    margin: 3,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#14532d', // Wina signature deep forest green
      light: '#ffffff'  // Pure crisp white background
    }
  });

  // 2. High-contrast Classic Black/White (2048x2048) for standard commercial printers
  await QRCode.toFile(standardPath, targetUrl, {
    width: 2048,
    margin: 3,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  });

  console.log(`Successfully generated high-res QR codes in public/ pointing to ${targetUrl}`);
}

run().catch(console.error);
