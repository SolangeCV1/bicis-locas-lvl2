function validateForm(){
//Valida nombre solo con letras y mayuscula
	var nombre = document.getElementById('name').value;
	if( nombre == null || nombre.length <=2 || /^\s+$/.test(nombre) || /^[a-zA-Z]*$/.test(nombre)==false) {
        alert("Debes ingresar tu nombre, solo utilizando letras");
        return false;
    	} else if (nombre.substring(0,1) == nombre.substring(0,1).toUpperCase() == false){
        alert ("Recuerda ingresar tu nombre con la primera letra Mayuscula");
        return false;
    }
//Valida apellido solo con letras y mayuscula
	var apellido = document.getElementById('lastname').value;
	if( apellido == null || apellido.length <=2 || /^\s+$/.test(apellido) || /^[a-zA-Z]*$/.test(apellido)==false) {
        alert("Debes ingresar tu apellido, solo utilizando letras");
        return false;
    	} else if (apellido.substring(0,1) == apellido.substring(0,1).toUpperCase() == false){
        alert ("Recuerda ingresar tu Apellido con la primera letra Mayuscula");
        return false;
    }
//Valida correo electronico
	var email = document.getElementById('input-email').value;
	if (email == null || email.length < 0||/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) != true){
        alert("Ingresa una dirección de correo electrónico válida");
        return false;  
    }
//Validacion de Contraseña
	var contrasena = document.getElementById('input-password').value;
    if (contrasena == null|| contrasena.length<6){
        alert ("Contraseña demasiado corta")
        return false;
    }
    else if (contrasena=='123456'|| contrasena =='098765' || contrasena == 'password'){
        alert ("Tu contraseña no es segura, vuelve a intentarlo");
        return false;
    }
//Validacion de tipos de bicicletas   
	var tiposBicis = document.querySelector('select').value; 
    if (tiposBicis == 0) {
        alert("Elige un tipo de bicicleta!");
        return false;
    }

}

