const isPrime = require('./is_prime');

const getPrimes = (numberNeeded) => {
    let array = [2];
    let counter = 3;
    while (array.length < numberNeeded + 1) {
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