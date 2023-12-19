//con ARRAYS
const number = [10, 20 , 30];

//ejemplo sin destructuración
const getNumber = number[0];
console.log(getNumber);

const getNumber2 = number[2];
console.log(getNumber2);

//ejemplo con destructuración

const [ten, twenty, thirty] = number;
console.log(ten);
console.log(thirty);

//Con OBJETOS

const persona = {
    nombre : 'cachito',
    apellido : "fontana",
    edad : 30
}

//sin destructuración

const getName = persona.nombre;
console.log(getName);

//con destructuración

const {nombre, apellido, edad} = persona;
console.log(nombre);

//CON FUNCIÓN
const person = { name: 'John', age: 30, city: 'New York' };
const getData = ({name, city})=>{
    console.log(name);
    console.log(city);
}

getData(person);

//comentario

