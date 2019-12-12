const companies = [
	{name: "Company One", category: "Finance", start: 1981, end: 2003},
	{name: "Company Two", category: "Retail", start: 1992, end: 2008},
	{name: "Company Four", category: "Auto", start: 1999, end: 2007},
	{name: "Company Five", category: "Retail", start: 1989, end: 2010},
	{name: "Company Six", category: "Technology", start: 2009, end: 2014},
	{name: "Company Seven", category: "Finance", start: 1987, end: 2010},
	{name: "Company Eight", category: "Auto", start: 1986, end: 1996},
	{name: "Company Nine", category: "Technology", start: 2011, end: 2016},
	{name: "Company Ten", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//forEach ============================
	// ==========================
		// for (let i = 0; i < companies.length; i++) {
		// 	console.log(companies[i]);
		// }

	// ==========================
		// // companies.forEach(function(company, index, companies) {});
		// companies.forEach(function(company) {
		// 	console.log(company.name);
		// });




// filter =======================
	// ==========================
		// let canDrink = [];
		// for (let i = 0; i < ages.length; i++) {
		// 	if (ages[i] >= 21) {
		// 		canDrink.push(ages[i]);
		// 	}
		// }

	// ==========================
		// const canDrink = ages.filter(function(age) {
		// 	if (age >= 21) {
		// 		return true;
		// 	}
		// });

	// ==========================
		// const canDrink = ages.filter(age => age >= 21);

	// ==========================
		// const daw = companies.filter(function(company) {
		// 	if (company.start >= 1999) {
		// 		return true;
		// 	}
		// });	

	// ========================== 
		// const retailCompanies = companies.filter(function(company) {
		// 	if (company.category === 'Retail') {
		// 		return true;
		// 	}
		// });

	// ==========================	
		// const retailCompanies = companies.filter(company => company.category === 'Retail');

	// ========================== get 80s companies
		// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

	// ========================== get companies that lasted 10 years or more
		// const lastedTenYears = companies.filter(company => (company.end - company.start > 10));

	// console.log(lastedTenYears);





// map ===============================
	// ========================== Create array of comapny names
		// const companyNames = companies.map(function(company) {
		// 	return company.name;
		// });

	// ========================== 
		// const testMap = companies.map(function(company) {
		// 	return `${company.name} [${company.start} - ${company.end}]`;
		// });

	// ========================== shorthand / arrow function
		// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

	// ========================== 
		// const ageMap = ages
		// 	.map(age => Math.sqrt(age))
		// 	.map(age => age * 2);


	// console.log(ageMap);






// sort =============================
	// ========================== sort ompanies by start year
		// const sortedCompanies = companies.sort(function(c1, c2) {
		// 	if (c1.start > c2.start) {
		// 		return 1;
		// 	} else {
		// 		return -1;
		// 	}
		// });

	// ========================== shorthand / arrow function
		// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

	// ========================== sort ages with problem
		// const sortAges = ages.sort();

	// ========================== fixed sort problem
		// const sortAges = ages.sort((a, b) => a - b);

	// console.log(sortAges);






// reduce =============================
	// ========================== 
		// let ageSum = 0;
		// for(let i = 0; i < ages.length; i++) {
		// 	ageSum += ages[i];
		// }

	// ========================== 
		// const ageSum = ages.reduce(function(total, age) {
		// 	return total + age;
		// }, 0);

	// ========================== arrow function
		// const ageSum = ages.reduce((total, age) => total + age, 0);	

	// ========================== Get total years for all companies
		// const totalYears = companies.reduce(function(total, company) {
		// 	return total + (company.end - company.start);
		// }, 0);	

	// ========================== short hand
		// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);	

	// console.log(totalYears);	




// Combine methods ============================
	const combined = ages
		.map(age => age * 2)
		.filter(age => age >= 40)
		.sort((a, b) => a - b)
		.reduce((a, b) => a + b, 0);


	console.log(combined);	