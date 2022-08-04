//array destructuring

const myArray = ['js', 'php', 'c', 'python'];

//old way
var top1 = myArray[0];
var top2 = myArray[1];
console.log("my first value is " + top1);


//new way or array destructuring

// let [arr1, arr2, arr3, arr4] = myArray;

// console.log("my first item is " + arr1);


console.log(myArray.length);
//skipping items;
let [arr1,,,arr4] = myArray;
console.log(`my first item is ${arr1} and my last item is ${arr4}`);

// let [arr1,arr2] = myArray;
// console.log(`my first item is ${arr1} and my last item is ${arr2}`);

// swapping by third variable;
let a = 5;
let b = 10;
console.log(`value of a is ${a}, and value of b is ${b}`);
let temp = a;
a = b;
b = temp;
console.log(`value of a is ${a}, and value of b is ${b}`);

let c = 15;
let d = 20;
console.log(`value of a is ${c}, and value of b is ${d}`);
[c, d] = [d, c];
console.log(`value of a is ${c}, and value of b is ${d}`);


