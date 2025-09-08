export function getNestedValue(obj: any, targetKey: string): any {
  if (typeof obj !== 'object' || obj === null) return undefined;
 // Check at the current level
  if (obj.hasOwnProperty(targetKey)) {
    return obj[targetKey];
  }

  // Recursively search in nested objects (fallback for non-path keys)
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      const result = getNestedValue(obj[key], targetKey);
      if (result !== undefined) {
        return result;
      }
    }
  }
  // Handle nested path (e.g., "parent.targetKey")
  if (targetKey.includes('.')) {
    const [parentKey, ...restKeys] = targetKey.split('.');
    const nestedObj = obj[parentKey];
    if (nestedObj === undefined) return undefined;
    return getNestedValue(nestedObj, restKeys.join('.'));
  }

 

  return undefined;}