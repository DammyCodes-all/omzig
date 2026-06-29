import { convert } from '@opendataloader/pdf';
import * as path from 'path';

const entryDir = path.resolve(__dirname, 'entry');
const outputDir = path.resolve(__dirname, 'output');

async function main() {
  console.log(`Converting files in: ${entryDir}`);
  console.log(`Output directory: ${outputDir}`);

  try {
    const result = await convert([entryDir], {
      outputDir,
      format: 'markdown',
    });

    console.log(`\nConversion complete. Output written to: ${outputDir}`);
    console.log('Result:', JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
