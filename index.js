/* 
Instrucciones:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
    - Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
    - Debe imprimir el resultado por consola o por el DOM.
    - Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
    - Prueba tu programa con las siguientes combinaciones para asegurarte que funcione correctamente:
Entrada: 3
Salida: 0, 1, 1.

Entrada: 10
Salida: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Pruébalo con los números que se te ocurran.
*/

// Bienvenida al usuario
const prompt = require('prompt-sync')();
console.log("Serie de Fibonacci");
console.log("Bienvenido al programa de Serie de Fibonacci");
let numero;

// Validar entrada de número:
do {
    numero = prompt("Ingresa la cantidad de números de la Serie de Fibonacci quieres mostrar: ");
    if (isNaN(numero)) {
        console.log("Error: Debes ingresar un número.");
    } else if (numero <= 0) {
        console.log("Error: Debes ingresar un número mayor a 0.");
    }
} while (isNaN(numero) || numero <= 0);
parseInt(numero); // Parseamos a entero el dato ingresado

fibonacciArray = calcularFibonacci(numero) // Llamamos a la función que calcula la serie de fibonacci y retornamos su valor completo (array)
console.log(fibonacciArray); // Imprimimos por consola el array en cuestión

// #####################################################################################################################################
// Función para calcular serie de Fibonacci:
function calcularFibonacci(numero) {
    let f1 = 0;
    let f2 = 1;
    let fn;
    
    // Inicializamos el array con los dos primeros valores de la serie
    let fiboArray = [f1, f2]; 

    // Comenzamos desde 2, porque ya tenemos los dos primeros valores (0 y 1)
    for (let i = 2; i < numero; i++) {
        // Calculamos el siguiente número de la serie
        fn = f1 + f2;
        // Actualizamos los valores
        f1 = f2;
        f2 = fn;
        fiboArray.push(fn); // anadimos al array
    }
    // Retornamos el array completo
    return fiboArray;
}

