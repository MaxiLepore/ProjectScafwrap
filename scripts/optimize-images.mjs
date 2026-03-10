import sharp from 'sharp';
import { glob, stat, writeFile, rename, unlink } from 'node:fs/promises';
import path from 'node:path';

const TARGETS = [
  { dir: 'public/serviceimage', maxWidth: 1200, quality: 80 },
  { dir: 'public/images/hero', maxWidth: 1920, quality: 80 },
  { dir: 'public/images/construction', maxWidth: 1920, quality: 80 },
  { dir: 'public/images/reclads', maxWidth: 1920, quality: 80 },
];

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function optimizeFile(filePath, maxWidth, quality) {
  const originalStats = await stat(filePath);
  const originalSize = originalStats.size;

  const image = sharp(filePath);
  const metadata = await image.metadata();

  let pipeline = sharp(filePath);

  if (metadata.width && metadata.width > maxWidth) {
    pipeline = pipeline.resize(maxWidth);
  }

  pipeline = pipeline.jpeg({ quality, mozjpeg: true });

  // Write to temp file then rename — avoids OneDrive file lock issues
  const tempPath = filePath + '.tmp';
  const buffer = await pipeline.toBuffer();
  await writeFile(tempPath, buffer);
  try { await unlink(filePath); } catch { /* ignore */ }
  await rename(tempPath, filePath);

  const newSize = buffer.length;
  const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);

  console.log(
    `  ${path.basename(filePath)}: ${formatBytes(originalSize)} → ${formatBytes(newSize)} (${reduction}% reduction)`
  );

  return { originalSize, newSize };
}

async function processDirectory({ dir, maxWidth, quality }) {
  console.log(`\n📁 Processing ${dir} (max ${maxWidth}px, quality ${quality})`);

  const pattern = path.join(dir, '*.{jpg,JPG,jpeg,JPEG}').replace(/\\/g, '/');
  const files = [];

  for await (const file of glob(pattern)) {
    files.push(file);
  }

  if (files.length === 0) {
    console.log('  No images found.');
    return { totalOriginal: 0, totalNew: 0, count: 0 };
  }

  let totalOriginal = 0;
  let totalNew = 0;

  for (const file of files.sort()) {
    const { originalSize, newSize } = await optimizeFile(file, maxWidth, quality);
    totalOriginal += originalSize;
    totalNew += newSize;
  }

  console.log(
    `  Total: ${formatBytes(totalOriginal)} → ${formatBytes(totalNew)} (${files.length} files)`
  );

  return { totalOriginal, totalNew, count: files.length };
}

async function main() {
  console.log('🖼️  Image Optimization Script');
  console.log('============================');

  let grandOriginal = 0;
  let grandNew = 0;
  let grandCount = 0;

  for (const target of TARGETS) {
    const { totalOriginal, totalNew, count } = await processDirectory(target);
    grandOriginal += totalOriginal;
    grandNew += totalNew;
    grandCount += count;
  }

  // Also optimize video poster if it exists
  try {
    const posterPath = 'public/images/hero/video-poster.jpg';
    await stat(posterPath);
    console.log('\n📁 Processing video poster');
    const img = sharp(posterPath).resize(1920).webp({ quality: 80 });
    await img.toFile('public/images/hero/video-poster.webp');
    console.log('  video-poster.jpg → video-poster.webp (converted)');
  } catch {
    // poster doesn't exist yet, skip
  }

  console.log('\n============================');
  console.log(
    `✅ Done! ${grandCount} files: ${formatBytes(grandOriginal)} → ${formatBytes(grandNew)}`
  );
  const totalReduction = grandOriginal > 0
    ? ((1 - grandNew / grandOriginal) * 100).toFixed(1)
    : '0';
  console.log(`   Total reduction: ${totalReduction}%`);
}

main().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});
