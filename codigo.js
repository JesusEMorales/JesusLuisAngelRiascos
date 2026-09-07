let usuarios = ["Luis"];
let passes = ["1234"];

function guardaruser(){
    usuarioagregado = document.getElementById("userinicio").value;
}

function guardarpass(){
    passagregado = document.getElementById("passinicio").value;
}

function guardar(){
    guardaruser()
    guardarpass()
    usuarios.push(usuarioagregado)
    passes.push(passagregado)
    alert("Usuario registrado exitosamente.")
}

function useri(){
    userv = document.getElementById("usuario").value;
}

function passi(){
    passv = document.getElementById("pass").value;
}

function verificar(){ 
    useri()
    passi()
        if (userv == usuarios()){
            if (passv == passes(i)){
                alert ("Inicio de sesión válido.");
            }
            else{
                alert ("Usuario o contraseña inválidos.");
            }
        }
        else{
            alert ("Usuario o contraseña inválidos.");
        }

}
