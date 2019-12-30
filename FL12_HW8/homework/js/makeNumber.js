function makeNumber(str) {
    let numbers = '';
    for (let symbol of str) {
        if (Number.isInteger(Number(symbol)) === true) {
            numbers += symbol;
            }
    }
    return numbers;
}

makeNumber('erer384jjjfd123'); //=>384123
