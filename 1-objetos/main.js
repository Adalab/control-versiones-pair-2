'use strict';
//TODO 1.Adalabers
const body = document.querySelector('.js-body');

const adalaber1 = {
  name: 'Susana',
  age: 34,
  job: 'periodista',
  run: console.log(`Estoy corriendo`),
  runAMarathonkm: (distance) =>
    `Estoy corriendo una maratón de ${distance} kilómetros`,
};
console.log(adalaber1.runAMarathonkm(50));

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  job: 'actriz',
};

function render(adalaber) {
  body.innerHTML += `<p>Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.job}</p>`;
}

render(adalaber1);
render(adalaber2);

//TODO 2.Cesta de peras Crear una cesta de peras

//*CONSTANTES
const maxPear = document.querySelector('.js-max');
const minPear = document.querySelector('.js-min');
const initPear = document.querySelector('.js-init');
const currentPear = document.querySelector('.js-current');

const btnAdd = document.querySelector('.js-btn-add');
const btnRest = document.querySelector('.js-btn-rest');
const btnRst = document.querySelector('.js-btn-rst');


//*objeto
const basket = {
  max: 10,
  min: 1,
  init: 2,
  current: 5,
  // add: 
  // rest: 
  // reset: 
};
maxPear.innerHTML += basket.max;
minPear.innerHTML += basket.min;
initPear.innerHTML += basket.init;
currentPear.innerHTML += basket.current;

//*FUNCIONES
function handleAdd(event) {
    if(basket.current<basket.max){
        basket.current+=1;
        currentPear.innerHTML = `Cantidad actual: ${basket.current}`;
    }else{currentPear.innerHTML = `Cantidad actual: ${basket.current}, has alcanzado el número máximo de peras`;}
}
function handleRest(event) {
    if(basket.current>basket.min){
        basket.current-=1;
        currentPear.innerHTML = `Cantidad actual: ${basket.current}`;
    }else{currentPear.innerHTML = `Cantidad actual: ${basket.current}, ya no puedes quitar más peras`;}
}
function handleRst(event) {
    basket.current=basket.init;
    currentPear.innerHTML = `Cantidad actual: ${basket.init}`;
}

//*EVENTOS
btnAdd.addEventListener('click', handleAdd);
btnRest.addEventListener('click', handleRest);
btnRst.addEventListener('click', handleRst);

// TODO 3. Estructura de datos para un usuario
const job= 'developer';
const user= {};
user.firstName= 'Bruno';
user.lastName= 'Díaz';
user.age= 40;
user.job=job;

console.log(user);

user.firstName= 'Batman';
user.age++;

console.log(user);

// TODO Ejercicio Extra. Investigando
const logBtn=document.querySelector('.js-btn-log');
function handleLog(){
  console.log(event);
}
logBtn.addEventListener('click', handleLog);

const input=document.querySelector('.js-input');
console.dir(input);

