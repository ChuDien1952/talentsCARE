/**
 * Merge new translation keys into existing translation files
 */

import * as fs from 'fs';
import * as path from 'path';

const messagesDir = path.join(process.cwd(), 'messages');

// Function to deep merge objects
function deepMerge(target: any, source: any): any {
  const output = { ...target };

  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (target[key]) {
        output[key] = deepMerge(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    } else {
      output[key] = source[key];
    }
  }

  return output;
}

// Process each locale with its specific new keys
const locales = [
  { code: 'de', keysFile: 'de-new-keys.json' },
  { code: 'en', keysFile: 'en-new-keys.json' },
  { code: 'vi', keysFile: 'vi-new-keys.json' },
];

locales.forEach(({ code, keysFile }) => {
  const newKeysPath = path.join(messagesDir, keysFile);
  const filePath = path.join(messagesDir, `${code}.json`);

  if (fs.existsSync(newKeysPath) && fs.existsSync(filePath)) {
    const newKeys = JSON.parse(fs.readFileSync(newKeysPath, 'utf8'));
    const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const merged = deepMerge(existing, newKeys);

    fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf8');
    console.log(`✓ Merged translations for ${code}`);
  }
});

console.log('\n✓ All translations merged successfully!');
