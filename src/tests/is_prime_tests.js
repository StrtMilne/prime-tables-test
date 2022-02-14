const assert = require("assert");
const isPrime = require("../models/is_prime");


describe("Prime finder function", () => {

    it("Should return false if number is smaller than 2", () => {
        const actual = isPrime(1)
        assert.strictEqual(actual, false);
    });

    it("Should return false if number is 0", () => {
        const actual = isPrime(0)
        assert.strictEqual(actual, false);
    });

    it("Should return false if number is negative", () => {
        const actual = isPrime(-23)
        assert.strictEqual(actual, false);
    });

    it("Should return true if prime", () => {
        const actual = isPrime(2)
        assert.strictEqual(actual, true);
    });

    it("Should return true if 61", () => {
        const actual = isPrime(61)
        assert.strictEqual(actual, true);
    });

    it("Should return true if 97", () => {
        const actual = isPrime(97)
        assert.strictEqual(actual, true);
    });

    it("Should return true if 1181", () => {
        const actual = isPrime(1181)
        assert.strictEqual(actual, true);
    });

    it("Should return false if not prime", () => {
        const actual = isPrime(4)
        assert.strictEqual(actual, false);
    });

    it("Should return false for 68", () => {
        const actual = isPrime(68)
        assert.strictEqual(actual, false);
    });

    it("Should return false for 135", () => {
        const actual = isPrime(135)
        assert.strictEqual(actual, false);
    });

    it("Should return false for 1200", () => {
        const actual = isPrime(1200)
        assert.strictEqual(actual, false);
    });
});