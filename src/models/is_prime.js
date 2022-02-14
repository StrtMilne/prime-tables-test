const isPrime = (numberToCheck) => {
    if(numberToCheck < 2){
        return false;
    }

    // Check that all numbers up to floored square root of given number don't divide into the number
    // Starts at 5 as getPrimes function will never need to check before that number 
    
    for (let i = 5; i <= Math.floor(Math.sqrt(numberToCheck)); i++) {
        if (numberToCheck % i === 0){
            
            return false;
        }
    }
    return true;
};

module.exports = isPrime;