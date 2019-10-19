let commentsObj = [
	{
		name: "Micheal Lyons",
		comment:
			"They blew the roof off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed",
		date: "12/18/2018"
	},
	{
		name: "Gary Wong",
		comment:
			"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I could ride like him one day so I can really enjoy myself",
		date: "12/12/2018"
	},
	{
		name: "Theodore Duncan",
		comment:
			"How can someone be soo good!!! You can tell he lives for this and loves to do it everyday. Every time I see him I get instantly happy! He's definitely my favorite ever",
		date: "11/15/2018"
	}
];

//code to get comments to go into the div created in HTML------------------------

// const commentsOriginal = document.createElement("div");
const comments = document.getElementById("comments__section");
// collecting the comments section from the document
const newComments = document.getElementById("comments");
// the empty div in the HTML
const formValue = comments__section.getElementsByTagName('input["type = text"]')
	.value; //getting the value from the <input> tag with type text
let count = 0;

function createObject() {
	while (count < commentsObj.length) {
		let newCommentsDiv = document.createElement("div");
		let originalHeading = document.createElement("h3");
		let originalParagraph = document.createElement("p");
		let originalDate = document.createElement("div");
		// creating a for loop to loop through each object and create textNode of values
		let date = document.createTextNode(commentsObj[count].date);
		originalDate.appendChild(date);
		newCommentsDiv.appendChild(date);
		let text = document.createTextNode(commentsObj[count].name);
		originalHeading.appendChild(text);
		newCommentsDiv.appendChild(originalHeading);
		let textOne = document.createTextNode(commentsObj[count].comment);
		originalParagraph.appendChild(textOne);
		newCommentsDiv.appendChild(originalParagraph);

		// console.log(newCommentsDiv);
		newComments.appendChild(newCommentsDiv);
		count++;
	}
}
createObject();

//---------------------------------------------------------------------------------------

comments.addEventListener("submit", (event) => {
	// callback function so it can do the function once submit is submitted
	event.preventDefault();

	let name = event.target.name.value;
	let comment = event.target.comment.value;
	let date = Date();

	//pulling info from form
	function addCommentToArray(name, comment) {
		let x = new Object();
		x.name = name;
		x.comment = comment;
		x.date = date;
		commentsObj.push(x);
		console.log(commentsObj);
	}
	addCommentToArray(name, comment);
	createObject();

	//create element
	// const commentAvatar = document.createElement("img")

	// let inputText = document.createElement("p");
	// let createName = document.createElement("h3");
	// let commentsDivSmall = document.createElement("div");

	// // append to DOM

	// // createName.innerHTML = formValue; //using the createName variable .innerHTML to equal the value
	// // of formValue which is pulling data from the form
	// let commentsName = document.createTextNode(name);
	// let commentsText = document.createTextNode(comment);

	// // createName.innerText = commentsName;
	// // inputText.innerText = commentsText;

	// createName.appendChild(commentsName);
	// inputText.appendChild(commentsText);

	// commentsDivSmall.appendChild(createName);
	// commentsDivSmall.appendChild(inputText);
	// newComments.appendChild(commentsDivSmall);
	// commentsObj.push.newComments;
});
