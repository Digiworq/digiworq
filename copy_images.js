import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy logomark 1.png to public & src/assets
const logoSrc = path.join(__dirname, 'logomark 1.png');
const publicDir = path.join(__dirname, 'public');
const assetsDir = path.join(__dirname, 'src', 'assets');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, path.join(publicDir, 'digiworq-logo.png'));
  fs.copyFileSync(logoSrc, path.join(publicDir, 'logomark 1.png'));
  fs.copyFileSync(logoSrc, path.join(assetsDir, 'digiworq-logo.png'));
  console.log('Copied digiworq-logo.png');
}

// Copy images folder
const srcDir = path.join(__dirname, 'images');
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy video folder
const videoSrcDir = path.join(__dirname, 'video');
const videoDestDir = path.join(__dirname, 'public', 'video');

if (!fs.existsSync(videoDestDir)) {
  fs.mkdirSync(videoDestDir, { recursive: true });
}

if (fs.existsSync(videoSrcDir)) {
  const files = fs.readdirSync(videoSrcDir);
  files.forEach(file => {
    const srcFile = path.join(videoSrcDir, file);
    const destFile = path.join(videoDestDir, file);
    fs.copyFileSync(srcFile, destFile);
    if (file.includes('bannervideo')) {
      fs.copyFileSync(srcFile, path.join(videoDestDir, 'bannervideo.mp4'));
    }
  });
  console.log('Copied video directory');
}

