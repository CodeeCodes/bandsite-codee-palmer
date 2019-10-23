const URL =
	"https://project-1-api.herokuapp.com/showdates?api_key=49124594-6b32-4c22-8ce7-d4004cd062f5";

axios.get(URL).then((response) => {
	// console.log(response.data);
	createTableDivs(response.data);
});
let count = 0;
const newShows = document.querySelector(".shows-section");

function createTableDivs(tableDivs) {
	//while count is less than length of comments object length
	while (count < tableDivs.length) {
		let newShowDiv = document.createElement("div");
		newShowDiv.className = "new__show-div";
		let newHeading = document.createElement("h2");
		newHeading.className = "new__show-heading";
		let newShowDate = document.createElement("h4");
		newShowDate.className = "new__show-date";
		let newShowVenue = document.createElement("h5");
		newShowVenue.className = "new__show-Venue";
		let newShowLocation = document.createElement("h5");
		newShowLocation.className = "new__show-location";
		let newShowButton = document.createElement("button");
		newShowButton.innerHTML = "BUY TICKETS";
		newShowButton.className = "new__show-button";

		// creating a for loop to loop through each object and create textNode of values
		//create a avatar
		newShowDiv.appendChild(newHeading);
		//pulling information to make Persons name textnode then appending it to child (h3) of newCommentsDiv
		let heading = document.createTextNode(tableDivs[count].keys);
		newHeading.appendChild(heading);
		newShowDiv.appendChild(newHeading);
		//pulling information to make date textnode then appending it to child of newCommentsDiv
		let date = document.createTextNode(tableDivs[count].date);
		newShowDate.appendChild(date);
		newShowDiv.appendChild(newShowDate);
		//pulling information to make comment textnode then appending it to child <p> of newCommentsDiv
		let venue = document.createTextNode(tableDivs[count].place);
		newShowVenue.appendChild(venue);
		newShowDiv.appendChild(newShowVenue);
		//
		let location = document.createTextNode(tableDivs[count].location);
		newShowLocation.appendChild(location);
		newShowDiv.appendChild(newShowLocation);

		// appending all elements to the empty div tag in html
		newShowDiv.appendChild(newShowButton);
		newShows.appendChild(newShowDiv);
		count++;
	}
}
