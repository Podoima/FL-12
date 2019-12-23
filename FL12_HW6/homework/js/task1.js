let a = Number(prompt('Input the first integer number is not equal to 0:'));
while (a === 0 || Number.isInteger(a) === false) {
    a = Number(prompt('Invalid input data'));
}
let b = Number(prompt('Input the second integer number:'));
while (b === 0 || Number.isInteger(b) === false) {
    b = Number(prompt('Invalid input data'));
}
let c = Number(prompt('Input the third integer number:'));
while (c === 0 || Number.isInteger(c) === false) {
    c = Number(prompt('Invalid input data'));
}
const d = b * b - 4 * a * c;
if (d > 0) {
    alert(`x1 = ${Math.round((-b + Math.sqrt(d)) / (2 * a))} and x2 = ${Math.round((-b - Math.sqrt(d)) / (2 * a))}`);
} else if (d === 0) {
    alert(`x1 = ${Math.round(-b / (2 * a))}`);
} else {
    alert('no solution');
}
