//Variables naming rules:
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain space or "-"
// Are case-sensitive

let firstName= 'David';
let lastName = 'Grigore';

//Constants

const interestRate = 0.3;
console.log(interestRate);

//Primitive Types

//let name ='David'; //String Literal
//let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let middleName = undefined;
let test = null;

// Objects

let person = {
    name: 'David',
    age: 30
};

//Dot Notation
person.name = 'John';

//Bracket Notation
person['name'] = 'Mary'

console.log(person.name);

//Arrays

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;

console.log(selectedColors);

//Functions

//Performing a task
function greet(nume, lastNume) {
    console.log('Hello ' + nume + ' ' + lastNume);
}

greet('John', 'Smith');
greet('Mary');

//Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));