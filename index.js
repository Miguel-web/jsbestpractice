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

//your code here
//const selectTheTitle = document.querySelector('#theTitle');
//alert(selectTheTitle.id)

const selectTheTitle = document.getElementById("theTitle")
alert(selectTheTitle.id)


//  js9  ******************************************************************

//Declare your function here
const input = document.querySelector('input');

input.addEventListener("click", () => {
    console.log(input.id)
});

/*
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<title>4Geeks Academy</title>
	</head>
	<body>
		<input id="hello" type="button" value="Press to show 'Hello world'" />
		<script src="index.js"></script>
	</body>
</html>

*/

//  js10  ******************************************************************

let mydiv = document.querySelector("#myDiv");

mydiv.style.background = "yellow"

//let mydiv = document.getElementById('myDiv');

//mydiv.style.background = "yellow"

//  js11  ******************************************************************

let aux = document.querySelector("#wulu");
//your code here
aux.style.float = 'right'

//  js12  ******************************************************************

// Your code here
const elemH1 = document.createElement("p");

elemH1.style.background = "yellow";

elemH1.innerHTML = "Hello World";

document.body.appendChild(elemH1);

//  js13  ******************************************************************

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	const elemDiv = document.createElement("div");

elemDiv.style.background = "yellow";

elemDiv.innerHTML = "Hello World";

document.body.appendChild(elemDiv);
});

//  js14  ******************************************************************

var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Iniciar máquina') {
    btn.textContent = 'Detener máquina';
    txt.textContent = 'La máquina se inició!';
  } else {
    btn.textContent = 'Iniciar máquina';
    txt.textContent = 'La máquina se detuvo.';
  }
}

// falta el html y css

//  js15  ******************************************************************

// HTML del condicional   *****************
/*
<label for="clima">Seleccione el tipo de clima de hoy: </label>
<select id="clima">
  <option value="">--Haga una elección--</option>
  <option value="soleado">Soleado</option>
  <option value="lluvioso">Lluvioso</option>
  <option value="nevando">Nevando</option>
  <option value="nublado">Nublado</option>
</select>

<p></p>
*/

let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerClima);

function establecerClima() {
  let eleccion = seleccionar.value;

  if (eleccion === 'soleado') {
    parrafo.textContent = 'El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.';
  } else if (eleccion === 'lluvioso') {
    parrafo.textContent = 'Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.';
  } else if (eleccion === 'nevando') {
    parrafo.textContent = 'Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.';
  } else if (eleccion === 'nublado') {
    parrafo.textContent = 'No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.';
  } else {
    parrafo.textContent = '';
  }
}

//  js16  ******************************************************************

if (elección === 'soleado') {
    if (temperatura < 86) {S
      parrafo.textContent = 'Está a ' + temperatura + ' grados afuera — agradable y soleado. Vamos a la playa, o al parque, y comer helado.';
    } else if (temperatura >= 86) {
      parrafo.textContent = 'Está a ' + temperatura + ' grados afuera — ¡QUÉ CALOR! Si deseas salir, asegúrate de aplicarte bloqueador solar.';
    }
  }
  
  //  js17  ******************************************************************

  /*<!DOCTYPE html>
  <html>
  <body>
  
  <h2>JavaScript For Loop</h2>
  
  <p id="demo"></p>
  
  <script>
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let i, len, text;
  for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += "the car is" + "" + cars[i] + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
  </script>
  
  </body>
  </html>*/

  //  js18  ******************************************************************

