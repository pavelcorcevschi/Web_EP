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


// 4
function countOccurrences(arr, val) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrences([1,2,2,3,2], 2));


// 5
function getObjectKeys(obj) {
    let arr = [];

    for (let k in obj) {
        arr.push(k);
    }

    return arr;
}

console.log(getObjectKeys({a:1,b:2}));


// 6
function mergeObjects(a, b) {
    let obj = {};

    for (let k in a) {
        obj[k] = a[k];
    }

    for (let k in b) {
        obj[k] = b[k];
    }

    return obj;
}

console.log(mergeObjects({a:1,b:2},{b:3,c:4}));


// 7
document.getElementById("addButton").onclick = function () {
    let li = document.createElement("li");
    li.innerHTML = "New Item";
    document.getElementById("myList").appendChild(li);
};
