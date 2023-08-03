//Factory functions
//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

function createCircle(radius) {
     return {
        radius: radius,
        draw() {
            console.log('draw');
        }
        // draw: function() {
        //     console.log('draw');
        // }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//Constructor Function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);

// Dynamic Nature of Objects

// const circle = {
//     radius: 1
// };

// circle.color = 'yellow';
// circle.draw = function() {}

// delete circle.color;
// delete circle.draw;

// console.log(circle);

//Value Types: Number String, Booleean, Symbol, undefined, null
//Reference Types: Object, Function, Array

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
console.log(key, circle[key]);

for (let key of Object.keys(circle))
console.log(key);

for (let entry of Object.entries(circle))
console.log(entry);

if ('radius' in circle) console.log('yes');

//Cloning on Object

const circle5 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

//const another = Object.assign({}, circle);
const another = { ...circle }; //spread operator

console.log(another);

//Address Object

const address = {
    street: 'Main',
    city: 'Bucharest',
    zipCode: 123456
};
function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);

//Factory and Comstructor Function

let newAddress = createAddress('Main', 'Bucharest', '123')
console.log(newAddress)
function createAddress(street, city, zipCode) {
    return{
        street,
        city,
        zipCode
    };
}


let otherAddress = new Address ('Main', 'Bucharest', '123')
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
console.log(otherAddress)

//Object Equality

let address1 = new Address ('Main', 'Bucharest', '123');
let address2 = new Address ('Main', 'Bucharest', '123');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function areEqual(address1, address2){
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode
}

function areSame(address1, address2){
    return address1 === address2;
}

//Blog Post Object

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
       { author:'a', body: 'b'},
       { author:'c', body: 'd'},
    ],
    isLive: true

}

console.log(post);

// Constructor Function

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.view = 0;
    this.comments = [];
    this.isLive = false;
}

let newPost = new Post ('a', 'b', 'c');

console.log(newPost);

//Price Range Objects

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];

let restaurants = [
    {averagePerPErson: 5}
]