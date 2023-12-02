const resultado = document.querySelector(".resultado");
const botonMostrarResultado = document.querySelector(".boton-ver-resultados");
const numeros = [1, 2, 3, 4, 5];

botonMostrarResultado.addEventListener("click", ()=>{
    resultado.textContent = multiplicarNumeros(numeros);
})

function multiplicarNumeros(listaDeNumeros) {
    const nuevaListaDeNumeros = listaDeNumeros.map((numero)=> numero * 2)
    return nuevaListaDeNumeros;
}

//----------------------------------------------

const palabras = ["holA", "munDo", "como", "estAn"];
const resultado2 = document.querySelector(".resultado2");
const botonMostrarResultado2 = document.querySelector(".boton-ver-resultados2");

botonMostrarResultado2.addEventListener("click", ()=>{
    resultado2.textContent = convertirMayusculas(palabras);
})

function convertirMayusculas(listaDePalabras) {
    const nuevaListaDePalabras = listaDePalabras.map((palabra)=> palabra.toUpperCase());
    return nuevaListaDePalabras;
}