import { MarkItDown } from 'markitdown-ts';
import * as fs from 'fs';
import * as path from 'path';

const entryDir = path.resolve(__dirname, 'entry');
const outputDir = path.resolve(__dirname, '..', 'output');

async function main() {
  const markitdown = new MarkItDown();
  const files = fs.readdirSync(entryDir);

  if (files.length === 0) {
    console.log('No entry files found in scripts/entry/');
    return;
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const file of files) {
    const filePath = path.join(entryDir, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;

    console.log(`\nConverting: ${file}`);
    try {
      const result = await markitdown.convert(filePath);
      if (result) {
        const baseName = path.parse(file).name;
        const ext = path.extname(file).toLowerCase();
        const outName =
          ext === '.md' || ext === '.markdown'
            ? `${baseName}.converted.md`
            : `${baseName}.md`;
        const outPath = path.join(outputDir, outName);
        fs.writeFileSync(outPath, result.markdown);
        console.log(`  Title: ${result.title ?? '(none)'}`);
        console.log(`  Output: ${outPath}`);
        console.log(`  Size: ${result.markdown.length} chars`);
      } else {
        console.log(`  No result returned`);
      }
    } catch (err) {
      console.error(`  Error:`, err);
    }
  }
}

main().catch(console.error);
