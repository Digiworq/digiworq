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

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  files.forEach(file => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    fs.copyFileSync(srcFile, destFile);
  });
  console.log('Copied images directory');
}
