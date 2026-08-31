let username = [];
let password = [];


function mostrar(id) {
    document.getElementById("div1").className = "oculto";
    document.getElementById("div2").className = "oculto";
    document.getElementById(id).className = "visible";
}

function guardar() {
    nombre = document.getElementById("nombrehtml").value;
    alert("tu nombre es: " + nombre);
}