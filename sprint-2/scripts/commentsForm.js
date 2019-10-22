// let commentsObj = [
// 	{
// 		avatar: "",
// 		name: "Micheal Lyons",
// 		comment:
// 			"They blew the roof off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed",
// 		date: "12/18/2018"
// 	},
// 	{
// 		avatar: "",
// 		name: "Gary Wong",
// 		comment:
// 			"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I could ride like him one day so I can really enjoy myself",
// 		date: "12/12/2018"
// 	},
// 	{
// 		avatar: "",
// 		name: "Theodore Duncan",
// 		comment:
// 			"How can someone be soo good!!! You can tell he lives for this and loves to do it everyday. Every time I see him I get instantly happy! He's definitely my favorite ever",
// 		date: "11/15/2018"
// 	}
// ];

//Api's

//Axios

axios
	.get(
		"https://project-1-api.herokuapp.com/comments?api_key=49124594-6b32-4c22-8ce7-d4004cd062f5"
	)
	.then((response) => {
		createObject(response.data);
		console.log(response.data);
	});

//code to get comments to go into the div created in HTML------------------------

// collecting the comments section from the document
const comments = document.getElementById("comments__section");
//getting the empty comments
const newComments = document.getElementById("comments");
//count for createObject function
let count = 0;

function createObject(commentsObj) {
	//while count is less than length of comments object length
	while (count < commentsObj.length) {
		let newCommentsAvatar = document.createElement("img");
		newCommentsAvatar.src = "sprint-2/assets/Images/avatar.jpg";
		newCommentsAvatar.className = "new-comments-avatar";
		let newCommentsDiv = document.createElement("div");
		newCommentsDiv.className = "new-comments-div";
		let originalHeading = document.createElement("h3");
		originalHeading.className = "new-comments-name";
		let originalParagraph = document.createElement("p");
		originalParagraph.className = "new-comments-paragraph";
		let originalDate = document.createElement("div");
		originalDate.className = "new-comments-date";

		// creating a for loop to loop through each object and create textNode of values
		//create a avatar
		newCommentsDiv.appendChild(newCommentsAvatar);
		//pulling information to make Persons name textnode then appending it to child (h3) of newCommentsDiv
		let text = document.createTextNode(commentsObj[count].name);
		originalHeading.appendChild(text);
		newCommentsDiv.appendChild(originalHeading);
		//pulling information to make date textnode then appending it to child of newCommentsDiv
		let date = document.createTextNode(commentsObj[count].timestamp);
		console.log(date);
		originalDate.appendChild(date);
		newCommentsDiv.appendChild(originalDate);
		//pulling information to make comment textnode then appending it to child <p> of newCommentsDiv
		let textOne = document.createTextNode(commentsObj[count].comment);
		originalParagraph.appendChild(textOne);
		newCommentsDiv.appendChild(originalParagraph);
		// appending all elements to the empty div tag in html
		newComments.appendChild(newCommentsDiv);
		count++;
	}
}

//---------------------------------------------------------------------------------------

comments.addEventListener("submit", (event) => {
	// callback function so it can do the function once submit is submitted
	//prevent default behaviour of the form element (page refresh)
	event.preventDefault();

	//pulling information from event <form>  and assigning them to variables
	let name = event.target.name.value;
	let comment = event.target.comment.value;
	let today = new Date();
	let date =
		today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

	//pulling info from form
	function addCommentToArray(name, comment) {
		let x = new Object();
		x.name = name;
		x.comment = comment;
		x.date = date;
		commentsObj.push(x);
		console.log(commentsObj);
	}

	addCommentToArray(name, comment); //adding what was inputted into text boxes in form
	createObject();
	comments.reset();
});
