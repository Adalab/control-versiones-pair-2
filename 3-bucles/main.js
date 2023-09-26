'use strict';
//TODO Iterando sobre un array. Acumulando puntaje.
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
let acc = 0;

for (let i = 0; i < scores.length; i++) {
  acc += scores[i];
}

console.log('La puntuación final es ' + acc);

//TODO Diferencia bucles For y For-Of.
const movies = [
  'Jurassic Park',
  'Back to the future',
  'The Godfather',
];

// *bucle For
for (let i = 0; i < movies.length; i++) {
  console.log(
    `"${movies[i]}" me encanta`
  );
}

// *bucle For-Of
for (const movie of movies) {
  console.log(`"${movie}" me encanta`);
}

//TODO 1. Practicando
for (let i = 1; i < 11; i++) {
    console.log('Voy por la vuelta ' + i);
  }

let resultado = 0;
for (let i = 0; i < 10; i++) {
  resultado+=2;
}
console.log('El resultado es ' + resultado);

  //TODO 2. La media
// *a) Crea un nuevo array numbers con 5 números y recorrelo con un bucle para calcular la media de los números . Necesitas una variable (acumulador) para ir almacenando la suma de todos los números y después hacer la media.
const someNumbers = [9, 1, 2, 6, 7];

function media(){
  let accMedia = 0;
  for (let i = 0; i < someNumbers.length; i++) {
    accMedia += someNumbers[i];
  }
  return accMedia/someNumbers.length;
}
console.log(media());

// *b) Añade un nuevo número al array y repetir el cálculo de la media.
someNumbers[5]=8;
console.log(media());

// *c) Crea una función average, que toma como parámetro un array numbers, calcula la media del array (de cualquier longitud) y devuelve la media. Para trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.
