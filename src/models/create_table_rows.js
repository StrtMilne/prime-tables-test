const getPrimes = require("./get_primes");

//Creates array of table rows to be displayed
const createTable = (input) => {

    let numberNeeded = parseInt(input);
    if(numberNeeded < 1){
        return [];
    }
    const numbers = getPrimes(numberNeeded);
    const row1 = [...numbers];
    row1.unshift("primes");
    let result = [row1];
    let tempRow = [1, ...numbers];

    for (let i = 0; i < numberNeeded + 1; i ++) {
        let rowToAdd = tempRow.map(number => number * numbers[i]);
        result.push(rowToAdd);
    }
    return result;
}

module.exports = createTable;