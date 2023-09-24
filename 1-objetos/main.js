'use strict';
//TODO: Adalabers
const body= document.querySelector('.js-body');

const adalaber1 = {
    name: "Susana",
    age: 34,
    job: "periodista",
    run: console.log(`Estoy corriendo`),
    runAMarathonkm: (distance) => `Estoy corriendo una maratón de ${distance} kilómetros`,
}
console.log(adalaber1.runAMarathonkm(50));

const adalaber2 = {
    name: "Rocío",
    age: 25,
    job: "actriz",
}

function render(adalaber){
    body.innerHTML+=`<p>Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.job}</p>`;
}

render(adalaber1);
render(adalaber2);

//TODO:Cesta de peras2 Crear una cesta de peras

//*CONSTANTES
const max=document.querySelector('.js-max');
const min=document.querySelector('.js-min');
const init=document.querySelector('.js-init');
const current=document.querySelector('.js-current');
const clickBtn=document.querySelector('.js-click');

const btnAdd=document.querySelector('.js-btn-add');
const btnRest=document.querySelector('.js-btn-rest');
const btnRst=document.querySelector('.js-btn-rst');

//*FUNCIONES
function handleClick(event){
    console.log(event.target);
    console.log(event.currentTarget);
    //!las dos loguearán lo mismo si se clickea en la sección, pero cosas distintas en cada botón
}
function handleAdd(event){

}
function handleRest(event){

}
function handleRst(event){

}

//*EVENTOS
btnAdd.addEventListener('click',handleAdd);
btnRest.addEventListener('click',handleRest);
btnRst.addEventListener('click',handleRst);
clickBtn.addEventListener('click',handleClick);

// const basket ={
//     max:10,
//     min:0,
//     current:7,
//     initial:1,
//     add:current++,
//     rest:current--,
//     reset:current===initial,
// }
