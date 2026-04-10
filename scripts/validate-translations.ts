/**
 * Translation Validation Script
 * Validates that all translation files have identical structure
 */

import de from '../messages/de.json';
import en from '../messages/en.json';
import vi from '../messages/vi.json';

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
interface JSONObject {
  [key: string]: JSONValue;
}
type JSONArray = JSONValue[];

/**
 * Recursively get all keys from a nested object
 */
function getKeys(obj: JSONObject, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value)
    ) {
      return getKeys(value as JSONObject, path);
    }
    return [path];
  });
}

const deKeys = new Set(getKeys(de as JSONObject));
const enKeys = new Set(getKeys(en as JSONObject));
const viKeys = new Set(getKeys(vi as JSONObject));

const missingInEn = [...deKeys].filter((k) => !enKeys.has(k));
const missingInVi = [...deKeys].filter((k) => !viKeys.has(k));
const extraInEn = [...enKeys].filter((k) => !deKeys.has(k));
const extraInVi = [...viKeys].filter((k) => !deKeys.has(k));

let hasErrors = false;

console.log('🔍 Translation Validation Report\n');
console.log(`Total keys in DE (source): ${deKeys.size}`);
console.log(`Total keys in EN: ${enKeys.size}`);
console.log(`Total keys in VI: ${viKeys.size}\n`);

if (missingInEn.length > 0) {
  console.error('❌ Missing in EN:', missingInEn);
  hasErrors = true;
} else {
  console.log('✅ EN has all required keys');
}

if (missingInVi.length > 0) {
  console.error('❌ Missing in VI:', missingInVi);
  hasErrors = true;
} else {
  console.log('✅ VI has all required keys');
}

if (extraInEn.length > 0) {
  console.warn('⚠️  Extra in EN (not in DE):', extraInEn);
  hasErrors = true;
} else {
  console.log('✅ EN has no extra keys');
}

if (extraInVi.length > 0) {
  console.warn('⚠️  Extra in VI (not in DE):', extraInVi);
  hasErrors = true;
} else {
  console.log('✅ VI has no extra keys');
}

if (!hasErrors) {
  console.log('\n✨ All translation files are valid!');
  process.exit(0);
} else {
  console.error('\n💥 Translation validation failed!');
  process.exit(1);
}
