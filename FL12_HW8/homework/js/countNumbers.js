function countNumbers(str) {
    let countedNumbers = {};
    let numbers = '';
    let one = 1;
    for (let symbol of str) {
        if (Number.isInteger(Number(symbol)) === true) {
            numbers += symbol;
            }
    }
    for (let number of numbers) {
        if (number in countedNumbers) {
            countedNumbers[number]++;
        } else {
            countedNumbers[number] = one;
        }
    }
    return countedNumbers;
}

countNumbers('jdjjka000466588kkkfs662555');
// => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
