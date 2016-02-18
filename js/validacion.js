//alert("llamado a archivo js exitoso");
function validacion(){
	var user = document.getElementById("user").value;
	var pass = document.getElementById("password").value;
	var name = document.getElementById("name").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var fechaInDD = document.getElementById("fechaInDD").value;
	var fechaInMM = document.getElementById("fechaInMM").value;
	var fechaInAA = document.getElementById("fechaInAA").value;
	var fechaIn2DD = document.getElementById("fechaIn2DD").value;
	var fechaIn2MM = document.getElementById("fechaIn2MM").value;
	var fechaIn2AA = document.getElementById("fechaIn2AA").value;

	if (user == "") {
		alert("Por Favor digite un usuario");
		return false
	}

	if (pass == "") {
		alert("Por Favor digite una contrase&#241a");
		return false
	}

	if (name == "") {
		alert("Por Favor digite su nombre");
		return false
	}

	if (lastname == "") {
		alert("Por Favor digite su apellido");
		return false
	}

	if (email == "") {
		alert("Por Favor digite un correo electronico");
		return false
	}
}