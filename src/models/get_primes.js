const isPrime = require("./is_prime");

const getPrimes = (input) => {

    let numberNeeded = parseInt(input);
    console.log("in get primes, number passed is: ", numberNeeded)
    if(numberNeeded < 1) {
        console.log(`Input of ${numberNeeded} is too small`)
        return [];
    }
    let array = [2, 3];
    let counter = 5;
    while (array.length < numberNeeded + 1) {
        if (isPrime(counter)) {
            console.log("is prime so adding: ", counter);
            array.push(counter);
            counter += 2;
        } else {
            console.log("isn't prime so not adding: ", counter);
            counter += 2;
        } 
    }
    console.log("array created: ", array);
    return array;
}

module.exports = getPrimes;