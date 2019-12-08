const util = require("./util");
const selector = require("./selector");
const equals = require("./equals");

function makematcher(spec) {
  let funcs = [];
  let spectype = util.jsontypeof(spec);
  switch (spectype) {
    case "object":
      generalmatchers(spec, funcs);
      let type = "object";
      if (util.isdefined(spec["@type"])) {
        type = spec["@type"];
      }
      switch (type) {
        case "object":
          objectmatchers(spec, funcs);
          break;
        case "array":
          arraymatchers(spec, funcs);
          sequencematchers(spec, funcs);
          break;
        case "string":
          stringmatchers(spec, funcs);
          sequencematchers(spec, funcs);
          break;
        case "number":
          numbermatchers(spec, funcs);
          break;
        case "integer":
          funcs.push(x => Math.round(x) === x);
          numbermatchers(spec, funcs);
          break;
      }
      return input => {
        for (let i = 0; i < funcs.length; i += 1) {
          if (!funcs[i](input)) {
            return false;
          }
        }
        return true;
      };
    case "array":
      return input => equals(input, spec);
    default:
      return input => input === spec;
  }
}

function numbermatchers(spec, funcs) {
  if (util.isnumber(spec, ">=")) {
    let value = spec[">="];
    funcs.push(x => x >= value);
  }
  if (util.isnumber(spec, "<=")) {
    let value = spec["<="];
    funcs.push(x => x <= value);
  }
  if (util.isnumber(spec, ">")) {
    let value = spec[">"];
    funcs.push(x => x > value);
  }
  if (util.isnumber(spec, "<")) {
    let value = spec["<"];
    funcs.push(x => x < value);
  }
}

function generalmatchers(spec, funcs) {
  if (util.isstring(spec, "@type")) {
    if (spec["@type"] === "integer") {
      funcs.push(jsontypeis("number"));
    } else {
      funcs.push(jsontypeis(spec["@type"]));
    }
  }
  if (util.isdefined(spec, "==")) {
    let value = spec["=="];
    funcs.push(x => x == value);
  }
  if (util.isdefined(spec, "!=")) {
    let value = spec["!="];
    funcs.push(x => x !== value);
  }
  if (util.isarray(spec, "@oneof")) {
    let matchers = [];
    spec["@oneof"].forEach(s => matchers.push(makematcher(s)));
    funcs.push(x => {
      for (let i = 0; i < matchers.length; i += 1) {
        if (matchers(x)) {
          return true;
        }
      }
      return false;
    });
  }
  if (util.isarray(spec, "@noneof")) {
    let matchers = [];
    spec["@noneof"].forEach(s => matchers.push(makematcher(s)));
    funcs.push(x => {
      for (let i = 0; i < matchers.length; i += 1) {
        if (matchers(x)) {
          return false;
        }
      }
      return true;
    });
  }
}

function stringmatchers(spec, funcs) {
  if (util.isdefined(spec, "~=")) {
    let regex = new RegExp(spec["~="]);
    funcs.push(x => regex.test(x));
  }
}

function objectmatchers(spec, funcs) {
  Object.keys(spec).forEach(key => {
    let matcher = makematcher(spec[key]);
    let select = selector.makeselector(key);
    funcs.push(util.compose(matcher, select));
  });
}

function arraymatchers(spec, funcs) {
  if (util.isdefined(spec, "@each")) {
    let matcher = makematcher(spec["@each"]);
    funcs.push(arr => {
      for (let i = 0; i < arr.length; i += 1) {
        if (!matcher(arr[i])) {
          return false;
        }
      }
      return true;
    });
  }
}

function sequencematchers(spec, funcs) {
  if (util.isdefined(spec, "@length")) {
    let lengthspec = spec["@length"];
    lengthspec["@type"] = "integer";
    let matcher = makematcher(lengthspec);
    funcs.push(seq => matcher(seq.length));
  }
}

function match(spec, thing) {
  let matcher = makematcher(spec);
  return matcher(thing);
}

module.exports = function () {
  switch (arguments.length) {
    case 1:
      return makematcher(arguments[0]);
    case 2:
      return match(arguments[0], arguments[1]);
    default:
      throw new Error("Invalid number of arguments: " + arguments.length);
  }
};

module.exports.makematcher = makematcher;
module.exports.match = match;
module.exports.equals = equals;
