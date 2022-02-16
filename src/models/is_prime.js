const isPrime = (numberToCheck) => {
    if(numberToCheck < 2){
        return false;
    }

    // Check that all numbers up to floored square root of given number don't divide into the number
    
    for (let i = 2; i <= Math.floor(Math.sqrt(numberToCheck)); i++) {
        if (numberToCheck % i === 0){
            
            return false;
        }
    }
    return true;
};

module.exports = isPrime;