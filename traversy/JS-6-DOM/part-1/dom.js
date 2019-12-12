// EXAMINE THE DOCUMENT OBJECT ======================
	// ===================================
		// console.dir(document);
	// ===================================
		// console.log(document.domain);
	// ===================================
		// console.log(document.url);
	// ===================================
		// console.log(document.title);
	// ===================================
		// document.title = 123;
	// ===================================
		// console.log(document.doctype);
	// ===================================
		// console.log(document.head);
	// ===================================
		// console.log(document.body);
	// ===================================
		// console.log(document.all);
	// ===================================
		// console.log(document.all[10]);
	// ===================================
		// console.log(document.forms[0]);	
	// ===================================
		// console.log(document.links);	
	// ===================================
		// console.log(document.images);			





// GETELEMENTBYID ==================
	// // console.log(document.getElementById('header-title'));
	// var headerTitle = document.getElementById('header-title');
	// var header = document.getElementById('main-header');
	// console.log(headerTitle);
	// headerTitle.textContent = 'Hello';
	// headerTitle.innerText = 'Goodbye';
	// console.log(headerTitle.innerText);
	// headerTitle.innerHTML = '<h3>Hello</h3>';
	// header.style.borderBottom = 'solid 3px #000';



// GETELEMENTSBYCLASSNAME ======================
	// var items = document.getElementsByClassName('list-group-item');
	// console.log(items);
	// console.log(items[1]);
	// items[1].textContent = 'Hello 2';
	// items[1].style.fontWeight = 'bold';
	// items[1].style.backgroundColor = 'yellow';

	// for (var i = items.length - 1; i >= 0; i--) {
	// 			items[i].style.backgroundColor = '#f4f4f4';
	// 		}		




// GETELEMENTSBYTAGNAME ========================	
	// var li = document.getElementsByTagName('li');
	// console.log(li);
	// console.log(li[1]);
	// li[1].textContent = 'Hello 2';
	// li[1].style.fontWeight = 'bold';
	// li[1].style.backgroundColor = 'yellow';

	// for (var i = li.length - 1; i >= 0; i--) {
	// 			li[i].style.backgroundColor = '#f4f4f4';
	// 		}		




// RAVERSING THE DOM =====================
	// var itemList = document.querySelector('#items');
	// parentNode ===========
		// console.log(itemList.parentNode);
		// itemList.parentNode.style.backgroundColor = '#f4f4f4';
		// console.log(itemList.parentNode.parentNode);

	// parentElement ===========
		// console.log(itemList.parentElement);
		// itemList.parentElement.style.backgroundColor = '#f4f4f4';
		// console.log(itemList.parentElement.parentElement);	

	// childNodes =====================
		// console.log(itemList.childNodes); //includes line breaks and white space and not good

	// children =====================	
		// console.log(itemList.children);
		// console.log(itemList.children[1]);


	// firstChild =======================	
		// console.log(itemList.firstChild); //includes line breaks and white space and not good


	// firstElementChild =====================	
		// console.log(itemList.firstElementChild);
		// itemList.firstElementChild.textContent = 'Hello 1';

	// lastChild =======================	
		// console.log(itemList.lastChild); //includes line breaks and white space and not good


	// lastElementChild =====================	
		// console.log(itemList.lastElementChild);
		// itemList.lastElementChild.textContent = 'Hello 1';


	// nextSibling =======================	
		// console.log(itemList.nextSibling); //includes line breaks and white space and not good


	// nextElementSibling =====================	
		// console.log(itemList.nextElementSibling);


	// previousSibling =======================	
		// console.log(itemList.previousSibling); //includes line breaks and white space and not good


	// previousElementSibling =====================	
		// console.log(itemList.previousElementSibling);



// Create Element ========================
	// // create a div 
	// 	let newDiv = document.createElement('div');

	// // Add class
	// 	newDiv.className = 'hello';

	// // Add id
	// 	newDiv.id = 'hello1';

	// // Add attr
	// 	newDiv.setAttribute('title', 'Hello Div');

	// // create text node 
	// 	let newDivText = document.createTextNode('Hello World');

	// // Add text to div
	// 	newDiv.appendChild(newDivText);

	// let container = document.querySelector('header .container');
	// let h1 = document.querySelector('header h1');
	// newDiv.style.fontSize = '30px';		
	// // console.log(newDiv);		
	// container.insertBefore(newDiv, h1);









// Event Listener ===============================
	// first sample ================
		// var button = document.getElementById('button').addEventListener('click', buttonClick);

		// function buttonClick(e) {
		// 	console.log(e);

		// 	// events ==============
		// 		// console.log(e.target);
		// 		// console.log(e.target.id);
		// 		// console.log(e.target.className);
		// 		// console.log(e.target.classList);
		// 		// let output = document.getElementById('output');
		// 		// output.innerHTML = '<h3>'+e.target.id+'</h3>';

		// 		// console.log(e.type);
		// 		// console.log(e.clientX); // client are for client window
		// 		// console.log(e.clientY);
		// 		// console.log(e.offsetX); // offset are for speifi element
		// 		// console.log(e.offsetY);
		// 		// console.log(e.altKey);
		// 		// console.log(e.ctrlKey);
		// 		// console.log(e.shiftKey);


		// 	// console.log('Button clicked');
		// 	// document.getElementById('header-title').textContent = 'Changed';
		// 	// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
		// }


	// second sample ==============
		// let button = document.getElementById('button');
		// let box = document.getElementById('box');

		// // button.addEventListener('click', runEvent);
		// // button.addEventListener('dblclick', runEvent);
		// // button.addEventListener('mousedown', runEvent);
		// // button.addEventListener('mouseup', runEvent);
		// // ==============
		// // box.addEventListener('mouseenter', runEvent); // trigger only for selected element/parent elemnt
		// // box.addEventListener('mouseover', runEvent); // trigger for any inner elements
		// // ==============
		// // box.addEventListener('mouseleave', runEvent); 
		// // box.addEventListener('mouseout', runEvent);
		// // ==============
		// // box.addEventListener('mousemove', runEvent);

		// // Keydown event ==============
		// let itemInput = document.querySelector('input[type="text"]');
		// let form = document.querySelector('form');
		// let select = document.querySelector('select');;
		// // itemInput.addEventListener('keydown', runEvent);
		// // itemInput.addEventListener('keyup', runEvent);
		// // itemInput.addEventListener('keypress', runEvent);
		// // itemInput.addEventListener('focus', runEvent); // when click
		// // itemInput.addEventListener('blur', runEvent); // when out of cursor
		// // itemInput.addEventListener('cut', runEvent);
		// // itemInput.addEventListener('paste', runEvent);
		// // itemInput.addEventListener('input', runEvent); //anything you do in input field
		// // select.addEventListener('change', runEvent);
		// // select.addEventListener('input', runEvent);
		// form.addEventListener('submit', runEvent);



		// function runEvent(e) {
		// 	e.preventDefault();
		// 	console.log('EVENT TYPE: '+e.type);
		// 	// keydown event =================
		// 		// console.log(e.target.value);
		// 		// document.getElementById('output').innerHTML = '<h3 style="width: 400x;"> ad'+e.target.value+'</h3>';
		// 		// // document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>`;
		// 	// ==============
		// 	// output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
		// 	// ==============
		// 	// document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
		// }	












// Create simple projects =========================
	const form = document.getElementById('addForm');
	const itemList = document.getElementById('items');
	const filter = document.getElementById('filter');

	// Form submit event
		form.addEventListener('submit', addItem);
	// Delete event
		itemList.addEventListener('click', removeItem);	
	// Filter event
		filter.addEventListener('keyup', filterItems);	

	// Addd item
		function addItem(e) {
			e.preventDefault();

			// Get input value 
			let newItem = document.getElementById('item').value;
			// Create new li element
			let li = document.createElement('li');
			// Add class
			li.className = 'list-group-item';
			// Add text node with input value
			li.appendChild(document.createTextNode(newItem));
			// Create del button element
			let deleteBtn = document.createElement('button');
			// Add classes to del button
			deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
			// Append text node
			deleteBtn.appendChild(document.createTextNode('X'));
			// Append button to li
			li.appendChild(deleteBtn);
			// Append li to list
			itemList.appendChild(li);
		}	

	// Remove item
		function removeItem(e) {
			if (e.target.classList.contains('delete')) {
				if (confirm('Are You Sure?')) {
					let li = e.target.parentElement;
					itemList.removeChild(li);
				}
			}
		}

	// Filter items
		function filterItems(e) {
			// convert text to lowercase
			let text = e.target.value.toLowerCase();
			// Get li
			let items = itemList.getElementsByTagName('li');
			// Convert to an array
			Array.from(items).forEach(function(item){
				let itemName = item.firstChild.textContent;
				if (itemName.toLowerCase().indexOf(text) !== -1) {
					item.style.display = 'block';
				} else {
					item.style.display = 'none';
				}
			});
		}	

