const mocha = require("mocha");
const assert = require("chai").assert;

const path = require("../lib/path");

describe("path", () => {
  it("should parse a path", () => {
    assert.deepEqual(path("a.b.c"), ["a", "b", "c"]);
    assert.deepEqual(path("foo.bar.baz"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("'foo'.bar.baz"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("foo.'bar'.baz"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("foo.bar.'baz'"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("foo.'bar'.'baz'"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("'foo'.bar.'baz'"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("'foo'.'bar'.baz"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("'foo'.'bar'.'baz'"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("foo[bar]"), ["foo", "bar"]);
    assert.deepEqual(path("foo[bar][baz]"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("foo['bar']"), ["foo", "bar"]);
    assert.deepEqual(path("foo[bar]['baz']"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("foo['bar'][baz]"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("foo['bar']['baz']"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("'foo'[bar]"), ["foo", "bar"]);
    assert.deepEqual(path("'foo'[bar][baz]"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("'foo'['bar']"), ["foo", "bar"]);
    assert.deepEqual(path("'foo'[bar]['baz']"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("'foo'['bar'][baz]"), ["foo", "bar", "baz"]);
    assert.deepEqual(path("'foo'['bar']['baz']"), ["foo", "bar", "baz"]);
  });
});