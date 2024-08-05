
/////      COMANDO PARA VER EN CONSOLA SI LA FUNCION SE EJECUTA BIEN      /////
// $ node JSChallenges.js

// Programming Test - 4Geeks Academy

// Hint: You can use “mod” or “%” for calculating if a number is divisible (a multiple) by 3 or 5. 
// For example: Is 15 a multiple of 3? 
// if(15 % 3 == 0) //will be true if its multiple of 3


// Exercise #1
// Write a program that sums all the numbers divisible by 3 or 5 below 1000. For example: All the numbers divisible by 3 or 5 below 10 are: 3,5,6,9 and their sum is 23.
// Si listamos todos los números por debajo del 10 que son múltiplos de 3 o 5 obtenemos: 3, 5, 6 y 9. La suma de estos múltiplos es 23. Realice un algoritmo para encontrar la suma de todos los múltiplos de 3 o 5 por debajo de 1000.


// 💻 Your solution here (no googling, we don’t care about syntax errors, just logic):



// let sum = 0;
// for (i = 0; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum)

// let sum = 0;
// for (i = 0; i < 1000; i++) {
//     if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
//         sum = sum + i;

//     }
// }
// console.log(sum)




// Exercise #2 Fizz buzz
// Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Tic" instead of the number and for the multiples of '5' print "Toc", if the number is multiple of 3 and 5 then print “TicToc”.
// Escriba una rutina que imprima los números del 1 al 100 pero: cuando el número sea múltiplo de 3, imprima “Tic”, en lugar del número. Cuando el número sea múltiplo de 5, imprima “Toc”, en lugar del número. Cuando el número sea múltiplo tanto de 3 como de 5, imprima “TicToc”, en lugar del número.


// Example Output:



// 1
// 2
// Tic
// 4
// Toc
// .
// .
// .
// 14
// TicToc




// 💻 Your solution here (no googling, we don’t care about syntax errors, just logic):

// sin crearle function

for (let i = 1; i < 101; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('TicToc');
    } else if (i % 3 === 0) {
        console.log('Tic');
    } else if (i % 5 === 0) {
        console.log('Toc');
    } else {
        console.log(i)
    }
}
// function fizzBuzz () {
// for (let i = 1; i < 101; i++) {
    
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('TicToc');
//     } else if (i % 3 === 0) {
//         console.log('Tic');
//     } else if (i % 5 === 0) {
//         console.log('Toc');
//     } else {
//         console.log(i)
//     }
// }
// }
// fizzBuzz()
 







// Exercise #3
// Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he’s not…

// Friend = [“Ryan”, “Kieran”, “Mark”, “Miguel”]  shouldBe [“Ryan”, “Mark”]
// Haga un programa que filtre el arreglo y devuelva un arreglo con solo el nombre de sus amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es amigo tuyo! De lo contrario, puede estar seguro de que no…

// Amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]  Deberia [“Ryan”, “Mark”]


// 💻 Your solution here (no googling, we don’t care about syntax errors, just logic):











// Exercise #4
// Write a function called sumDigits that returns the sum of all the digits in a given number.
// For example:
// 5646 => 5+6+4+6 => 21
// Escribe una función llamada sumaDigitos que retorne la suma de todos los dígitos de un número dado, por ejemplo:
// 5646 => 5+6+4+6 => 21


// 💻 Your solution here (no googling, we don’t care about syntax errors, just logic):



