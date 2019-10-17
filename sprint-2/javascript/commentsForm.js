const comments = [
	{
		name: "Micheal Lyons",
		comment:
			"They blew the roof off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed"
	},
	{
		name: "Gary Wong",
		comment:
			"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I could ride like him one day so I can really enjoy myself"
	},
	{
		name: "Theodore Duncan",
		comment:
			"How can someone be soo good!!! You can tell he lives for this and loves to do it everyday. Every time I see him I get instantly happy! He's definitely my favorite ever"
	}
];

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

		createTableTablet(table, comment);
		if (comments.length === 1) {
			createTableHeadTablet(table, showKeys);
		}
	} else {
		let alert = document.querySelector(".alert");
		alert.style.display = "block";
	}

	// clear the form once submitted successfully
	submitEvent.target.reset();
});
