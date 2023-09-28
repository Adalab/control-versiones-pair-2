'use strict';
// TODO 1. Numeritos
// Crea una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.
get100Numbers(){
    
}
// Crea una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.
// TODO 2. The numbers
const lostNumbers = [4, 8, 15, 16, 23, 42];
// Vamos a crear una función bestLostNomber que nos devuelve algunos números del array de los números de la serie Lost que tenemos arriba. La función, debe seguir estos pasos:
// Crear un nuevo array que contiene solo los números pares que hay en lostNumbers. Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.
// Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.
// Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.
// Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.
// TODO 3. Mi lista de tareas
// Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:
// Mostrar una frase que indique cuántas tareas hay.
// Pintar todas las tareas en pantalla.
// Tachar las ya realizadas.
// Permitir marcar una tarea como 'completa' o 'incompleta'.
// Vamos a partir de este array de datos en nuestro fichero JavaScript:
const tasks = [
  {name: 'Recoger setas en el campo', completed: true},
  {name: 'Comprar pilas', completed: true},
  {name: 'Poner una lavadora de blancos', completed: true},
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];
// Veamos cómo afrontar un ejercicio de este tipo, dónde tenemos que unir muchos de los conceptos aprendidos hasta ahora, la organización es clave:
// a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.
// b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.
// c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
// la tarea debe mostrarse como completada (tachada)
// debemos modificar su estado (propiedad completed) en el array tasks.
// d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberíamos actualizar esta información.

//TODO Ejercicio de promociones
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
  