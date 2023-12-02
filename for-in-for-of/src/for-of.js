const botonResultado1 = document.querySelector(".boton-mostrar-resultado1");
const mostrarResultado1 = document.querySelector(".mostrar-resultado1");
const numeros = [1, 2, 3, 4, 5];

botonResultado1.addEventListener("click", ()=> mostrarResultado1.textContent = multiplicarNumeros(numeros));


function multiplicarNumeros(listaDeNumeros) {
    let nuevaLista = [];
    for (const numero of listaDeNumeros) {
        nuevaLista.push(numero * 2);
    }
    return nuevaLista;
}

//--------------------------------------------------------------

const botonResultado2 = document.querySelector(".boton-mostrar-resultado2");
const mostrarResultado2 = document.querySelector(".mostrar-resultado2");
const mensaje = "hola mundo";

botonResultado2.addEventListener("click", ()=> mostrarResultado2.textContent = iterarMensaje(mensaje))

function iterarMensaje(mensaje) {
    let listaDeLetras = [];
    for (const letra of mensaje) {
        listaDeLetras.push(letra);
    }
    return listaDeLetras;
}