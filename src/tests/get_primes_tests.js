const assert = require("assert");
const getPrimes = require("../models/get_primes");

describe("Prime array function", () => {
    it("Should output an array of length 1 when 1 inputted", () => {
        const actual = getPrimes(1).length;
        assert.strictEqual(actual, 1);
    });

    it("Should return array of [2, 3] when 3 inputted", () => {
        const actual = getPrimes(2);
        assert.deepStrictEqual(actual, [2, 3]);
    })

    it("Should return an array of [2, 3, 5, 7, 11] when 5 inputted", () => {
        const actual = getPrimes(5);
        assert.deepStrictEqual(actual, [2, 3, 5, 7, 11]);
    })

    it("Should return empty array when number entered is 0", () => {
        const actual = getPrimes(0);
        assert.deepStrictEqual(actual, []);
    })

    it("Should return empty array when number entered is negative", () => {
        const actual = getPrimes(-10);
        assert.deepStrictEqual(actual, []);
    })
});
