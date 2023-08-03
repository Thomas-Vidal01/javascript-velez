const form = document.getElementById('form');
const Nombre = document.getElementById('Nombre');
const Apellido = document.getElementById('Apellido');
const Documento = document.getElementById('Documento');
const Telefono = document.getElementById('Telefono');
const Ciudad = document.getElementById('Ciudad')
const Email = document.getElementById('Email');
const Contraseña = document.getElementById('Contraseña');

//para que al pulsar el boton comience un evento

form.addEventListener('crear cuenta', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim para remover los epsacios en blanco
	const NombreValue = Nombre.value.trim();
	const ApellidoValue = Apellido.value.trim();
	const DocumentoValue = Documento.value.trim();
	const TelefonoValue = Telefono.value.trim();
    const CiudadValue = Ciudad.value.trim();
    const EmailValue = Email.value.trim();
    const ContraseñaValue = Contraseña.value.trim();
	
	if(NombreValue === '') {
		setErrorFor(Nombre, 'Noi puede dejar el Nombre en blanco');
	} else {
		setSuccessFor(Nombre);
	}
    if(ApellidoValue === '') {
		setErrorFor(Apellido, 'Noi puede dejar el Apellido en blanco');
	} else {
		setSuccessFor(Apellido);
	}
    if(DocumentoValue === '') {
		setErrorFor(Documento, 'Noi puede dejar el Documento en blanco');
	} else {
		setSuccessFor(Documento);
	}
    if(TelefonoValue === '') {
		setErrorFor(Telefono, 'Noi puede dejar el Telefono en blanco');
	} else {
		setSuccessFor(Telefono);
	}
    if(CiudadValue === '') {
		setErrorFor(Ciudad, 'Noi puede dejar la Ciudad en blanco');
	} else {
		setSuccessFor(Ciudad);
	}
	if(EmailValue === '') {
		setErrorFor(Email, 'No puede dejar el email en blanco');
	} else if (!isEmail(EmailValue)) {
		setErrorFor(Email, 'No ingreso un email válido');
	} else {
		setSuccessFor(Email);
	}
	
	if(ContraseñaValue === '') {
		setErrorFor(Contraseña, 'Su Contraseña no debe ser en blanco.');
	} else {
		setSuccessFor(Contraseña);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(Email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);
}