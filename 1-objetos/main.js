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
const basket ={
    max:10,
    min:0,
    current:7,
    initial:1,
    add:current++,
    take:current--,
    reset:current===initial,
}
console.log(basket.max);
console.log(basket.min);
console.log(basket.current);
console.log(basket.initial);
console.log(basket.add);
console.log(basket.take);
console.log(basket.reset);