const assert = require("chai").assert;
const selector = require("../lib/selector");

describe("selector", () => {
  it("should select paths", () => {
    assert.equal(3, selector("x[3]", {x:[0,1,2,3]}));
  });
});
