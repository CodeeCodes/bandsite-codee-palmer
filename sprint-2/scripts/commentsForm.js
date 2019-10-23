let count = 3;
//Api's

//Axios
const URL =
	"https://project-1-api.herokuapp.com/comments?api_key=1d62d694-bcac-4726-b895-087be90906f6";
function retrieveComments() {
	axios.get(URL).then((response) => {
		// console.log(response);
		createObject(response.data);
	});
}

//code to get comments to go into the div created in HTML------------------------

// collecting the comments section from the document
const comments = document.getElementById("comments__section");
//getting the empty comments
const newComments = document.getElementById("comments");
//count for createObject function

function createObject(commentsObj) {
	//while count is less than length of comments object length
	for (let i = 0; i < commentsObj.length; i++) {
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
		let text = document.createTextNode(commentsObj[i].name);
		originalHeading.appendChild(text);
		newCommentsDiv.appendChild(originalHeading);
		//pulling information to make date textnode then appending it to child of newCommentsDiv
		let date = commentsObj[i].timestamp;
		let today = new Date();
		date =
			today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
		date = document.createTextNode(date);
		originalDate.appendChild(date);
		newCommentsDiv.appendChild(originalDate);
		//pulling information to make comment textnode then appending it to child <p> of newCommentsDiv
		let textOne = document.createTextNode(commentsObj[i].comment);
		originalParagraph.appendChild(textOne);
		newCommentsDiv.appendChild(originalParagraph);
		// appending all elements to the empty div tag in html
		newComments.appendChild(newCommentsDiv);
	}
}
retrieveComments();
//---------------------------------------------------------------------------------------

comments.addEventListener("submit", (event) => {
	// callback function so it can do the function once submit is submitted
	//prevent default behaviour of the form element (page refresh)
	event.preventDefault();
	let removeVar = function removeDiv() {
		for (let i = 0; i < count; i++) {
			let divRemove = document.getElementById("comments");
			divRemove.removeChild(divRemove.childNodes[0]);
		}
	};

	//pulling information from event <form>  and assigning them to variables
	let name = event.target.name.value;
	let comment = event.target.comment.value;

	let axiosObject = {
		name: name,
		comment: comment
		// timestamp: date
	};

	axios
		.post(
			"https://project-1-api.herokuapp.com/comments?api_key=1d62d694-bcac-4726-b895-087be90906f6",
			axiosObject
		)
		.then(function(response) {
			// console.log(response);
		})
		.catch(function(error) {
			// console.log(error);
		});
	setTimeout(function() {
		retrieveComments();
	}, 3000);

	removeVar();
	// retrieveComments();
	comments.reset();
});
