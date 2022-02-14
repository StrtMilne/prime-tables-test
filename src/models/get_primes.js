const isPrime = require('./is_prime');

const getPrimes = (numberNeeded) => {
    if(numberNeeded < 1) {
        console.log(`Input of ${numberNeeded} is too small`)
        return [];
    }
    let array = [2, 3];
    let counter = 5;
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