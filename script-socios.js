const form = document.getElementById('form');
const Nombre = document.getElementById('name');
const Apellido = document.getElementById('lastname');
const Documento = document.getElementById('Document');
const Telefono = document.getElementById('number');
const Ciudad = document.getElementById('city');
const Email = document.getElementById('email');
const Contraseña = document.getElementById('password');

const campos = [Nombre, Apellido, Documento, Telefono, Ciudad, Email, Contraseña]

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
})

function checkInputs() {
	let isFormValid = true

	campos.forEach(input => {
		const value = input.value.trim();
		if (value === '') {
			setErrorFor(input, 'No puede dejar este campo en blanco');
			isFormValid = false;
		} else {
		setSuccessFor(input);
		}
	});
	if (isFormValid) {
		alert('Todos los campos estan completos y válidos. El formulario se enviará.')
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}