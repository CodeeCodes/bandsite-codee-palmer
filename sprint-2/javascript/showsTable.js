var shows = [
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
	{ date: "Wed Aug 11 2019", venue: "Pres Club", location: "San Francisco, CA" }
];
function createTable(table, shows) {
	for (var show of shows) {
		var row = table.insertRow();
		for (key in show) {
			var cell = row.insertCell();
			var text = document.createTextNode(show[key]);
			cell.appendChild(text);
		}
	}
}

function createTableHead(table, shows) {
	var tHead = table.createTHead();
	var row = tHead.insertRow();
	for (var show of shows) {
		var td = document.createElement("td");
		var text = document.createTextNode(show);
		td.appendChild(text);
		row.appendChild(td);
	}
}

var table = document.querySelector("table");
console.log(table);
var showKeys = Object.keys(shows[0]);
// function invocation
createTable(table, shows); // actually pass the students array
// createTableHead(table, showKeys);
