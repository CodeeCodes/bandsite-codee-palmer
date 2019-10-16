const shows = [
	{
		Date: "Mon Dec 17 2018",
		Venue: "Ronald Lane",
		Location: "San Francisco, CA"
	},
	{
		Date: "Tue Jul 18 2019",
		Venue: "Pier 3 East",
		Location: "San Francisco, CA"
	},
	{
		Date: "Fri Jul 22 2019",
		Venue: "View Lounge",
		Location: "San Francisco, CA"
	},
	{
		Date: "Sat Aug 12 2019",
		Venue: "Hyatt Agency",
		Location: "San Francisco, CA"
	},

	{
		Date: "Fri Sep 05 2019",
		Venue: "Moscow Center",
		Location: "San Francisco, CA"
	},
	{
		Date: "Wed Aug 11 2019",
		Venue: "Pres Club",
		Location: "San Francisco, CA"
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
			//creating a button after each iteration
			if (count % 3 === 2) {
				let row = table.insertRow();
				let btnCell = row.insertCell();
				let btn = document.createElement("button");
				btn.innerHTML = "CLICK ME";
				btnCell.appendChild(btn);
			}
			count++; //iterating through heading function
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
