const comments = [];

function validateData() {
	let name = event.target.name.value;
	let comments = event.target.comments.value;
}
// use DOM apis to get access to form element
const form = document.getElementById("comments"); //form ID name is put into a const form
form.addEventListener("submit", (comments) => {
	//prevent page refresh
	submitEvent.preventDefault();
	//validate form
	let isValidData = validateData(comments);
	if (isValidData) {
		let commentObj = {};
		commentObj.name.submitEvent.name.value;
		commentObj.comment.submitEvent.comment.value;

		comments.push(commentObj);
		console.log(commentObj);
		let table = document.querySelector("table");
		// need only the keys for creating table head
		let rsvpKeys = Object.keys(comments[0]);

		createTable(table, comment);
		if (comments.length === 1) {
			createTableHead(table, showKeys);
		}
	} else {
		let alert = document.querySelector(".alert");
		alert.style.display = "block";
	}

	// clear the form once submitted successfully
	submitEvent.target.reset();
});
