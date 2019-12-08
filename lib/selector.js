const path = require("./path");

function makeselector(p) {
  let ps = path(p);
  if (!ps) {
    throw new Error("Invalid path: " + p);
  }
  return (obj) => {
    for (let i = 0; i < ps.length && typeof obj !== "undefined"; i += 1) {
      obj = obj[ps[i]];
    }
    return obj;
  };
}

function select(p, obj) {
  let selector = makeselector(p);
  return selector(obj);
}

module.exports = function() {
  switch (arguments.length) {
    case 1:
      return makeselector(arguments[0]);
    case 2:
      return select(arguments[0], arguments[1]);
    default:
        throw new Error("Invalid number of arguments: " + arguments.length);
  }
}
module.exports.makeselector = makeselector;
module.exports.select = select;
