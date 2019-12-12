(function() {
	//customers
	let customers = [];
	let index = 0;

	//object constructor function

	function Customer(name, img, text) {
		this.name = name;
		this.img = img;
		this.text = text;
	}

	//create customer function
	function createCustomer(name, img, text) {
		//full img
		let fullImg = `img/customer-${img}.jpg`;

		//create a new customer instance
		const customer = new Customer(name, fullImg, text);

		//add to all customers
		customers.push(customer);
	}

	createCustomer('Marlon', 1, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`);
	createCustomer('Nolram', 2, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`);
	createCustomer('Hario', 3, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`);
	createCustomer('Oirah', 4, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`);
	// console.log(customers);

	document.querySelectorAll('.btn').forEach(function (item) {
		item.addEventListener('click', function(event) {
			event.preventDefault();
			//console.log(event.target);

			if(event.target.parentElement.classList.contains('prevBtn')) {
				if(index === 0) {
					index = customers.length;
				}
				index--;
				document.getElementById('customer-img').src = customers[index].img;
				document.getElementById('customer-name').textContent = customers[index].name;
				document.getElementById('customer-text').textContent = customers[index].text;
			}

			if(event.target.parentElement.classList.contains('nextBtn')) {
				if(index === (customers.length - 1)) {
					index = -1;
				}
				index++;
				document.getElementById('customer-img').src = customers[index].img;
				document.getElementById('customer-name').textContent = customers[index].name;
				document.getElementById('customer-text').textContent = customers[index].text;
			}
		})
	}) 

})();