// Desustructuracion ( Destructuring assigment)

/*
Es una epxresion de JS que permite desempacar valores de arreglos o propiedades de objetos en distintas variables

 La desestructuración hace el código más limpio
 y legible al permitir extraer solo la información
 necesaria.

*/

let a = 10;
let b = 20;

// Pasar el valor de -> 
[a,b] = [b,a];

console.log(`a: ${a}, b:${b}`);

// ----------------------
const myArray = ["azul","rojo","verde","morado"];

// guardar en la varible colorA y colorB, el índice 0 y 2
// const colorA = myArray[0];
// const colorB = myArray[2];
const [ colorA,     ,colorB] = myArray;
console.log(`colorA: ${ colorA}, colorB: ${colorB}`); // azul, verde


// Desestructurando un objeto 

const myObj = {
    name: "Sergio",
    lastname: "Torres",
    age: 39,
}

// Asigna a una variable name y lastname el valor de las propiedades del objeto myObj

/*
const myName = myObj.name;
const lastname = myObj.lastname;

console.log(`${myName}`, ${lastname})
*/


const {name: myName,lastname} = myObj;

console.log(`${myName} ${lastname}`); // para desestructurar un objeto, las nuevas variables deben tener el mismo nombre, no importa que solo quieras una o quieras todas pero que lleven el mismo nombre que los atributos del objeto


//-------------------------------------------
const prop = {
    title:"Pokemon",
    src: "https://ca0b.jpg" ,
    href:"https://pokemon_Wiki",         
    description:'Toma la "pokebola"',
    type:"animal"
 }

 // Usado la desestructuración, imprimir e consola
 // El "title" es "description".

const {title, description} = prop;
console.log(`el titulo es: ${title} y dice: ${description}`);


valoresSinDesestructuracion( prop );
valoresDesestructurados( prop );

function valoresSinDesestructuracion( myObj ){
    console.log(`La url de ${myObj.title} es ${myObj.src}`);
}

function valoresDesestructurados( {title, src} ){
    console.log(`La url de ${title} es ${src}`);
}


// ---------------  

const myStyle = {
    virtual: {
        color:"green",
        fontSize: 18, // por default son pixeles
        fontFamily: "Arial"
    } ,
    real: {
        color:"purple",
        fontSize: 20,
        fontFamily: "Georgia"
    }
 };

 // crear una function que lea el color y fontSize 
 // del objeto "virtual"

// "Para los obejtos virtuales el color es green y tamaño 18"

 const mostrarColorTamanio = ({ virtual: {color, fontSize} }) => {
    console.log(`Para los objetos virtuales el color es ${color} y tamaño ${fontSize}`);
  }
  
  mostrarColorTamanio(myStyle);