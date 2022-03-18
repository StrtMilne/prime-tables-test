const isPrime = require("./is_prime");

const getPrimes = (input) => {

    let numberNeeded = parseInt(input);
    if(numberNeeded < 1) {
        console.log(`Input of ${numberNeeded} is too small`)
        return [];
    }
    let array = [2];
    let counter = 3;
    while (array.length < numberNeeded) {
        if (isPrime(counter)) {
            array.push(counter);
            counter += 2;
        } else {
            counter += 2;
        } 
    }
    return array;
}

module.exports = getPrimes;