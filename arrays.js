const numbers =[3, 4];
//Adding elements
//End
numbers.push(5, 6);

//Beggining
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

//Finding elements

const number = [1, 2, 3, -1, 4];

console.log(number.indexOf(1, 2));
console.log(number.lastIndexOf(1));
console.log(number.includes(1));

// const courses = [
//     {id:1, name: 'a'},
//     {id:2, name: 'b'},
// ];

// const course = courses.find(function(course) {
//     return course.name === 'a';
// })
// console.log(course);

//Arrow functions

const courses = [
    {id:1, name: 'a'},
    {id:2, name: 'b'},
];

const course = courses.find(course => course.name === 'a');
console.log(course);

//Removing elements

const num = [1, 2, 3, 4];

//End
const end = num.pop();

//Beginning
const beginning = num.shift();

//Middle
numbers.splice(2, 1);
console.log(num);

//Empty an Array

let newNumbers = [1, 2, 3, 4]

newNumbers = [];
//newNumbersnumber.lenght = 0;
//newNumbers.splice(0, newNumbers.lenght);
// while (newNumbers.length >0)
// newNumbers.pop();

console.log(newNumbers);

// Combining and Slicing // Spread

const first =[1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);
const combined = [...first, ...second];

const slice = combined.slice(2,4);

console.log (combined);
console.log(slice);

//Iterating

const another = [1, 2, 3];

for (let number of numbers)
console.log(number);

numbers.forEach(number => console.log(number));

//Joining

const joined = another.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combinedMessage = parts.join('-');
console.log(combinedMessage);

//Sorting

const sorted = [2, 3, 1];
sorted.sort();
console.log(sorted);
sorted.reverse();
console.log(sorted);

const otherCourses =[
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'},
];

courses.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(otherCourses);

//Testing the Elements
//const number = [1, 2, 3, -1, 4];
const allPositive = number.every(function (value) {
    return value >=0;
});
console.log(allPositive)

const atLeastOnePositive = number.some(function (value) {
    return value >=0;
});
console.log(atLeastOnePositive)

//Filtering

const filtered = number.filter(value => value >=0); 
console.log(filtered);

//Mapping

const items = filtered.map(n => {
    const obj = {value: n};
    return obj
});

console.log (items);

//Reducing

let sum = 0;
for (let n of number)
    sum = sum + n;

console.log(sum);

const total = number.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(total);