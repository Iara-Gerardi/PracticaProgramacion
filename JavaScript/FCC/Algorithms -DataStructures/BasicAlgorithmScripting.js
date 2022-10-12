// Reverse a String

function reverseString(str) {
    str = str.split("").reverse();
    str = str.join("");
    return str;
}

/*El metodo .split() convierte strings en array basandose en lo que escribis adentro de los parentesis. 
En este caso, como recibe un string vacio, convierte a cada caracter del string en un index, pero podes dividir el string
segun donde hay espacios, puntos, etc.
El metodo .join() hace lo opuesto.*/

// Return Largest Numbers in Arrays

for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
            largestNumber = arr[i][j];
        }
    }
}

// Una sugerencia que te da freecodecamp es usar loops for adentro de loop fors, pero eso es una mala practica.

function largestOfFour(arr) {
    return arr.map(function (group) {
        return group.reduce(function (prev, current) {
            return current > prev ? current : prev;
        });
    });
}

// La segunda solucion es mapear el array y ejecutar por cada indice una funcion que devuelve el valor mas alto del array.

// La ultima opcion era mapear el array y,,, hacer cosas.

function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

// El metodo .apply llama a una funcion con un determinado "this value" y con un array de argumentos.

// https://devdocs.io/javascript/global_objects/function/bind
// https://devdocs.io/javascript/global_objects/function/apply
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

// Confirm the Ending

function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
}

// El metodo substr es como .slice(), tambien existe un metodo .endsWith().