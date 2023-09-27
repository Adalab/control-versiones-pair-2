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
const dates = [];
let moonYear = 2020;

function moonYears(){
  for (let i = 0; i <15; i++) {
    moonYear+=3;
    dates.push(moonYear);
    console.log(`Podrás observar la "Luna del cazador” el 5 de octubre de ${moonYear}`);
  }
}

moonYears();

//TODO 1. A story of adalabers
const adalabers=[
  {
    adaName:'María',
    adaAge:29,
    adaJob:'Diseñadora',
  },
  {
    adaName:'Lucia',
    adaAge:31,
    adaJob:'Ingeniera química',
  },
  {
    adaName:'Susana',
    adaAge:34,
    adaJob:'Periodista',
  },
  {
    adaName:'Rocío',
    adaAge:25,
    adaJob:'Actriz',
  },
  {
    adaName:'Inmaculada',
    adaAge:21,
    adaJob:'Diseñadora',
  },
]

const countAdalabers = listado => listado.length;
console.log(countAdalabers(adalabers));

function averageAge(listado){
let ages=0;
for (const adalaber of listado) {
  ages+=adalaber.adaAge;
}
console.log(ages);
return ages/countAdalabers(listado)
}
console.log(averageAge(adalabers));

function theYoungest(listado) {
  let youngest = listado[0];
  for (const adalaber of listado) {
    if (adalaber.adaAge < youngest.adaAge) {
      youngest = adalaber;
    }
  }
  return youngest.adaName;
}
console.log(theYoungest(adalabers));

function countDesigners(listado){
  let designers=[];
  for (const adalaber of listado) {
    if (adalaber.adaJob==="Diseñadora") {
      designers.push(adalaber);
    }
  }
  return designers.length
}
console.log(countDesigners(adalabers));


adalabers[3].adaJob='Diseñadora'
console.log(countDesigners(adalabers));

adalabers.push({
  adaName:'Laura', 
  adaAge:33,
  adaJob:'Tejedora'});

console.log(averageAge(adalabers));
console.log(countAdalabers(adalabers));



