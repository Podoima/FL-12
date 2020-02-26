// Task 1

function maxElement(array) {
	return Math.max(...array);
}

const ARRAY_ONE = [9, 22, 87, 0, 23, 77, 98347, 765, 1579, 98];
console.log(maxElement(ARRAY_ONE)); // 98347


// Task 2

function copyArray(array) {
	const NEW_ARRAY = [...array];
	return NEW_ARRAY;
}

const ARRAY_TWO = [1, 2, 3];
const ARRAY_THREE = copyArray(ARRAY_TWO);
console.log(ARRAY_TWO, ARRAY_THREE); // [1, 2, 3] [1, 2, 3]
console.log(ARRAY_TWO === ARRAY_THREE); // false


// Task 3

function addUniqueId(object) {
	let newObject = Object.assign({}, object);
	newObject.id = Symbol('1');
	return newObject;
}

const OBJ = {name: 123};
console.log(addUniqueId(OBJ)); // {name: 123, Symbol(id): 1}
console.log(OBJ); // {name: 123}


// Task 4

function regroupObject(object) {
	let {name, details} = object;
	let {id, age, university} = details;
	let newObj = {university, user: {name, age, id}};
	return newObj;
}

const OLD_OBJECT = {name: 'John', details: {id: 1, age: 25, university: 'UNI'}};
console.log(regroupObject(OLD_OBJECT)); // {university: "UNI", user: {age: 25, id: 1, name: "John"}}


// Task 5

function findUniqueElements(array) {
	return [...new Set(array)];
}

const ARRAY_FOUR = [1, 1, 1, 3, 3, 7, 7, 7, 2, 2, 0, 24, 9, 9, 1, 1];
console.log(findUniqueElements(ARRAY_FOUR)); // [1, 3, 7, 2, 0, 24, 9]


// Task 6

function hideNumber(string) {
	return(string.slice(-4).padStart(string.length, '*'));
}

const NUMBER = '0123456789';
console.log(hideNumber(NUMBER)); // ******6789


// Task 7

function add(a, b) {
	if (a === undefined || b === undefined) {
		throw new Error('Missing property');
	} else {
		return a + b;
	}
}

console.log(add(1, 2)); // 3
console.log(add(1)); // Uncaught Error: Missing property at add ...


// Task 8

function getNames(url) {
	return fetch(url)
		.then(request => request.text())
		.then(text => JSON.parse(text))
		.then(data => {
			let list = data.map(item => item.name).sort();
			console.log(list);
		})
		.catch(error => console.log(`ERROR: ${error.stack}`));
}
getNames('https://api.github.com/users/podoima/repos'); // ["FL-12", "Test"]


// Task 9

async function getNameAsync(url) {
	try {
		const request = await fetch(url);
		const text = await request.text();
		const data = JSON.parse(text);
		let list = data.map(item => item.name).sort();
		console.log(list);
	}
	catch (error) {
		console.log(`ERROR: ${error.stack}`);
	}
}
getNameAsync('https://api.github.com/users/podoima/repos'); // ["FL-12", "Test"]
