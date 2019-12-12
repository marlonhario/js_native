//immediate invoked function expression
(function() {

	document.getElementById('message-form').addEventListener('submit', function(e) {
		//prevent default action
		e.preventDefault()

		//getting a vlue
		const message = document.getElementById('message');
		const value = message.value;

		//check for empty value
		if(value === "") {
			const feedback = document.querySelector(".feedback");
			feedback.classList.add("show");
			setTimeout(function(){
				feedback.classList.remove('show');
			}, 2000)
		}

		//change value
		document.querySelector(".message-content").textContent = value;
		message.value = "";
		console.log(value);
	})

})();
