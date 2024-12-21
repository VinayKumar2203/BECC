// index.js
const { sum } = require("./sum");
const { multiplication } = require("./multiplication");
const { subtraction } = require('./subtraction');
const { division } = require('./division');

let sumA = 3;
let sumB = 5;
let sumResult = sum(sumA, sumB);
console.log('run ', sumResult)

let mulA = 4;
let mulB = 6;
let mulResult = multiplication(mulA, mulB);
console.log(mulResult);

let sabA = 9;
let subB = 3;
let sub = subtraction(sabA, subB);
console.log(sub);

let divA = 9;
let divB = 5;
let divs = division(divA, divB);
console.log(divs);

