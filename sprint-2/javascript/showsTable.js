const shows = [
	{
		date: "Mon Dec 17 2018",
		venue: "Ronald Lane",
		location: "San Francisco, CA"
	},
	{
		date: "Tue Jul 18 2019",
		venue: "Pier 3 East",
		location: "San Francisco, CA"
	},
	{
		date: "Fri Jul 22 2019",
		venue: "View Lounge",
		location: "San Francisco, CA"
	},
	{
		date: "Sat Aug 12 2019",
		venue: "Hyatt Agency",
		location: "San Francisco, CA"
	},

	{
		date: "Fri Sep 05 2019",
		venue: "Moscow Center",
		location: "San Francisco, CA"
	},
	{
		date: "Wed Aug 11 2019",
		venue: "Pres Club",
		location: "San Francisco, CA"
	}
];

function createTable(table, shows) {
	for (const show of shows) {
		// for...of only works on arrays
		for (key in show) {
			let row = table.insertRow();
			//create row
			createTableHead(showKeys, row);
			//call heading function
			let cell = row.insertCell();
			let text = document.createTextNode(show[key]);
			cell.appendChild(text);
			if (key === "date") {
				let dateClass = document.querySelectorAll("td");
				// console.log(dateClass);
				for (i = 0; i < dateClass.length; i++) {
					if (i % 4 === 0) {
						dateClass[i].classList.add("bolded-date");
					}
				}
			}
			if (key === "date") {
				let dateClassTwo = document.querySelectorAll("td");
				// console.log(dateClass);
				for (i = 0; i < dateClassTwo.length; i++) {
					if (i % 4 === 3) {
						dateClassTwo[i].classList.add("underline-button");
					}
				}
			}

			//creating a button after each iteration
			if (key === "location") {
				let row = table.insertRow();
				let btnCell = row.insertCell();
				let btn = document.createElement("button");
				btn.innerHTML = "CLICK ME";
				btnCell.appendChild(btn);
			}
			count++;
		}
	}
}
function createTableHead(shows, row) {
	let variable = count % 3;
	// let tHead = table.createTHead();
	// let row = tHead.insertRow();
	let th = document.createElement("th");
	let text = document.createTextNode(shows[variable]);
	th.appendChild(text);
	row.appendChild(th);
}

const table = document.querySelector("table");
const showKeys = Object.keys(shows[0]);
let count = 3;
// function invocation
createTable(table, shows); // actually pass the students array

// function createTableTablet(table, shows) {
// 	for (const show of shows) {
// 		for (key in shows) {
// 			let row = table.insertRow();
// 			let cell = row.insertCell();
// 			let text = document.createTextNode(show[key]);
// 			cell.appendChild(text);
// 			if (key === "date") {
// 				let dateClass = document.querySelectorAll("td");
// 				console.log(dateClass);
// 				for (i = 0; i < dateClass.length; i++) {
// 					if (i % 4 === 0) {
// 						dateClass[i].classList.add("bolded-date");
// 					}
// 				}
// 			}

// 			//creating a button after each iteration
// 			if (key === "location") {
// 				let row = table.insertRow();
// 				let btnCell = row.insertCell();
// 				let btn = document.createElement("button");
// 				btn.innerHTML = "CLICK ME";
// 				btnCell.appendChild(btn);
// 			}
// 			count++;
// 		}
// 	}
// }
// function createTableHeadTablet(shows, row) {
// 	let tHead = table.createTHead();
// 	let row = tHead.insertRow();
// 	let th = document.createElement("th");
// 	let text = document.createTextNode(shows[variable]);
// 	th.appendChild(text);
// 	row.appendChild(th);
// }
// createTableTablet(table, shows);
// createTableHeadTablet(table, showKeys);
