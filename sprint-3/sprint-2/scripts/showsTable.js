// const shows = [
// 	{
// 		date: "Mon Dec 17 2018",
// 		venue: "Ronald Lane",
// 		location: "San Francisco, CA"
// 	},
// 	{
// 		date: "Tue Jul 18 2019",
// 		venue: "Pier 3 East",
// 		location: "San Francisco, CA"
// 	},
// 	{
// 		date: "Fri Jul 22 2019",
// 		venue: "View Lounge",
// 		location: "San Francisco, CA"
// 	},
// 	{
// 		date: "Sat Aug 12 2019",
// 		venue: "Hyatt Agency",
// 		location: "San Francisco, CA"
// 	},

// 	{
// 		date: "Fri Sep 05 2019",
// 		venue: "Moscow Center",
// 		location: "San Francisco, CA"
// 	},
// 	{
// 		date: "Wed Aug 11 2019",
// 		venue: "Pres Club",
// 		location: "San Francisco, CA"
// 	}
// ];

axios
	.get(
		"https://project-1-api.herokuapp.com/showdates?api_key=49124594-6b32-4c22-8ce7-d4004cd062f5"
	)
	.then((response) => {
		createTable(table, response.data);
	});
console.log(response.data);

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
				for (i = 0; i < dateClass.length; i++) {
					if (i % 4 === 0) {
						dateClass[i].classList.add("bolded-date");
					}
				}
			}

			if (key === "location") {
				let buttonClassThree = document.querySelectorAll("th");
				for (i = 0; i < buttonClassThree.length; i++) {
					buttonClassThree[i].classList.add("table-header");
				}
			}

			//creating a button after each iteration
			if (key === "location") {
				let row = table.insertRow();
				let btnCell = row.insertCell();
				let btn = document.createElement("button");
				btn.innerHTML = "CLICK ME";
				btnCell.appendChild(btn);
				btnCell.className = "underline-button";
			}
			count++;
		}
	}
}
function createTableHead(shows, row) {
	let variable = count % 3;
	let th = document.createElement("th");
	let text = document.createTextNode(shows[variable].toUpperCase());
	th.appendChild(text);
	row.appendChild(th);
}

const table = document.querySelector("table");
const showKeys = Object.keys(shows[0]);
let count = 3;

// function invocation
createTable(table, shows); // actually pass the students array