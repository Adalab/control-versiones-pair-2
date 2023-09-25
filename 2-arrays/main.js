'use strict';
const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// TÚ CÓDIGO AQUÍ

// promos es un array de tres objetos
// * promos [0,1,2]
    // cada objeto tiene tres claves: dos strings (promo y name) y un array (students)
    // * promos [x]{0promo, 1name, 2students[]}
        //cada array students tiene tres objetos(aunque podría ser otra cantidad)
        // * students[0,1,2] o sudents [length]
            // cada objeto tiene tres claves: dos strings (id y name) y un número (age)
            // * students[x]{0id, 1name, 2age}
            
const result= document.querySelector('.js-result');
result.innerHTML='<ul class="js-proms"></ul>';
const proms= document.querySelector('.js-proms');

function renderItem(){
  for (let i = 0; i < promos.length; i++) {
      proms.innerHTML+= `<li>${promos[i].name}</li>`;
    }
}
renderItem();


