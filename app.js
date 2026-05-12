// Задание 1: Конвертация Цельсия в Фаренгейт
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Задание 2: Проверка на простое число
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Задание 3: Удвоение каждого числа в массиве
function doubleArray(arr) {
    return arr.map(num => num * 2);
}

// Задание 4: Подсчет вхождений значения
function countOccurrences(arr, value) {
    return arr.reduce((count, current) => (current === value ? count + 1 : count), 0);
}

// Задание 5: Получение всех ключей объекта
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// Задание 6: Слияние двух объектов
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// --- Примеры для проверки в консоли ---
console.log("Задание 1:", celsiusToFahrenheit(25)); // 77
console.log("Задание 2:", isPrime(7));               // true
console.log("Задание 3:", doubleArray([1, 2, 3]));   // [2, 4, 6]
console.log("Задание 4:", countOccurrences([1, 2, 2, 3], 2)); // 2
console.log("Задание 5:", getObjectKeys({a: 1, b: 2}));      // ['a', 'b']
console.log("Задание 6:", mergeObjects({a: 1}, {b: 2}));      // {a: 1, b: 2}