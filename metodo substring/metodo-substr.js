const mostrarEjemplo1 = document.querySelector(".resultado-ejemplo1");
const palabraEjemplo1 = "hola como estás";
const palabraFormada = palabraEjemplo1.substring(0, 3);
document.querySelector(".btn-resultado1").addEventListener("click", ()=> mostrarEjemplo1.textContent = palabraFormada)
 



let cadena = "Hola, mundo";

// Extraer desde el índice 3 hasta el final
let resultado1 = cadena.substring(3);
console.log(resultado1); // Resultado: "a, mundo"

// Extraer desde el índice 0 hasta 4 caracteres
let resultado2 = cadena.substring(0, 4);
console.log(resultado2); // Resultado: "Hola"

// Extraer los últimos 5 caracteres
let resultado3 = cadena.substring(-5);
console.log(resultado3); // Resultado: "mundo"
