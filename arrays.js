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

// Array from Range

const nnumbers = arrayFromRange (-10, -4);

console.log(nnumbers);

function arrayFromRange(min, max) {
    const outoput = [];
    for (let i = min; i <= max; i++)
    outoput.push(i);
    return outoput;
}

//Includes

const secondNumbers = [1, 2, 3, 4];

console.log(secondNumbers.includes(1));

function includes (otherNumbers, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

//Except

const thirdNumbers = [1, 2, 3, 4, 1, 1];

const output = except (thirdNumbers, [1, 2]);

console.log(output);

function except (array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}

//Moving an Element

const forthNumbers = [1, 2, 3, 4];

const forthOutput = move(forthNumbers, 0, 1);

console.log(forthOutput);

function move (array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}

//Count Occurences

const fifthNumbers = [1, 2, 3, 4, 1];

const count = countOccurences(fifthNumbers, 1);

console.log(count);

function countOccurences(array, searchElement) {
    // let count = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         count++;
    // return count;

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0)
}

//Get Max

const sixthNumbers = [1, 2, 3, 4];

const max = getMax([1, 2, 2, 1, 3]);

console.log(max);

function getMax(array) {
    if (array.length === 0)
        return undefined;
    // let max = array[0];
    // for (let i = 1; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i];
    // return max;

    return array.reduce((a, b) => (a>b) ? a : b);
    }

//Movies

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

//All movies in 2018 with rating > 4
//Sort them by their rating
//Descending order
// Pick their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating >=4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

    console.log(titles);