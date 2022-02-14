const assert = require('assert');
const isPrime = require('../models/is_prime')


describe("Prime finder function", () => {
    it("Should return true if prime", () => {
        const actual = isPrime(2)
        assert.strictEqual(actual, true);
    });

    it("Should return false if not prime", () => {
        const actual = isPrime(4)
        assert.strictEqual(actual, false);
    });
});