const equals = require("../lib/equals");
const assert = require("chai").assert;

describe("equals", () => {
  it("should compare boolean values correctly", () => {
    assert(equals(true, true));
    assert(equals(false, false));
    assert(!equals(true, false));
    assert(!equals(false, true));
  });
  it("should compare number values correctly", () => {
    assert(equals(1, 1));
    assert(equals(0, 0));
    assert(!equals(1, 0));
    assert(!equals(0, 1));
  });
  it("should compare NaN correctly", () => {
    assert(!equals(NaN, NaN));
  });
  it("should compare the empty object correctly", () => {
    assert(equals({}, {}));
  });
  it("should compare simple objects correctly", () => {
    assert(equals({a:1}, {a:1}));
    assert(equals({a:1,b:2}, {a:1,b:2}));
    assert(equals({a:1,b:2}, {b:2,a:1}));
    assert(!equals({a:1,b:2}, {a:1}));
    assert(!equals({a:1}, {b:2,a:1}));
  });
  it("should compare nested objects correctly", () => {
    assert(equals({a:{}}, {a:{}}));
    assert(equals({a:{b:3}}, {a:{b:3}}));
    assert(!equals({a:{b:3}}, {a:{b:4}}));
    assert(!equals({b:{b:3}}, {a:{b:3}}));
    assert(!equals({a:{b:3}}, {a:{b:3,x:7}}));
    assert(!equals({a:{b:3,x:7}}, {a:{b:3}}));
    assert(equals({a:{b:3,x:7}}, {a:{b:3,x:7}}));
  });
  it("should compare empty arrays correctly", () => {
    assert(equals([], []));
  });
  it("should compare arrays correctly", () => {
    assert(equals([0], [0]));
    assert(!equals([0], [1]));
    assert(!equals([0], [0, 1]));
    assert(!equals([0, 1], [0]));
  });
});