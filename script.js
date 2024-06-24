// Hoisting
// var myCity;

// hoisting es un proceso en JS que ocurre antes de que se ejecute todo el código.
// JS busca todas las variables creadas con var, las sube al inicio del código sin su valor primitivo.
// JS busca todas las funciones creadas como funcion de declaración, las sube al inicio del código con su referencia correcta y logica de ejecución


// ejemplo con let
// console.log(myName) // ReferenceError: Cannot access 'myName' before initialization

let myName = "Jorge";
console.log(myName)

// let myName; // SyntaxError: Identifier 'myName' has already been declared


// ejemplo con var (ocurre hoisting)
console.log(myCity) // undefined => ver hoisting arriba

var myCity = "barcelona"
console.log(myCity)

var myCity = "madrid"
console.log(myCity)


// hoisting en funciones (aplica para funciones creadas con declaración)

console.log( myFunction() ) // se ejecuta correctamente => ver hoisting arriba

function myFunction() {
  return "Hola"
}

console.log( myFunction() )


// tener en cuenta que JS nos permite reescribir funciones con está syntaxis. Esto reemplaza cualquier funcion anterior y su ejecución
function myFunction() {
  return "Adios"
}


// con funciones de flecha usamos palabras let/const

// console.log( funcionDeFlecha() ) // ReferenceError: Cannot access 'funcionDeFlecha' before initialization


const funcionDeFlecha = () => {
  return "funcion de flecha con const/let"
}

console.log( funcionDeFlecha() )

// const funcionDeFlecha = () => {
//   return "funcion de flecha con const/let"
// }


// SCOPE => segmentos de código donde escribimos JS


// SCOPE GLOBAL => todo lo que escribimos en la JS

let oneString = "patata"; // es creado en el scope global => accesible en CUALQUIER lugar de mi código

function someFunction() {
  if (true) {
    for (let i = 0; i < 10; i++) {
      console.log(oneString)
    }
  }
}

someFunction()



// SCOPE DE BLOQUE => cada vez que escribimos {} para condicionales, bucles, etc
if (true) {
  // JS usa este segmento para crear variables que se usarán solo dentro del bloque.
  let stringEnBloque = "Variable creada con let";
  var stringEnBloque2 = "Variable creada con var";
  stringEnBloque3 = "Variable creada sin palabra reservada"; // siempre en el scope global
  
}
// console.log(stringEnBloque1) // error
console.log(stringEnBloque2)
console.log(stringEnBloque3)
  
  

// SCOPE DE FUNCIONES

function unaFuncion() {

  let stringEnFuncion1 = "Variable creada con let";
  var stringEnFuncion2 = "Variable creada con var";
  stringEnFuncion3 = "Variable creada sin palabra reservada"; // siempre en el scope global
  
}
  
unaFuncion()

// console.log(stringEnFuncion1) // error
// console.log(stringEnFuncion2) // error
console.log(stringEnFuncion3) 


// en conclusión:

/* 
- No usar var. Siempre reemplazar en nuestro código con let o const
- Si creamos funciones de declaración (funcion) considerar hoisting a la hora de invocarlas.
- Siempre declarar nuestras variables (let o const)
- Estos conceptos con complejos, estudiarlo al prepararnos para entrevistas tecnicas.

*/

// Activity 4
const a = { num: 42 };
const b = a; // misma referencia

console.log(a === b) // es la misma referencia, si modifico uno modifico el otro

b.num = 90;

console.log(a);


// Activity 5
function magicHat(obj) {
  // let obj = rabbit1 // asigna misma ref 1234
  obj.age = 10;
  obj = { name: "Ada", age: 20 }; // ref 5678
  return obj;
}

const rabbit1 = { name: "Bob", age: 30 }; // ref 1234
  
const rabbit2 = magicHat(rabbit1);
  
console.log("rabbit1: ", rabbit1); // { name: "Bob", age: 10 }
console.log("rabbit2: ", rabbit2); // { name: "Ada", age: 20 }



let obj1 = {fruit: "tomate"}; // ref abcd
let obj2 = obj1 // ref abcd
obj2.fruit = "banana" // ref abcd
console.log(obj1)
console.log(obj2)

obj1 = {name: "bob"} // ref xyzw
console.log(obj1)
console.log(obj2)



function sum (num1, num2) {
  let sumNums = num1 + num2
  return sumNums
}
let total = sum(2, 10)


let string = "patata";
let subString = string.slice(2)



// OOP (methods)


const person = {

  name: "alicia",
  place: "Pais de las Maravillas",
  friends: ["Sombrerero", "Gato Chesire", "Liebre de Marzo", "Humpty Dumpty", "Conejo Blanco"],
  saludar(alguien) {
    // console.log( this ) // this en objetos apunta siempre al objeto donde se utiliza esta palabra
    // return `Hola, mi nombre es ${person.name}`
    return `Hola ${alguien}, mi nombre es ${this.name} y soy de ${this.place}`
  },
  randomSize() {
    // 50% => return `Alice es pequeña`;
    // 50% => return `Alice es grande`;
    const randomValue = Math.random() // 0 - 0.99999999
    // console.log(randomValue)
    if (randomValue < 0.5) {
      return `${this.name} es pequeña`;
    } else {
      return `${this.name} es grande`;
    }
  },
  desearFelizNoCumpleaños() {
    // return `Feliz feliz no cumpleaños a {UN AMIGO ALEATORIO DE ALICE}`
    const randomValue = Math.random() // 0 - 0.9999999
    const randomIndex = randomValue * this.friends.length // 0. 4.999999
    const randomIndexInt = Math.floor(randomIndex) // 0, 1, 2, 3, 4
    console.log(randomIndexInt)

    return `Feliz feliz no cumpleaños a ${this.friends[randomIndexInt]}`

  }

}

// ejemplo de si la variable "person" se pierde
// const person2 = person
// person = undefined


// metodos son funciones conectadas a un objeto especifico que realiza esa acción

console.log( person.name )
console.log( person.place)

console.log( person.saludar("bob") )

person.name = "Alice";
console.log(person.name)
console.log( person.saludar("patricio") )

console.log( person.randomSize() )

console.log( person.desearFelizNoCumpleaños() )



// Classes => SON PLANTILLAS/PLANOS para fabricar objetos
// nombre de la clase siempre en PascalCasing
// constructor es donde declaramos las propiedades que tendran nuestros objetos

class Hero {

  constructor(nameParam, identity) {
    // declaradas todas las propiedades
    this.name = nameParam;
    this.secretIdentity = identity;
    this.isEvil = false; // propiedad predeterminada (será igual en todos los objetos creados)
  }

  // declarados todos los metodos
  revealSecretIdentity() {
    // desde los metodos no podemos acceder a los parametros, pero si a las propiedades
    return `Soy ${this.name}, y mi identidad secreta es ${this.secretIdentity} `
  }

  turnEvil() {
    // podemos cambiar valores de las propiedades
    this.isEvil = true;
    return `soy ${this.name} y me he convertido en villano, MUAHAHAHA!`
  }

}

// como fabricamos objetos de esas plantillas (clases)

let hero1 = new Hero("Iron Man", "Tony Stark") // crea un objeto basado en la clase Hero y almacenalo en la variable hero1
let hero2 = new Hero("Black Widow", "Natasha Romanoff")

console.log(hero1)
console.log(hero2)

console.log(hero1.revealSecretIdentity())
console.log(hero2.revealSecretIdentity())

console.log(hero1.turnEvil())
console.log(hero1)

// hero1.isEvil = false;


// subclases
// extends nos permite definir que usa clase será de subclase de otra (va a heredar todas las propiedades y metodos de la clase padre)

class SuperHero extends Hero {

  constructor(name, identity, superPower) {
    super(name, identity) // un metodo en clases que permite pasar todos los parametros de la subclase a la clase padre
    
    // agrego propiedades unicas de SuperHero
    this.superPower = superPower

  }

  // .TODOS los metodos de la clase padre son automaticamente heredados
  // metodos exclusivos de SuperHero

  useSuperPower() {
    return `${this.name} usa el poder de ${this.superPower}`
  }


}


const superhero1 = new SuperHero("Spiderman", "Peter Parker", "Lanzar telarañas")
console.log(superhero1.useSuperPower())