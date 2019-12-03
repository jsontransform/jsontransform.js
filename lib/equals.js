/**
 * strict equality comparison that works recursively for complex types.
 * 
 * can compare
 * - boolean
 * - number
 * - string
 * - null
 * - object (and arrays)
 * types. 
 */
function equals(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== "object") {
    return false;
  }
  if (typeof b !== "object") {
    return false;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i += 1) {
      if (!equals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  let akeys = Object.keys(a);
  let bkeys = Object.keys(b);
  if (akeys.length !== bkeys.length) {
    return false;
  }
  for (let i = 0; i < akeys.length; i += 1) {
    let key = akeys[i];
    if (!equals(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

module.exports = equals;
