'use stric';
const numbers=[1,2,3];
const list= document.querySelector('.js-list');

for (const item of numbers) {
    const newItem = document.createElement('li');
    const newContent = document.createTextNode('pepinillos');
    newItem.appendChild(newContent);
    const items = document.querySelector('.items');
    items.appendChild(newItem);
  }