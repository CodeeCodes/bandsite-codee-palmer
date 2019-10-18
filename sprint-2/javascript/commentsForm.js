const commentsObj = [
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
console.log(commentsObj);

const comments = document.getElementById("comments__section");
const newComments = document.getElementById("comments");
const formValue = comments__section.getElementsByTagName('input["type = text"]')
	.value; //getting the value from the <input> tag with type text

comments.addEventListener("submit", function(event) {
	event.preventDefault();

	//create element
	// const commentAvatar = document.createElement("img")

	const inputText = document.createElement("p");
	const createName = document.createElement("h3");
	const commentsDivSmall = document.createElement("div");

	// append to DOM

	// createName.innerHTML = formValue; //using the createName variable .innerHTML to equal the value
	// of formValue which is pulling data from the form
	inputText.innerHTML = formValue;
	commentsDivSmall.appendChild(createName);
	commentsDivSmall.appendChild(inputText);
	comments.appendChild(commentsDivSmall);

	console.log(newComments);
});
