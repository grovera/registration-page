function initilizeValues(){
	document.getElementById('user_id').value = localStorage.getItem("user_id");
	document.getElementById('password').value = localStorage.getItem("password");
	document.getElementById('verify_pasword').value = localStorage.getItem("password");
	document.getElementById('email').value = localStorage.getItem("email");
	document.getElementById('verify_email').value = localStorage.getItem("email");
	document.getElementById('security_questions_1').value = localStorage.getItem("security_questions_1");
	document.getElementById('security_answer_1').value = localStorage.getItem("security_answer_1");
	document.getElementById('security_questions_2').value = localStorage.getItem("security_questions_2");
	document.getElementById('security_answer_2').value = localStorage.getItem("security_answer_2");
	document.getElementById('mobile').value = localStorage.getItem("mobile");
	document.getElementById('address').value = localStorage.getItem("address");
	document.getElementById('interest').value = localStorage.getItem("interest");
	calculatePasswordStrength();
}

function verifySubmission(){
	var password = document.getElementById("password").value;
	var email = document.getElementById("email").value;
	if(password.localeCompare(document.getElementById("verify_pasword").value)!=0){
		window.alert("Password does not match. Please re-enter.")
	}
	else if(email.localeCompare(document.getElementById("verify_email").value)!=0){
		window.alert("Email does not match. Please re-enter.")
	}
	else{
		saveData();
	}
}

function calculatePasswordStrength(){
	var password = document.getElementById("password").value;
	var passwordScore = 0;
	var lowerCase = new RegExp("^(?=.*[a-z])");
	var upperCase = new RegExp("^(?=.*[A-Z])");
	var numericalChar = new RegExp("^(?=.*[0-9])");
	var specialChar = new RegExp("^(?=.*[!@#\$%\^&\*])");
	if(password.length >7){
		passwordScore++;
	}
	if(lowerCase.test(password)){
		passwordScore++;
	}
	if(upperCase.test(password)){
		passwordScore++;
	}
	if(numericalChar.test(password)){
		passwordScore++;
	}
	if(specialChar.test(password)){
		passwordScore++;
	}
	if(password.length > 0 && password.localeCompare(document.getElementById("user_id").value)!=0){
		passwordScore++;
	}
	document.getElementById("password_strength").value = passwordScore.toString();
}

function saveData(){
	localStorage.setItem("user_id", document.getElementById("user_id").value);
	localStorage.setItem("password", document.getElementById("password").value);
	localStorage.setItem("email", document.getElementById("email").value);
	localStorage.setItem("security_questions_1", document.getElementById("security_questions_1").value);
	localStorage.setItem("security_answer_1", document.getElementById("security_answer_1").value);
	localStorage.setItem("security_questions_2", document.getElementById("security_questions_2").value);
	localStorage.setItem("security_answer_2", document.getElementById("security_answer_2").value);
	localStorage.setItem("mobile", document.getElementById("mobile").value);
	localStorage.setItem("address", document.getElementById("address").value);
	localStorage.setItem("interest", document.getElementById("interest").value);
}