class Employee {
	
	static _EMPLOYEES = [];

	constructor(obj) {
		this.id = obj.id;
		this.firstName = obj.firstName;
		this.lastName = obj.lastName;
		this.birthday = obj.birthday;
		this.salary = obj.salary;
		this.position = obj.position;
		this.department = obj.department;
		this._age = (() => {
			const NOW = new Date();
			const BIRTH_DATE = new Date(this.birthday);
			return NOW.getFullYear() - BIRTH_DATE.getFullYear();
		})();
		this._fullName = (() => `${this.firstName} ${this.lastName}`)();
		Employee._EMPLOYEES.push(this);
	}

	get age() {
		return this._age;
	}
	get fullName() {
		return this._fullName;
	}
	static get EMPLOYEES() {
		return Employee._EMPLOYEES;
	}
	quit() {
		const INDEX = Employee._EMPLOYEES.indexOf(this);
		Employee._EMPLOYEES.splice(INDEX, 1);
	}
	retire() {
		console.log('It was such a pleasure to work with you!');
		this.quit();
	}
	getFired() {
		console.log('Not a big deal!');
		this.quit();
	}
	changeDepartment(newDepartment) {
		this.department = newDepartment;
	}
	changePosition(newPosition) {
		this.position = newPosition;
	}
	changeSalary(newSalary) {
		this.salary = newSalary;
	}
	update(properties) {
		for (let key in properties) {
			if (key in this) {
				this[key] = properties[key];
			}
		}
	}
	getPromoted(benefits) {
		this.update(benefits);
		console.log('Yoohooo!');
	}
	getDemoted(punishment) {
		this.update(punishment);
		console.log('Damn!');
	}
}


class Manager extends Employee {
	constructor(properties) {
		super(properties);
		this.position = 'Manager';
	}
	managedEmployees() {
		const DEPARTMENT_EMPLOYEES = [];
		for (let employee of Employee._EMPLOYEES) {
			if (employee.department === this.department) {
				DEPARTMENT_EMPLOYEES.push(employee);
			}
		}
		return DEPARTMENT_EMPLOYEES;
	}
}

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
	constructor(properties) {
		super(properties);
		this.department = 'HR';
	}
}

class SalesManager extends Manager {
	constructor(properties) {
		super(properties);
		this.department = 'Sales';
	}
}


function ManagerPro(manager) {
	manager.promoteEmployees = function(benefits) {
		const MANAGED_EMPLOYEES = manager.managedEmployees();
		for (let employee of MANAGED_EMPLOYEES) {
			employee.getPromoted(benefits);
		}
	}
}
