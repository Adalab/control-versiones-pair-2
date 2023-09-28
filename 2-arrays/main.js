'use strict';
//TODO obtener información
const fruits = ['pera', 'manzana', 'naranja', 'plátano'];
console.log(fruits); 
console.log(fruits[3]);

//TODO añadir un elemento 
fruits[4] = 'uva';
fruits[7] = 'pomelo'; //!ojo  >length que crea espacios vacíos
console.log(fruits);

//TODO modificar un elemento 
fruits[2] = 'piña';
console.log(fruits);

//TODO obtener valor
const options = ['coche', 'viaje', 'crucero', 'llavero'];
const lotteryNumberInput = document.querySelector('#lotteryNumber');

function handleLotteryNumberChange(event) {
const input = event.currentTarget;
const selectedNumber = parseInt(input.value);
const ind = selectedNumber - 1;
const win = options[ind]; 
console.log('Premio: ', win);
}

lotteryNumberInput.addEventListener('keyup', handleLotteryNumberChange);

// TODO 1. Películas
function workWithMovies(){
  const pelis= ['Gangs of New York', 'Back to the future', 'Jurassic Park'];
  console.log(pelis);

  pelis[3]= 'The Godfather';
  console.log(pelis);

  pelis[2]= 'Motherless Brooklyn';
  console.log(pelis);
}
workWithMovies()