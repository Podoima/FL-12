function getMin(...numbers) {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

getMin(3, 0, -3); //=> -3
