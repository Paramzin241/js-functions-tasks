const smallestDivisorOptimized = (num) => {
    // BEGIN
    if (num === 1) return 1;
    if (num % 2 === 0) return 2;
    
    const iter = (divisor) => {
        if (divisor > Math.sqrt(num)) {
            return num;
        }
        
        if (num % divisor === 0) {
            return divisor;
        }
        
        return iter(divisor + 2); 
    };
    
    return iter(3);
    // END
};

export default smallestDivisorOptimized;