// Function Declaration (can be called before it's declared)

walk();
function walk() {
    console.log ('walk');
}

// Function Expression (can NOT be called before it's decalred)
let run = function() {
    console.log('run');
};
let move = run
run();
move();

//Arguments

// function sum() {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

console.log(sum(1, 2, 3, 4, 5));

//Rest

function sum(discount, ...prices) {
        const total = prices.reduce((a,b) => a + b);
        return total * (1 - discount);
    }

    console.log(sum(0.1, 20, 30, 1));

//Default Parameters

function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000));

//Getters and Setters

// const person = {
//     firstName: 'David',
//     lastName: 'Grigore',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//        const parts = value.split(' ');
//        this.firstName = parts[0];
//        this.lastName = parts[1];
//     }
// };

// person.fullName = 'John Smith';

// console.log(person);

//Try and Catch

// const person = {
//     firstName: 'David',
//     lastName: 'Grigore',
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string');
//        const parts = value.split(' ');
//        if (parts.lenght !==2)
//         throw new Error ('Enter a first and last name')
//        this.firstName = parts[0];
//        this.lastName = parts[1];
//     }
// };

// try {
// person.fullName = 'John Smith';
// }
// catch(e) {
//     alert(e);
// }

// console.log(person);

//Local and Global Scope

const color = 'red'
function scope () {
const message = 'hi';
const color = 'blue';
console.log(color);

function stop (){
    const message = 'bye';
}
}

scope();

//Let vs. Var
//var => function scoped variables
// let, const => block-scoped variables

function start () {
    for (let i = 0; i<5; i++) {
        console.log(i);
    }
}

start();

//This

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }, this);
//     }
// };

// video.showTags();

//Changing this

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
    });
    }
};

video.showTags();


// function playVideo() {
//     console.log(this);
// }

// playVideo.call({ name: 'David'}, 1, 2);
// playVideo.apply({ name: 'David'}, [1, 2]);
// playVideo.bind({ name: 'David' }) ();

// playVideo();


//Sum of Arguments

console.log(sum([1, 2, 3, 4]));

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

//Area of Circle

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;  
      }
};

console.log(circle.area);

//Error Handling

try {
const numbers = [1, 2, 3, 4];
const count = countOccurences(null, 1);
console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invlaid array');

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1:0;
        return accumulator + occurence;
    }, 0);
}