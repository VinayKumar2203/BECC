const { sum } = require("./sum");
const { multiplication } = require("./multiplication");
const { subtraction } = require('./subtraction');
const { division } = require('./division');
const process = require('process');


// console.log(process.argv);
let getValue = process.argv[2];
let result;
switch (getValue) {
    case 'add':
        result = sum(Number(process.argv[3]), Number(process.argv[4]))
        break;
    case 'multiple':
        result = multiplication(Number(process.argv[3]), Number(process.argv[4]));
        break;
    case 'divs':
        result = division(Number(process.argv[3]), Number(process.argv[4]));
        break;
    case 'sub':
        result = subtraction(Number(process.argv[3]), Number(process.argv[4]));
        break;
    default:
        console.log('Please put a valid syntax');
        break;
}
console.log(result)