const isPrime = (numberToCheck) => {
    for (let i = 2; i < numberToCheck; i++) {
        if (numberToCheck % i === 0){
            return false;
        }
    }
    return true;
};

module.exports = isPrime;