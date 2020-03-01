let url = 'https://jsonplaceholder.typicode.com';


function showSpinner() {
	const spinner = document.getElementById('spinner');
	spinner.style.display = 'flex';
}

function hideSpinner() {
	const spinner = document.getElementById('spinner');
	spinner.style.display = 'none';
}

function getData(url) {
	showSpinner();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	let data;
	xhr.onload = function() {
  		data = xhr.response;
	}
	xhr.send(null);
	return JSON.parse(data);
}


function showData(array) {
	const rootNode = document.getElementById('root');
	const h2 = 'h2';
	const ul = 'ul';
	const li = 'li';
	const span = 'span';
	const input = 'input';
	const button = 'button';
	
	for (let user of array) {
		
		const wrapper = document.createElement(ul);
		wrapper.className = 'wrapper';
		wrapper.id = user.id;
		rootNode.appendChild(wrapper);
		
		const header = document.createElement(h2);
		header.innerHTML = user.name;
		header.className = 'name';
		wrapper.appendChild(header);
		
		(function showInfo(obj, parentNode) {
			
			for (let key in obj) {
				if (key !== 'id') {
					if (typeof obj[key] === 'object') {
						
						const groupHeader = document.createElement(ul);
						wrapper.appendChild(groupHeader);
						
						const propertyName = document.createElement(span);
						propertyName.innerHTML = `${key}`;
						groupHeader.appendChild(propertyName);
						showInfo(obj[key], groupHeader);
					} else {
						
						const propertyKey = document.createElement(li);
						parentNode.appendChild(propertyKey);
						
						const propertyName = document.createElement(span);
						propertyName.innerHTML = `${key}`;
						propertyKey.appendChild(propertyName);
					
						const propertyValue = document.createElement(input);
						propertyValue.setAttribute('value', `${obj[key]}`)
						propertyKey.appendChild(propertyValue);
					}
				}
				
			}
		})(user, wrapper);
		
		const saveChangesBtn = document.createElement(button);
		saveChangesBtn.innerHTML = 'Save changes';
		saveChangesBtn.className = 'save_changes_btn';
		saveChangesBtn.addEventListener('click', () => { 
			const id = (event.target).parentElement.id;
			saveUserChanges(+id);
		});
		wrapper.appendChild(saveChangesBtn);
		
		const deleteUserBtn = document.createElement(button);
		deleteUserBtn.innerHTML = 'Delete user';
		saveChangesBtn.className = 'delete_user_btn';
		deleteUserBtn.addEventListener('click', () => { 
			const id = (event.target).parentElement.id;
			deleteUser(+id);
		});
		wrapper.appendChild(deleteUserBtn);
	}
	hideSpinner();
}


function makeObject(parentObject, nodesList) {
	for (let node of nodesList) {
		if (node.localName === 'li') {
			parentObject[node.firstChild.innerText] = node.lastChild.value;
		} 
		if (node.localName === 'ul') {
			let newObj = {};
			let nodes = node.childNodes;
			for (let child of nodes) {
				if (child.localName === 'li') {
					newObj[child.firstChild.innerText] = child.lastChild.value;
				}
			}
			parentObject[node.firstChild.innerText] = newObj;
		}
	}
}

function sendData(obj) {
	let data = JSON.stringify(obj);
	fetch(`${url}/users/${obj.id}`, {method: 'PUT'});
}

function updatePage() {
	const rootNode = document.getElementById('root');
	while (rootNode.firstChild) {
  		rootNode.removeChild(rootNode.firstChild);
	}
	let data = getData(`${url}/users`);
	showData(data);
}

function saveUserChanges(id) {
	showSpinner();
	let user = {};
	user.id = id;
	const button = document.getElementById(`${id}`);
	const nodes = button.parentElement.childNodes;

	makeObject(user, nodes);
	sendData(user);
	updatePage();
	hideSpinner();
}

function deleteUser(id) {
	showSpinner();
	fetch(`${url}/users/${id}`, {method: 'DELETE'});
	hideSpinner();
}

let data = getData(`${url}/users`);
showData(data);
