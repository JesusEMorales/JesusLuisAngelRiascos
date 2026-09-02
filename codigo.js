let username = [];
let password = [];


function mostrar(id) {
    document.getElementById("registrarse").className = "oculto";
    document.getElementById("ingresar").className = "oculto";
    document.getElementById(id).className = "visible";
}

function guardar() {
    nombre = document.getElementById("nombrehtml").value;
    username.push(nombre);

}
function guardar2() {
    contrasena = document.getElementById("contrasenahtml").value;
    password.push(contrasena);
}