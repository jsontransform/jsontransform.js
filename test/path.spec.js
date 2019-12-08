const mocha = require("mocha");
const assert = require("chai").assert;

const path = require("../lib/path");

describe("path", () => {
  it("should parse a.b.c", () => {
    assert.deepEqual(path("a.b.c"), ["a", "b", "c"]);
  });
  [
    "foo.bar.baz",
    "'foo'.bar.baz",
    "foo.'bar'.baz",
    "foo.bar.'baz'",
    "foo.'bar'.'baz'",
    "'foo'.bar.'baz'",
    "'foo'.'bar'.baz",
    "'foo'.'bar'.'baz'",
    "foo[bar][baz]",
    "foo[bar]['baz']",
    "foo['bar'][baz]",
    "foo['bar']['baz']",
    "'foo'[bar][baz]",
    "'foo'[bar]['baz']",
    "'foo'['bar'][baz]",
    "'foo'['bar']['baz']",
    "foo[bar].baz",
    "foo[bar].'baz'",
    "foo['bar'].baz",
    "foo['bar'].'baz'",
    "'foo'[bar].baz",
    "'foo'[bar].'baz'",
    "'foo'['bar'].baz",
    "foo.bar[baz]",
    "foo.bar['baz']",
    "foo.'bar'[baz]",
    "foo.'bar'['baz']",
    "'foo'.bar[baz]",
    "'foo'.bar['baz']",
    "'foo'.'bar'[baz]",
    "'foo'.'bar'['baz']"
  ].forEach(p => {
    it("should parse " + p, () => {
      assert.deepEqual(path(p), ["foo", "bar", "baz"]);
    })
  });
  [
    "foo[bar]",
    "foo['bar']",
    "'foo'[bar]",
    "'foo'['bar']"
  ].forEach(p => {
    it("should parse " + p, () => {
      assert.deepEqual(path(p), ["foo", "bar"]);
    })
  });
  [
    "foo.bar.baz.",
    "foo.'bar.baz",
    "foo'.'bar'.baz",
    "foo..bar.baz"
  ].forEach(p => {
    it("should fail parsing of " + p + " gracefully", () => {
      assert.strictEqual(path(p), false);
    })
  });
  it("should parse quoted apostrophes", () => {
    assert.deepEqual(path("foo.'x''y''z'"), ["foo", "x'y'z"]);
    assert.deepEqual(path("foo.'''xyz'"), ["foo", "'xyz"]);
    assert.deepEqual(path("foo.'xyz'''"), ["foo", "xyz'"]);
  });
});