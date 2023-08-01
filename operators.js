let x =10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y); //exponentials

// Increment (++)
// console.log(x++);
// console.log(x);

// Decrement
console.log(x--)
console.log(x)

// Assignment operator
x = x + 5;
x += 5;

x = x * 3;
x *= 3;

//Comparison operator
console.log(x > 0);
console.log(x >= 0);
console.log (x === 1); // strict equality (same type + value)
console.log (x !== 1);
console.log ('1' == 1); // lose equality (converts what's on the left to the type of the right)

//Ternary operator (conditional)
// if a customer has more than 100 points, he is a gold customer
let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

//Logical operators AND-> "&&"" / OR-> "||"" / NOT-> "!" 

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore // AND
console.log(eligibleForLoan)

//Falsy -> undefined / null / 0 / false / '' // NaN(not a number)
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor)

// Exercise - Swapping Variables

let a = 'red';
let b = 'blue';
let c = '';
c = a;
a = b;
b = c;

console.log(a);
console.log(b);
