// 1
function celsiusToFahrenheit(c) {
    return c * 9/5 + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));

// 2
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));


// 3
function doubleArray(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * 2);
    }

    return res;
}

console.log(doubleArray([1,2,3]));


