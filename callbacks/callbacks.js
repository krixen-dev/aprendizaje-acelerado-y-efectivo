const botonEjemplo1 = document.querySelector(".button-ejemplo1");

botonEjemplo1.addEventListener("click", function(){
    return alert("hiciste click")
})

const textoSecreto = document.querySelector(".texto-secreto");

const botonMensajeSecreto = document.querySelector(".boton-ver-mensaje");

function cambiarMensaje() {
    textoSecreto.textContent = "Este es el mensaje: SUSCRIBETE a mi canal, no seas rata"
}

botonMensajeSecreto.addEventListener("click", cambiarMensaje);

const numeroOculto = document.querySelector(".input-numero");

function verificarCoincidencia(e) {
    if (parseInt(e.target.value) === 1) {
        console.log("ganas");
    }else{
        console.log("pierdes");
    }
}

numeroOculto.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        console.log("verificando...");
        setTimeout(function () {
            verificarCoincidencia(e);
        }, 3000)
    }
})

//hola mundo