let hour = 10;

// IF
if (hour >= 6 && hour <12) {
    console.log('Good morning');
}
else if (hour >=12 && hour < 18) {
    console.log('Good afternoon');
}
else {
    console.log('Good evening');
}

// Switch
let role = 'guest';

switch(role) {
    case 'guest':
        console.log('Guest user');
        break;
    
        case 'moderator':
        console.log('Moderator user');
        break;

    default:
        console.log('Unknown user');
}

//For
for (let i =0; i < 5; i++){
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//While
// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }

//Do While
// let i = 0;
// do {
//     if (i % 2 !== 0) {
//                 console.log(i);
//             }
//             i++;
// } while (i <=5);

//For In
const person ={
    name: 'David',
    age: 30
};
for(let key in person)
console.log(key, person[key]);

//For Of
const colors =['red', 'green', 'blue'];
for (let color of colors)
console.log(color);

//Break and Continue
let i = 0;
while (i <= 10) {
    // if (i === 5) break;
    if(i % 2 === 0) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}

//Max of two numbers
let number = maximum(10, 5)
console.log(number)
function maximum(a, b){
    // if (a > b) {
    //     return a
    // }
    // else{
    //     return b
    // }
    return (a > b) ? a : b;
}

//Landscape or Portrait
console.log(isLandscape(500, 600))
function isLandscape(width, height) {
    return (width > height);
}

//FizzBuzz
const output = fizzBuzz(15);
console.log(output);
function fizzBuzz(input) {
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    if(typeof input !== 'number')
        return NaN;
    return input;
}

//Demerit Points

checkSpeed(75);
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

if (speed < speedLimit + kmPerPoint)
    console.log('Ok');
else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
    console.log('License suspended');
    else
    console.log('Points', points);
}
}

//Even and Odd Numbers
showNumbers(10);

function showNumbers(limit){
    let number = '';
    for(let i = 0; i <= limit; i++){
        if (i % 2 === 0){
            number = 'EVEN'
        }
        else {
            number = 'ODD'
        }
        console.log(i, number);

        //const message = (i % 2 ===0) ? 'EVEN' : 'ODD'
        //console.log(i, message)
    }

}

//Count Truthy
const array = [0, null, 1, 2]

console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
        count++
        return count;
}

//String Properties
const movie = {
    title: 'a',
    releasYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj) {
    for(let property in obj){
        if (typeof obj[property] === 'string')
            console.log(property, obj[property]);
    }
}

//Sum of Multiples 3 and 5

console.log(sum(10));

function sum(limit) {
    let sum = 0;
    for (let i=0; i<=limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)){
            sum += i;
        }
    }
    return sum;
    }

// Grade

const marks = [50, 70, 90];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sum = 0;
        for (let mark of marks)
            sum += mark;
        let average = sum / marks.length;

    if (average <60) return 'F';
    if (average <70) return 'D';
    if (average <80) return 'C';
    if (average <90) return 'B';
    return 'A';
}

function calculateAverage(array){
    
}

//Stars

showStars(10);

function showStars(rows) {
    for(let row=1; row<=rows; row++){
        let pattern = '';
        for(let i =0; i < row; i++)
            pattern += '*';
            console.log(pattern)
    }
}

//Prime Numbers

showPrimes (20);

// function showPrimes(limit) {
//      for (let number = 2; number<= limit; number++){
//         let isPrime = true;
//         for (let factor = 2; factor < number; factor ++){
//             if (number % factor === 0){
//             isPrime = false;
//             break;
//         }
//         }
//         if (isPrime) console.log(number);
//     }
// }

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0 )
            return false;
    return true;
}