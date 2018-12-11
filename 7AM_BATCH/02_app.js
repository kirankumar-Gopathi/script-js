/*
    Default params,
    Template Strings
    Arrow Functions
    let , const
    spread operators
    destructing
 */

// Default Parameters
function printMsg(name,age=30) {
    console.log('Hello ' + name + ' You are ' + age + ' Yrs Old');
    console.log(`Hello ${name} You are ${age} Yrs Old`);
}
printMsg('John');

// Let & Const
for(let i=1; i<=10; i++){
    //console.log(i); // 1 - 10
}
// console.log(i); // Cannot access outside the for loop

const course = 'Node JS';
console.log(course);
// course = 'Express JS'; // Assignment to const is not allowed

// Arrow Functions
let greetMe = function() {
    console.log('Iam Normal Function');
};
greetMe();

let greetMeArrow = () => {
    console.log('Iam an Arrow Function')
};
greetMeArrow();

let wishMe = (name) => {
    console.log(`Good Morning ${name}`);
};
wishMe('John');

let myArray = ['html','css','javascript','jquery','bootstrap'];
let output = '';
myArray.forEach((element) => {
    output += `${element.toUpperCase()} `;
});
console.log(output);