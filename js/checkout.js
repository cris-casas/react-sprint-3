// Exercise 6
/*
--> Tots els camps són obligatoris.
--> Tots els camps han de tenir almenys 3 caràcters.
--> El nom i cognoms han de contenir només lletres.		
--> El telèfon ha de contenir només números.
--> La contrasenya ha d'incloure números i lletres.
--> L'email ha de tenir format d'email.
*/

const form = document.querySelector(".needs-validation");

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneFormat = /^\d{9,14}$/;
const nameFormat = /^[A-Za-z]+$/;
const passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/;

form.addEventListener("submit", event => {

		let error = 0;

		const { fName, fLastN, fEmail, fPassword, fPhone, fAddress } = event.target; // DESTRUCTURE DE event.target.name.value

		// - El nom i cognoms han de contenir només lletres.
		if(fName.value.match(nameFormat) && fName.value.length >= 3) {
			fName.classList.remove("is-invalid");
			fName.classList.add("is-valid");
		} else {
			fName.classList.remove("is-valid");
			fName.classList.add("is-invalid");
			error++;
		}

		if(fLastN.value.match(nameFormat) && fLastN.value.length >= 3) {
			fLastN.classList.remove("is-invalid");
			fLastN.classList.add("is-valid");
		} else {
			fLastN.classList.remove("is-valid");
			fLastN.classList.add("is-invalid");
			error++;
		}

		//- L'email ha de tenir format d'email.
		// fEmail.value != mailFormat ??
		if(fEmail.value.match(mailFormat) && fEmail.value.length >= 3) {
			fEmail.classList.remove("is-invalid");
			fEmail.classList.add("is-valid");
		} else {
			fEmail.classList.remove("is-valid");
			fEmail.classList.add("is-invalid");
			error++;
		}

		// - El telèfon ha de contenir només números.
		if(fPhone.value.match(phoneFormat) && fPhone.value.length >= 3) {
			fPhone.classList.remove("is-invalid");
			fPhone.classList.add("is-valid");
		} else {
			fPhone.classList.remove("is-valid");
			fPhone.classList.add("is-invalid");
			error++;
		}

		// -La contrasenya ha d'incloure números i lletres.
		if(fPassword.value.match(passFormat) && fPassword.value.length >= 3) {
			fPassword.classList.remove("is-invalid");
			fPassword.classList.add("is-valid");
		} else {
			fPassword.classList.remove("is-valid");
			fPassword.classList.add("is-invalid");
			error++;
		}

		// - Tots els camps són obligatoris. 
		if(fAddress.value.length >= 3) {
			fAddress.classList.remove("is-invalid");
			fAddress.classList.add("is-valid");
		} else {
			fAddress.classList.remove("is-valid");
			fAddress.classList.add("is-invalid");
			error++;
		}

		if(error>0){
			event.preventDefault();
			
		}else{
			alert("El teu formulari s'ha enviat correctament");
		}

	}
);

/*
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
*/