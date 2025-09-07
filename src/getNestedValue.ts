export function getNestedValue(obj: any, targetKey: string): any {
  if (typeof obj !== 'object' || obj === null) return "Not Found";

  // Handle single key - check current level first
  if (obj.hasOwnProperty(targetKey)) {
    const value = obj[targetKey];
    return value !== undefined && value !== null ? value : "Not Found";
  }

  // Recursively search for single key
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'object' && obj[key] !== null) {
      const result = getNestedValue(obj[key], targetKey);
      if (result !== "Not Found") {
        return result;
      }
    }
  }

  // Handle dot notation paths - follow exact path only
  if (targetKey.includes('.')) {
    const keys = targetKey.split('.');
    let current = obj;
    
    for (const key of keys) {
      if (current === null || typeof current !== 'object' || !current.hasOwnProperty(key)) {
        return "Not Found";
      }
      current = current[key];
    }
    
    return current !== undefined && current !== null ? current : "Not Found";
  }



  return "Not Found";
}