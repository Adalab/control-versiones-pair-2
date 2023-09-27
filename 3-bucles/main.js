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

function calcMedia(){
  let accMedia = 0;
  for (let i = 0; i < someNumbers.length; i++) {
    accMedia += someNumbers[i];
  }
  return accMedia/someNumbers.length;
}
console.log(calcMedia());

// *b) Añade un nuevo número al array y repetir el cálculo de la media.
someNumbers[5]=8;
console.log(calcMedia());

// *c) Función media con parámetros
const arr1 = [1, 2, 6, 7];
const arr2 = [9, 1, 2];
const arr3 = [6, 3, 8, 4, 10];

function media(arrMedia){
  let accMedia = 0;
  for (let i = 0; i < arrMedia.length; i++) {
    accMedia += arrMedia[i];
  }
  return accMedia/arrMedia.length;
}
console.log(media(arr1));
console.log(media(arr2));
console.log(media(arr3));

//TODO 3. Tenemos mucho en común
const input1=document.querySelector('.js-favs1');
const input2=document.querySelector('.js-favs2');
const favsBtn=document.querySelector('.js-favs-btn');
const favs=[];

function handleFavs(event){
  event.preventDefault();
  favs[0]= input1.value;
  favs[1]= input2.value;
  for (const fav of favs) {
    console.log(`¡A mí también me encantó "${fav}"! Tenemos mucho en común, humana.`);
  }
}

favsBtn.addEventListener ('click', handleFavs);

//TODO Ejercicio Extra. Previsión para ver la Luna del cazador
// Cada 3 años se produce la Luna del cazador. Se vio el 5/10/2017. Vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.
// Antes de programar nada, escribamos el listado de las acciones (algoritmo) que tenemos que realizar.
//*ALGORITMO
//*Bucle que se repita 15 veces.
//*Acumulador de años de tres en tres.
const dates = [2017];
let years = 2017;

function sumar(){
  for (let i = 0; i <dates.length; i++) {
    return years+=3
  }

}
for (let i = 0; i <=15; i++) {
  sumar();
  dates.push(years);
}
//*LO QUE LE COMENTÓ CHAT GPT A ARAN
// Paso 1: Definir el año actual y el contador de Lunas
let year = 2017;
let count = 0;
const hunterMoons = []; // Array para almacenar las fechas
// Paso 3: Crear un bucle para encontrar las próximas 15 Lunas del cazador
while (count < 15) {
  // Paso 4a: Verificar si el año es divisible por 3
  if (year % 3 === 0) {
    // Paso 4b: Verificar si la fecha es el 5 de octubre o el año siguiente
    const moonDate = new Date(year, 9, 5); // 9 representa octubre (los meses comienzan desde 0)
    const nextYearMoonDate = new Date(year + 1, 9, 5);
    const currentDate = new Date(); // Obtener la fecha actual
    if (currentDate >= moonDate && currentDate <= nextYearMoonDate) {
      // Paso 5: Almacenar la fecha en el array
      hunterMoons.push(moonDate.toDateString());
      count++;
    }
  }
  // Paso 6: Incrementar el año
  year++;
}
// Mostrar las fechas almacenadas en el array
hunterMoons.forEach((date, index) => {
  console.log(`Luna del cazador ${index + 1}: ${date}`);
});