function jsontypeof(thing) {
  let jstype = typeof thing;
  switch (jstype) {
    case "object":
      if (Array.isArray(thing)) {
        return "array";
      }
      if (thing === null) {
        return "null";
      }
      return "object";
    case "string":
    case "number":
    case "boolean":
      return jstype;
    default:
      return "undefined";
  }
}

function matchespredicate(predicate, obj, key) {
  if (typeof key === "undefined") {
    return predicate(obj);
  } else if (typeof obj === "undefined") {
    return false;
  } else {
    return predicate(obj[key]);
  }
}

function isoftype(type, obj, key) {
  return matchespredicate(thing => typeof thing === type, obj, key);
}

function isobject(obj, key) {
  return matchespredicate(thing => {
    if (typeof thing !== "object") {
      return false;
    }
    if (Array.isArray(thing)) {
      return false;
    }
    if (thing === null) {
      return false;
    }
    return true;
  }, obj, key);
}

function isarray(obj, key) {
  return matchespredicate(thing => Array.isArray(thing), obj, key);
}

function isnull(obj, key) {
  return matchespredicate(thing => thing === null, obj, key);
}

function isundefined(obj, key) {
  return isoftype("undefined", obj, key);
}

function isdefined(obj, key) {
  return !isundefined(obj, key);
}

function isstring(obj, key) {
  return isoftype("string", obj, key);
}

function isnumber(obj, key) {
  return isoftype("number", obj, key);
}

function isboolean(obj, key) {
  return isoftype("boolean", obj, key);
}

function compose(f, g) {
  return x => f(g(x));
}

module.exports = {
  jsontypeof: jsontypeof,
  isdefined: isdefined,
  isundefined: isundefined,
  isobject: isobject,
  isarray: isarray,
  isstring: isstring,
  isnumber: isnumber,
  isboolean: isboolean,
  isnull: isnull,
  compose: compose
};
