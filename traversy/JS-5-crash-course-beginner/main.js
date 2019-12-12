// let, const ======================

// String, Numbers, Boolean, null, undefined ==============
	// const name = 'John';
	// const age = 30;
	// const raing = 4.5;
	// const isCool = true;
	// const x = null;
	// const y = undefined;
	// let z;
	// console.log(typeof z);

	// Concatenation old way ========================
		// console.log('My name is '+ name +' and I am '+ age);

	
	// Temlate string ES6 =========================
		// console.log(`My name is ${name} and I am ${age}`);


	// String ====================
		// const s = 'Hello World!';
		// const s = 'technology, computers, it, code';

		// console.log(s.length);
		// console.log(s.toUpperCase());
		// console.log(s.toLowerCase());
		// console.log(s.substring(0, 5).toUpperCase());
		// console.log(s.split(''));
		// console.log(s.split(', '));


// Arrays - variables that hold multiple values ===================
	// const numbers = new Array(1, 2, 3, 4, 5);
	// const fruits = ['apples', 'oranges', 'pears'];

	//  fruits[3] = 'grapes';
	//  fruits.push('mangos'); //add into last index of array
	//  fruits.unshift('strawberries'); //add into first index of array
	//  fruits.pop(); //remove last inde of array


	// console.log(fruits);
	// console.log(fruits.indexOf('oranges')); //get the certain index of an array
	// console.log(Array.isArray(fruits)); //check if ther is something in array



// Object ======================
	// const person = {
	// 	firstName: 'John',
	// 	lastName: 'Doe',
	// 	age: 30,
	// 	hobbies: ['music', 'movies', 'sports'],
	// 	address: {
	// 		street: '50 main st',
	// 		city: 'Boston',
	// 		state: 'MA'
	// 	}
	// }
	// person.email = 'john@gmail.com'; //adding properties

	// console.log(person);

	//Destructure ==================
		// const {firstName, lastName, address: {city}} = person;
		// console.log(city);



// Object and Arrays ======================
	// const todos = [
	// 	{
	// 		id: 1,
	// 		text: 'Take out trash',
	// 		isCompleted: true
	// 	},
	// 	{
	// 		id: 2,
	// 		text: 'Meeting with boss',
	// 		isCompleted: true
	// 	},
	// 	{
	// 		id: 3,
	// 		text: 'Dentist appt',
	// 		isCompleted: false
	// 	}
	// ];
	// console.log(todos[1].text);

	// const todoJSON = JSON.stringify(todos);
	// console.log(todoJSON); //convert array data into JSON


	// Looping arrays data ======================
		// using for loop =====================
			// for(let i = 0; i < todos.length; i++ ) {
			// 	console.log(todos[i].text);
			// }

		// using for of =====================
			// for(let todo of todos) {
			// 	console.log(todo.text);
			// 	console.log(todo.text);
			// }

		//High order array method ===============
			// forEach - looping ======================
				// todos.forEach(function(todo) {
				// 	console.log(todo.text);
				// });

			// map - allow us to create array from an array ==============	
				// const todoText = todos.map(function(todo) {
				// 	return todo.text;
				// });
				// console.log(todoText);

			// filter - allow us to create array base on condition ===========
				// const todoCompleted = todos.filter(function(todo) {
				// 	return todo.isCompleted === true;
				// });
				// console.log(todoCompleted);

			//map and filter ==================================
				// const todoCompleted = todos.filter(function(todo) {
				// 	return todo.isCompleted === true;
				// }).map(function(todo) {
				// 	return todo.text;
				// });
				// console.log(todoCompleted);


// For loop =====================
	// for(let i = 0; i < 10; i++) {
	// 	console.log(i);
	// }



// While loop ======================
	// let i = 0;
	// while(i < 10) {
	// 	console.log(`While Loop Number: ${i}`);
	// 	i++;
	// }



// Turnary operator ===================
	// const x = 11;
	// const color = x > 10 ? 'red' : 'blue';
	// console.log(color);



// Switch statement =====================
	// const x = 9;
	// const color = x > 10 ? 'red' : 'blue';
	// switch(color) {
	// 	case 'red':
	// 		console.log('color is red');
	// 		break;
	// 	case 'blue':
	// 		console.log('color is blue');
	// 		break;
	// 	default:
	// 		console.log('color is NOT red or blue');
	// 		break;		
	// }	



//creating function =========================
	// function addNums(num1 = 1, num2 = 1) {
	// 	// console.log(num1 + num2);
	// 	return num1 + num2;
	// }
	// console.log(addNums(2, 8));
	// // addNums(2, 8);



// Arrow function ===========================
	// const addNums = (num1 = 1, num2 = 1) => {
	// 	// console.log(num1 + num2);
	// 	return num1 + num2;
	// }
	// console.log(addNums(2, 8));
	// // addNums(2, 8);


	// option 2 ==============================
		// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
		// console.log(addNums(2, 8));



// Contructor function =================================
	// function Person(firstName, lastName, dob) {
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// 	this.dob = new Date(dob);
	// 	// this.getBirthYear = function() {
	// 	// 	return this.dob.getFullYear();
	// 	// }
	// 	// this.getFullName = function() {
	// 	// 	return `${this.firstName} ${this.lastName}`;
	// 	// }
	// }
	// Person.prototype.getBirthYear = function() {
	// 	return this.dob.getFullYear();
	// }
	// Person.prototype.getFullName = function() {
	// 	return `${this.firstName} ${this.lastName}`;
	// }

	// // Instantiate
	// 	const person1 = new Person('John', 'Doe', '4-3-1980');
	// 	const person2 = new Person('Mary', 'Smith', '3-6-1970');
	// 	// console.log(person2.dob.getFullYear());
	// 	console.log(person1.getBirthYear());
	// 	console.log(person1.getFullName());



// Class ES6 pretier way for constructor function ==========================================
	// class Person {
	// 	constructor(firstName, lastName, dob) {
	// 		this.firstName = firstName;
	// 		this.lastName = lastName;
	// 		this.dob = new Date(dob);
	// 	}
	// 	getBirthYear() {
	// 		return this.dob.getFullYear();
	// 	}
	// 	getFullName() {
	// 		return `${this.firstName} ${this.lastName}`;
	// 	}
	// }

	// // Instantiate
	// 	const person1 = new Person('John', 'Doe', '4-3-1980');
	// 	const person2 = new Person('Mary', 'Smith', '3-6-1970');
	// 	// console.log(person2.dob.getFullYear());
	// 	// console.log(person1.getBirthYear());
	// 	console.log(person1.getFullName());
	// 	console.log(person1);




//Single element selector =============================
	// console.log(document.getElementById('my-form')); //old
	// console.log(document.querySelector('h1')); //new



// Multiple element selector ==============================
	// console.log(document.querySelectorAll('.item')); //new
	// console.log(document.getElementsByClassName('item')); //old
	// console.log(document.getElementsByTagName('li')); //old

	// Looping ========================
		// const items = document.querySelectorAll('.item');
		// items.forEach((item) => console.log(item));



// Manipulating nodes ===============================
	// const ul = document.querySelector('.items');

	// // ul.remove();
	// ul.lastElementChild.remove();
	// ul.firstElementChild.textContent = 'Hello';
	// ul.children[1].innerText = 'Brad';
	// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

	// const btn = document.querySelector('.btn');
	// btn.style.background = 'red';




// Event listener ===========================
	// const btn = document.querySelector('.btn');

	// // =============================
	// // btn.addEventListener('click', (e) => {
	// // =============================
	// // btn.addEventListener('mouseover', (e) => {
	// // =============================
	// btn.addEventListener('mouseout', (e) => {
	// 	e.preventDefault();
	// 	// =============================
	// 		// console.log(e.target.className);
	// 	// =============================
	// 		// console.log(e.target.id);
	// 	// =============================
	// 		// document.querySelector('#my-form').style.background = '#ccc';
	// 	// =============================
	// 		// document.querySelector('body').classList.add('bg-dark');
	// 	// =============================
	// 		// document.querySelector('body').classList.remove('bg-dark');
	// 	// =============================
	// 		document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
	// });






// Sample project for form =========================================
	const myForm = document.querySelector('#my-form');
	const nameInput = document.querySelector('#name');
	const emailInput = document.querySelector('#email');
	const msg = document.querySelector('.msg');
	const userList = document.querySelector('#users');

	myForm.addEventListener('submit', onSubmit);

	function onSubmit(e) {
		e.preventDefault();

		if (nameInput.value === '' || emailInput.value === '') {
			msg.classList.add('error');
			msg.innerHTML = 'Please enter all fields';

			setTimeout(() => msg.remove(), 3000);
		} else {

			const li = document.createElement('li');
			li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

			userList.appendChild(li);

			// clear fields 
				nameInput.value = '';
				emailInput.value = '';
			// console.log('success');
		}
	}