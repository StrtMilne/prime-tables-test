const assert = require('assert');
const createTable = require('../models/create_table_rows')


describe("Matrix of primes table function", () => {
    it("Should return empty array if number too small", () => {
        const actual = createTable(0)
        assert.deepStrictEqual(actual, []);
    });

    it("Should return an  array of length two greater than input", () => {
        const actual1 = createTable(1).length;
        const desired1 = 3;
        const actual2 = createTable(5).length;
        const desired2 = 7;
        const actual3 = createTable(10).length;
        const desired3 = 12;
        const actual4 = createTable(33).length;
        const desired4 = 35;

        assert.deepStrictEqual(actual1, desired1);
        assert.deepStrictEqual(actual2, desired2);
        assert.deepStrictEqual(actual3, desired3);
        assert.deepStrictEqual(actual4, desired4);
    })

    it("Should return matrix of [['prime', 2, 3],[2, 4, 6], [3, 6, 9]] if 1 inputted", () => {
        const actual = createTable(1);
        const desired = [['primes', 2, 3],[2, 4, 6], [3, 6, 9]];
        assert.deepStrictEqual(actual, desired);
    })

    it("Should return matrix of [['prime', 2, 3, 5], [2, 4, 6, 10], [3, 6, 9, 15], [5, 10, 15, 25]] if 2 inputted", () => {
        const actual = createTable(2);
        const desired = [['primes', 2, 3, 5],[2, 4, 6, 10], [3, 6, 9, 15], [5, 10, 15, 25]];
        assert.deepStrictEqual(actual, desired);
    })
});