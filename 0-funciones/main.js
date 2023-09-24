'use strict';

function hacerAlgo(conX) {
  return `Esta función hizo algo con ${conX}`;
}
console.log(hacerAlgo('una cosa'));

function makeMeCoffee(coffeeName) {
  return `Aquí tiene su ${coffeeName}, que lo disfrute`;
}
console.log(makeMeCoffee('capuccino'));

//TODO: 1. Multiplicación, Media y Pares
function mult(a, b) {
  return a * b;
}
console.log(mult(4, 3));

function med(a, b, c, d) {
  const sum = a + b + c + d;
  return sum / 4;
}
console.log(med(2, 6, 10, 5));

function pair(a) {
  if (a % 2 === 0) {
    return 'par';
  } else {
    return 'impar';
  }
}
console.log(pair(4));
console.log(pair(7));

// TODO:2. Ticket con IVA
function ivaCalc(a) {
  const iva = a * 0.21;
  const total = a + iva;
  const result = `Precio sin IVA: ${a}, IVA: ${iva} y Total: ${total}`;
  return result;
}
console.log(ivaCalc(80));

//TODO: Para no escribir tanto "document.querySelector()" crea una función llamada "getEl" que reciba por parámetro un selector de css y retorne el elemento de HTML correspondiente. Da console.error si no existe el selector.

function getEl(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  } else {
    return element;
  }
}
const titleEl = getEl('.title');
const subEl = getEl('.subtitle');
const parEl = getEl('.par');
//!este es el que tiene que mostrar error en consola:
const navEl = getEl('.nav');

console.log(titleEl);
console.log(subEl);
console.log(parEl);

//TODO:Combinar dos funciones(getEl y pair):

const numEl = getEl('.num');
console.log(numEl);

const numVal = numEl.innerHTML;
console.log(numVal);
console.log(typeof numVal);

const num = Number(numVal);
console.log(typeof num);

console.log(pair(num));

// TODO:Manejadoras 1: Contador. Crea una página web con un botón y un contador que se incremente cada vez que hagas clic en el botón.
const btnCounterEl = getEl('.js-counter-btn');
const counterEl = getEl('.js-counter-screen');
let number = 0;

function counterClick() {
  number += 1;
  counterEl.innerHTML = number;
}

btnCounterEl.addEventListener('click', counterClick);

// TODO:Manejadoras 2: Crea un botón que, al hacer clic en él, cambie el color de fondo de la página aleatoriamente. Utiliza constantes con colores y la función Math.random() para elegir una.
const btnColor = getEl('.js-color-btn');
const body = getEl('.js-body');
const color1 = 1;
const color2 = 2;
const color3 = 3;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function handleClickColor() {
  let color = getRandomIntInclusive(1, 3);
  console.log(color);
  if (color === color1) {
  body.classList.add('backColor1');
  body.classList.remove('backColor2');
  body.classList.remove('backColor3');
  } else if (color === color2) {
  body.classList.add('backColor2');
  body.classList.remove('backColor1');
  body.classList.remove('backColor3');  
  } else {
    body.classList.add('backColor3');
    body.classList.remove('backColor2');
    body.classList.remove('backColor1');
  }
}
btnColor.addEventListener('click', handleClickColor);

//*target y current target
function handleClick(event) {
  console.log(event.target);
  console.log(event.currentTarget);
      //!las dos loguearán lo mismo si se clickea en la sección, pero cosas distintas en cada botón
}
body.addEventListener('click', handleClick);
