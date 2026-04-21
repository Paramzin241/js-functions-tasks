// BEGIN
const checkPrime = (num) => {
    if (num <= 1) {
        console.log('no');
        return;
    }
    
    let isPrime = true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

export default checkPrime;
// END