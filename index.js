// js1   ******************************************************************

function multi(param1,param2) {
    return param1*param2;
}
console.log(multi(7,53812212));

// js2   ******************************************************************

// Your code goes here:
const renderPerson = (name, date, eyeColor, age, sex) => { 

    return `${name} is a ${age} years old ${sex} born in ${date} with ${eyeColor} eyes`; 
    //return name + "is a" + age + "years old" + sex + "born in" + date +  "with" + eyeColor + "eyes";

} 


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));

  // js3  ******************************************************************

  var names = ['John', 'Kenny', 'Tom', "Bob", 'Dilan'];

function sortNames(arr){
    return arr.sort()
}

// otra forma de hacerlo , me gusta mas esta
/* function sortNames(){
    return name.sort()
}*/

//  js4  ******************************************************************

const rapid = (myString) => {
    let consonants = [];
    for(let letter of myString){
        if(['a','e','i','o','u'].includes(letter) == false)
            consonants.push(letter.toUpperCase())
    }
    return consonants.join('');
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));

console.log(sortNames(names));

//  js5  ******************************************************************

let age = prompt('What is your age?')

// Your code below:

var result = parseInt(age) + 10;

console.log(result);
//console.log(parseInt(age) + 10)


const num1 = 5;

const num2 = 6;

console.log(num1 * num2)

//  js6  ******************************************************************

function isOdd(myNumber)
{
	return !(myNumber % 2 == 0);
}

// Your code below:
console.log(isOdd(45345))

//  js7  ******************************************************************

// Add your code here
const generateRandom = () => {
    return Math.floor(Math.random() * 10)+1;
}

console.log(generateRandom())

//  js8  ******************************************************************