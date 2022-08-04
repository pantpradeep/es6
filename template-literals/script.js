console.log("My Name is Pradeep." + "My age is 26");

//By template literal
console.log(`My Name is Pradeep. My age is 26`);

let firstName = "Pradeep";
let lastName = "Pant";
console.log("My name is " + firstName + ". My Lase name is " + lastName + ".");

console.log(`My name is ${firstName}. My last name is ${lastName}.`);


let a = 20;
let b = 5;
console.log("Total is " + (a + b));


console.log(`Total is ${a + b}`);

//New Line
console.log("This is first line \nthis is second line")
console.log(`This is first line
this is second line`);



//methods
const fName = `${firstName} `;
const fullName = `${firstName} ${lastName} `
console.log(fName.startsWith('P'));
console.log(fName.endsWith('P'));
console.log(fName.includes('rad'));
console.log(fullName.repeat(5));