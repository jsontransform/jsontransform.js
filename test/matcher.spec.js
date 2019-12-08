const assert = require("chai").assert;
const matcher = require("../lib/matcher");

describe("matcher", () => {
  it("should match simple specs", () => {
    assert(matcher("", ""));
  });
});