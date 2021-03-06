const mocha = require("mocha");
const assert = require("chai").assert;

const util = require("../lib/util");

describe("util", () => {
    describe("jsontypeof", () => {
        it("should return `boolean` for `true`", () => assert.strictEqual(util.jsontypeof(true), "boolean"));
        it("should return `boolean` for `false`", () => assert.strictEqual(util.jsontypeof(false), "boolean"));
        it("should return `number` for `0`", () => assert.strictEqual(util.jsontypeof(0), "number"));
        it("should return `number` for `0.5`", () => assert.strictEqual(util.jsontypeof(0.5), "number"));
        it("should return `number` for `-1`", () => assert.strictEqual(util.jsontypeof(-1), "number"));
        it("should return `number` for `1`", () => assert.strictEqual(util.jsontypeof(1), "number"));
        it("should return `number` for `17`", () => assert.strictEqual(util.jsontypeof(17), "number"));
        it("should return `string` for `\"\"`", () => assert.strictEqual(util.jsontypeof(""), "string"));
        it("should return `string` for `\"foo\"`", () => assert.strictEqual(util.jsontypeof("foo"), "string"));
        it("should return `null` for `null`", () => assert.strictEqual(util.jsontypeof(null), "null"));
        it("should return `object` for `{}`", () => assert.strictEqual(util.jsontypeof({}), "object"));
        it("should return `object` for `{foo:\"bar\"}`", () => assert.strictEqual(util.jsontypeof({foo:"bar"}), "object"));
        it("should return `array` for `[]`", () => assert.strictEqual(util.jsontypeof([]), "array"));
        it("should return `array` for `[\"bar\"]`", () => assert.strictEqual(util.jsontypeof(["bar"]), "array"));
    });
    describe("isboolean", () => {
        it("should return true for `true`", () => assert(util.isboolean(true)));
        it("should return true for `false`", () => assert(util.isboolean(false)));
        it("should return false for `0`", () => assert(!util.isboolean(0)));
        it("should return false for `0.5`", () => assert(!util.isboolean(0.5)));
        it("should return false for `-1`", () => assert(!util.isboolean(-1)));
        it("should return false for `1`", () => assert(!util.isboolean(1)));
        it("should return false for `17`", () => assert(!util.isboolean(17)));
        it("should return false for `\"\"`", () => assert(!util.isboolean("")));
        it("should return false for `\"foo\"`", () => assert(!util.isboolean("foo")));
        it("should return false for `null`", () => assert(!util.isboolean(null)));
        it("should return false for `{}`", () => assert(!util.isboolean({})));
        it("should return false for `{foo:\"bar\"}`", () => assert(!util.isboolean({ foo: "bar" })));
        it("should return false for `[]`", () => assert(!util.isboolean([])));
        it("should return false for `[\"bar\"]`", () => assert(!util.isboolean(["bar"])));
    });
    describe("isnumber", () => {
        it("should return false for `true`", () => assert(!util.isnumber(true)));
        it("should return false for `false`", () => assert(!util.isnumber(false)));
        it("should return true for `0`", () => assert(util.isnumber(0)));
        it("should return true for `0.5`", () => assert(util.isnumber(0.5)));
        it("should return true for `-1`", () => assert(util.isnumber(-1)));
        it("should return true for `1`", () => assert(util.isnumber(1)));
        it("should return true for `17`", () => assert(util.isnumber(17)));
        it("should return false for `\"\"`", () => assert(!util.isnumber("")));
        it("should return false for `\"foo\"`", () => assert(!util.isnumber("foo")));
        it("should return false for `null`", () => assert(!util.isnumber(null)));
        it("should return false for `{}`", () => assert(!util.isnumber({})));
        it("should return false for `{foo:\"bar\"}`", () => assert(!util.isnumber({ foo: "bar" })));
        it("should return false for `[]`", () => assert(!util.isnumber([])));
        it("should return false for `[\"bar\"]`", () => assert(!util.isnumber(["bar"])));
    });
    describe("isstring", () => {
        it("should return false for `true`", () => assert(!util.isstring(true)));
        it("should return false for `false`", () => assert(!util.isstring(false)));
        it("should return false for `0`", () => assert(!util.isstring(0)));
        it("should return false for `0.5`", () => assert(!util.isstring(0.5)));
        it("should return false for `-1`", () => assert(!util.isstring(-1)));
        it("should return false for `1`", () => assert(!util.isstring(1)));
        it("should return false for `17`", () => assert(!util.isstring(17)));
        it("should return true for `\"\"`", () => assert(util.isstring("")));
        it("should return true for `\"foo\"`", () => assert(util.isstring("foo")));
        it("should return false for `null`", () => assert(!util.isstring(null)));
        it("should return false for `{}`", () => assert(!util.isstring({})));
        it("should return false for `{foo:\"bar\"}`", () => assert(!util.isstring({ foo: "bar" })));
        it("should return false for `[]`", () => assert(!util.isstring([])));
        it("should return false for `[\"bar\"]`", () => assert(!util.isstring(["bar"])));
    });
    describe("isarray", () => {
        it("should return false for `true`", () => assert(!util.isarray(true)));
        it("should return false for `false`", () => assert(!util.isarray(false)));
        it("should return false for `0`", () => assert(!util.isarray(0)));
        it("should return false for `0.5`", () => assert(!util.isarray(0.5)));
        it("should return false for `-1`", () => assert(!util.isarray(-1)));
        it("should return false for `1`", () => assert(!util.isarray(1)));
        it("should return false for `17`", () => assert(!util.isarray(17)));
        it("should return false for `\"\"`", () => assert(!util.isarray("")));
        it("should return false for `\"foo\"`", () => assert(!util.isarray("foo")));
        it("should return false for `null`", () => assert(!util.isarray(null)));
        it("should return false for `{}`", () => assert(!util.isarray({})));
        it("should return false for `{foo:\"bar\"}`", () => assert(!util.isarray({ foo: "bar" })));
        it("should return true for `[]`", () => assert(util.isarray([])));
        it("should return true for `[\"bar\"]`", () => assert(util.isarray(["bar"])));
    });
    describe("isobject", () => {
        it("should return false for `true`", () => assert(!util.isobject(true)));
        it("should return false for `false`", () => assert(!util.isobject(false)));
        it("should return false for `0`", () => assert(!util.isobject(0)));
        it("should return false for `0.5`", () => assert(!util.isobject(0.5)));
        it("should return false for `-1`", () => assert(!util.isobject(-1)));
        it("should return false for `1`", () => assert(!util.isobject(1)));
        it("should return false for `17`", () => assert(!util.isobject(17)));
        it("should return false for `\"\"`", () => assert(!util.isobject("")));
        it("should return false for `\"foo\"`", () => assert(!util.isobject("foo")));
        it("should return false for `null`", () => assert(!util.isobject(null)));
        it("should return true for `{}`", () => assert(util.isobject({})));
        it("should return true for `{foo:\"bar\"}`", () => assert(util.isobject({ foo: "bar" })));
        it("should return false for `[]`", () => assert(!util.isobject([])));
        it("should return false for `[\"bar\"]`", () => assert(!util.isobject(["bar"])));
    });
    describe("isnull", () => {
        it("should return false for `true`", () => assert(!util.isnull(true)));
        it("should return false for `false`", () => assert(!util.isnull(false)));
        it("should return false for `0`", () => assert(!util.isnull(0)));
        it("should return false for `0.5`", () => assert(!util.isnull(0.5)));
        it("should return false for `-1`", () => assert(!util.isnull(-1)));
        it("should return false for `1`", () => assert(!util.isnull(1)));
        it("should return false for `17`", () => assert(!util.isnull(17)));
        it("should return false for `\"\"`", () => assert(!util.isnull("")));
        it("should return false for `\"foo\"`", () => assert(!util.isnull("foo")));
        it("should return true for `null`", () => assert(util.isnull(null)));
        it("should return false for `{}`", () => assert(!util.isnull({})));
        it("should return false for `{foo:\"bar\"}`", () => assert(!util.isnull({ foo: "bar" })));
        it("should return false for `[]`", () => assert(!util.isnull([])));
        it("should return false for `[\"bar\"]`", () => assert(!util.isnull(["bar"])));
    });
    describe("isboolean (key of an object)", () => {
        it("should return true for `true`", () => assert(util.isboolean({ x: true }, "x")));
        it("should return true for `false`", () => assert(util.isboolean({ x: false }, "x")));
        it("should return false for `0`", () => assert(!util.isboolean({ x: 0 }, "x")));
        it("should return false for `0.5`", () => assert(!util.isboolean({ x: 0.5 }, "x")));
        it("should return false for `-1`", () => assert(!util.isboolean({ x: -1 }, "x")));
        it("should return false for `1`", () => assert(!util.isboolean({ x: 1 }, "x")));
        it("should return false for `17`", () => assert(!util.isboolean({ x: 17 }, "x")));
        it("should return false for `\"\"`", () => assert(!util.isboolean({ x: "" }, "x")));
        it("should return false for `\"foo\"`", () => assert(!util.isboolean({ x: "foo" }, "x")));
        it("should return false for `null`", () => assert(!util.isboolean({ x: null }, "x")));
        it("should return false for `{}`", () => assert(!util.isboolean({ x: {} }, "x")));
        it("should return false for `{foo:\"bar\"}`", () => assert(!util.isboolean({ x: { foo: "bar" } }, "x")));
        it("should return false for `[]`", () => assert(!util.isboolean({ x: [] }, "x")));
        it("should return false for `[\"bar\"]`", () => assert(!util.isboolean({ x: ["bar"] }, "x")));
    });
    describe("isnumber (key of an object)", () => {
        it("should return false for `true`", () => assert(!util.isnumber({ x: true }, "x")));
        it("should return false for `false`", () => assert(!util.isnumber({ x: false }, "x")));
        it("should return true for `0`", () => assert(util.isnumber({ x: 0 }, "x")));
        it("should return true for `0.5`", () => assert(util.isnumber({ x: 0.5 }, "x")));
        it("should return true for `-1`", () => assert(util.isnumber({ x: -1 }, "x")));
        it("should return true for `1`", () => assert(util.isnumber({ x: 1 }, "x")));
        it("should return true for `17`", () => assert(util.isnumber({ x: 17 }, "x")));
        it("should return false for `\"\"`", () => assert(!util.isnumber({ x: "" }, "x")));
        it("should return false for `\"foo\"`", () => assert(!util.isnumber({ x: "foo" }, "x")));
        it("should return false for `null`", () => assert(!util.isnumber({ x: null }, "x")));
        it("should return false for `{}`", () => assert(!util.isnumber({ x: {} }, "x")));
        it("should return false for `{foo:\"bar\"}`", () => assert(!util.isnumber({ x: { foo: "bar" } }, "x")));
        it("should return false for `[]`", () => assert(!util.isnumber({ x: [] }, "x")));
        it("should return false for `[\"bar\"]`", () => assert(!util.isnumber({ x: ["bar"] }, "x")));
    });
    describe("isstring (key of an object)", () => {
        it("should return false for `true`", () => assert(!util.isstring({ x: true }, "x")));
        it("should return false for `false`", () => assert(!util.isstring({ x: false }, "x")));
        it("should return false for `0`", () => assert(!util.isstring({ x: 0 }, "x")));
        it("should return false for `0.5`", () => assert(!util.isstring({ x: 0.5 }, "x")));
        it("should return false for `-1`", () => assert(!util.isstring({ x: -1 }, "x")));
        it("should return false for `1`", () => assert(!util.isstring({ x: 1 }, "x")));
        it("should return false for `17`", () => assert(!util.isstring({ x: 17 }, "x")));
        it("should return true for `\"\"`", () => assert(util.isstring({ x: "" }, "x")));
        it("should return true for `\"foo\"`", () => assert(util.isstring({ x: "foo" }, "x")));
        it("should return false for `null`", () => assert(!util.isstring({ x: null }, "x")));
        it("should return false for `{}`", () => assert(!util.isstring({ x: {} }, "x")));
        it("should return false for `{foo:\"bar\"}`", () => assert(!util.isstring({ x: { foo: "bar" } }, "x")));
        it("should return false for `[]`", () => assert(!util.isstring({ x: [] }, "x")));
        it("should return false for `[\"bar\"]`", () => assert(!util.isstring({ x: ["bar"] }, "x")));
    });
    describe("isarray (key of an object)", () => {
        it("should return false for `true`", () => assert(!util.isarray({ x: true }, "x")));
        it("should return false for `false`", () => assert(!util.isarray({ x: false }, "x")));
        it("should return false for `0`", () => assert(!util.isarray({ x: 0 }, "x")));
        it("should return false for `0.5`", () => assert(!util.isarray({ x: 0.5 }, "x")));
        it("should return false for `-1`", () => assert(!util.isarray({ x: -1 }, "x")));
        it("should return false for `1`", () => assert(!util.isarray({ x: 1 }, "x")));
        it("should return false for `17`", () => assert(!util.isarray({ x: 17 }, "x")));
        it("should return false for `\"\"`", () => assert(!util.isarray({ x: "" }, "x")));
        it("should return false for `\"foo\"`", () => assert(!util.isarray({ x: "foo" }, "x")));
        it("should return false for `null`", () => assert(!util.isarray({ x: null }, "x")));
        it("should return false for `{}`", () => assert(!util.isarray({ x: {} }, "x")));
        it("should return false for `{foo:\"bar\"}`", () => assert(!util.isarray({ x: { foo: "bar" } }, "x")));
        it("should return true for `[]`", () => assert(util.isarray({ x: [] }, "x")));
        it("should return true for `[\"bar\"]`", () => assert(util.isarray({ x: ["bar"] }, "x")));
    });
    describe("isobject (key of an object)", () => {
        it("should return false for `true`", () => assert(!util.isobject({ x: true }, "x")));
        it("should return false for `false`", () => assert(!util.isobject({ x: false }, "x")));
        it("should return false for `0`", () => assert(!util.isobject({ x: 0 }, "x")));
        it("should return false for `0.5`", () => assert(!util.isobject({ x: 0.5 }, "x")));
        it("should return false for `-1`", () => assert(!util.isobject({ x: -1 }, "x")));
        it("should return false for `1`", () => assert(!util.isobject({ x: 1 }, "x")));
        it("should return false for `17`", () => assert(!util.isobject({ x: 17 }, "x")));
        it("should return false for `\"\"`", () => assert(!util.isobject({ x: "" }, "x")));
        it("should return false for `\"foo\"`", () => assert(!util.isobject({ x: "foo" }, "x")));
        it("should return false for `null`", () => assert(!util.isobject({ x: null }, "x")));
        it("should return true for `{}`", () => assert(util.isobject({ x: {} }, "x")));
        it("should return true for `{foo:\"bar\"}`", () => assert(util.isobject({ x: { foo: "bar" } }, "x")));
        it("should return false for `[]`", () => assert(!util.isobject({ x: [] }, "x")));
        it("should return false for `[\"bar\"]`", () => assert(!util.isobject({ x: ["bar"] }, "x")));
    });
    describe("isnull (key of an object)", () => {
        it("should return false for `true`", () => assert(!util.isnull({ x: true }, "x")));
        it("should return false for `false`", () => assert(!util.isnull({ x: false }, "x")));
        it("should return false for `0`", () => assert(!util.isnull({ x: 0 }, "x")));
        it("should return false for `0.5`", () => assert(!util.isnull({ x: 0.5 }, "x")));
        it("should return false for `-1`", () => assert(!util.isnull({ x: -1 }, "x")));
        it("should return false for `1`", () => assert(!util.isnull({ x: 1 }, "x")));
        it("should return false for `17`", () => assert(!util.isnull({ x: 17 }, "x")));
        it("should return false for `\"\"`", () => assert(!util.isnull({ x: "" }, "x")));
        it("should return false for `\"foo\"`", () => assert(!util.isnull({ x: "foo" }, "x")));
        it("should return true for `null`", () => assert(util.isnull({ x: null }, "x")));
        it("should return false for `{}`", () => assert(!util.isnull({ x: {} }, "x")));
        it("should return false for `{foo:\"bar\"}`", () => assert(!util.isnull({ x: { foo: "bar" } }, "x")));
        it("should return false for `[]`", () => assert(!util.isnull({ x: [] }, "x")));
        it("should return false for `[\"bar\"]`", () => assert(!util.isnull({ x: ["bar"] }, "x")));
    });
});
