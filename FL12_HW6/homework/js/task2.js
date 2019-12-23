let a = Number(prompt('Input the first integer number is not equal to 0:'));
while (a < 0 || Number.isInteger(a) === false) {
    a = Number(prompt('Input values should be ONLY numbers'));
}
let b = Number(prompt('Input the second integer number:'));
while (b < 0 || Number.isInteger(b) === false) {
    b = Number(prompt('Input values should be ONLY numbers'));
}
let c = Number(prompt('Input the third integer number:'));
while (c < 0 || Number.isInteger(c) === false) {
    c = Number(prompt('Input values should be ONLY numbers'));
}
if (a === 0) {
    a = Number(prompt('A triangle must have 3 sides with a positive definite length'));
}
if (b === 0) {
    b = Number(prompt('A triangle must have 3 sides with a positive definite length'));
}
if (c === 0) {
    c = Number(prompt('A triangle must have 3 sides with a positive definite length'));
}
if (a + b <= c || b + c <= a || a + c <= b) {
    alert('Triangle doesn’t exist');
} else if (a === b && b === c) {
    alert('Equilateral triangle');
} else if (a === b || a === c || b === c) {
    alert('Isosceles triangle');
} else {
    alert('Scalene triangle');
}
