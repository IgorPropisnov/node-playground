const fs = require('fs');

fs.readFile('text.txt', (err, data) => {
    // <Buffer 46 6f 6f 20 42 61 72 20 42 61 7a>
    console.log(data);
})

fs.readFile('text.txt', (err, data) => {
    console.log(data.toString())
})

fs.readFile('text.txt', 'utf8', (err, data) => {
    console.log(data)
})


const str = "\u0048\u0065\u006c\u006c\u006f"; //?
console.log(str.length) //?
console.log(Buffer.byteLength(str)) //?

const number = '¼';
console.log(number.length);
console.log(Buffer.byteLength(number, 'utf8')); //?
 
let buff = Buffer(5);
buff.write('hello world');
console.log(buff.toString());
buff.write('hello', 2);
console.log(buff.toString());
buff.write('xxx', 2, 1);
console.log(buff.toString());
buff.write('yyyy', 2, 1, 'utf8');
console.log(buff.toString());

let buff2 = new Buffer('1234');
let buff3 = new Buffer('0123');
let buff4 = new Buffer('1234');

console.log(buff2.compare(buff3)) //?
console.log(buff2.compare(buff4)) 

console.log(buff2.equals(buff3)) //?
console.log(buff2.equals(buff4)) //?

const arr = [buff2, buff3];
console.log(arr.sort(Buffer.compare).toString())
console.log(buff.toJSON())

let buff5 = new Buffer('Hello World');
let buff6 = buff5.slice(0, 3);
// dont create a new array
console.log(buff6.toString());
console.log(buff5.toString());

buff6.write('xxxx');
console.log(buff6.toString())
console.log(buff5.toString())
