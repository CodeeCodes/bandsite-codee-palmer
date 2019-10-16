const comments = [];

function validateData() {
	let courseSelection = event.target.course.value;
	let firstName = event.target.course.value;
	let lastName = event.target.course.value;
	let email = event.target.course.value;
	let phoneNumber = event.target.phoneNumber.value;
	let password = event.target.password.value;
}
// use DOM apis to get access to form element
const form = document.getElementById("commentsForm"); //form ID name is put into a const
form.addEventListener("submit", (submitEvent) => {
	//prevent page refresh
	submitEvent.preventDefault();
	//validate form
    let isValidData = validateData(submitEvent);
    if(isValidData){
        let countries = document.getElementById("countries");
        let selectedCountry = 
    }

});
