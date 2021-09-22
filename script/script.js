const inputFields = document.getElementsByTagName('input');

form.addEventListener('submit', e => {
	e.preventDefault();

    var isInputValid = true;
    for(var i=0; i < inputFields.length; i++) {
        if(inputFields[i].value == '' | inputFields[i].value == null) {
            isInputValid = false;
            inputFields[i].parentElement.classList.add('error');
            inputFields[i].setAttribute('placeholder', '');
        }
        else{
            inputFields[i].parentElement.classList.remove('error');
        }

    }

    //Check Email
    const email = document.getElementById('email');
    const emailVal = email.value;

    if (!validateEmail(emailVal)) {
		email.parentElement.classList.add('error');
        email.setAttribute('placeholder', 'example@email.com');
	} else if( validateEmail(emailVal) & isInputValid ) {
		document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
	} else {
        email.parentElement.classList.remove('error');
    }


});

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}