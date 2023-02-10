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

console.log(sortNames(names));