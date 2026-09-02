let usuarios = [];
let passes = [];

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
    for(let i = 0; i<=usuarios.length; i++){
        if (userv == usuarios(i)){
            for(let j = 0; i<= passes.length; i++){
                if (passv == passes(i)){
                    alert ("Inicio de sesión válido.");
                }
                else{
                    alert ("Usuario o contraseña inválidos.");
                }
            }
        }
        else{
            alert ("Usuario o contraseña inválidos.");
        }

    }
}