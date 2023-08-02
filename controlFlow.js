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
