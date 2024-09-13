//Create a variable named firstFavNumb and store your favorite number
let firstFavNumb = 20;
//Create a variable named secondFavNumb and store your second favorite number
let secondFavNumb = 18;

//COMPARISON //

//Greater Than
console.log(firstFavNumb > secondFavNumb); //false
//Less Than
console.log(firstFavNumb < secondFavNumb); //true

// RELATIONAL //

//Greater Than or Equal to
console.log(firstFavNumb >= secondFavNumb); //false
//Less Than or Equal to
console.log(firstFavNumb <= secondFavNumb); //true
//Strict Equality (===)
console.log(firstFavNumb === secondFavNumb); //false
//Loose Equality (==)
console.log(firstFavNumb == secondFavNumb); //false
//Strict Inequality (!==)
console.log(firstFavNumb !== secondFavNumb); //true
//Loose Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true

 // LOGICAL OPERATORS //

 //AND
let x = 20;
let y = 18;
let z = 37;

 console.log(x < y && y < z); //true
 console.log(x > y && y > z); //false

//OR
let a = “bad";
let b = "good";
let c = "bad";

console.log(a === b || a === c); //true
console.log(a === b || b === c); //false

//NOT
let isLight = true;
let isDark = false;

console.log(!isGood); //false
console.log(!isBad); //true

console.log(!isGoog&& isBad); //false
console.log(isGooh&& !isBad); //true
console.log(isGood || isBad); //true
console.log(!isGood || isBad); //false
console.log(isGood == isBad); //false
console.log(isGood == !isBas); //true
