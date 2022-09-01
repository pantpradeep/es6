var sum = function() {
    var a = 5;
    var b = 20;
    return a+b;
}
console.log(sum());

//es6
// const sum1 = () => {
//     let a = 5;
//     let b = 20;
//     return a+b;
// }

// console.log(sum1());
let a = 5;
let b = 20;
// const sum1 = () => { return a+b; }
const sum1 = () =>  a+b 
console.log(sum1());

let a1 = 5;


const sum2 = (b) =>  a+b 
console.log(sum2(20));


//default parameter



function mult(a5,b6){
    b6 = (typeof b6 !== 'undefined') ? b6 : 2
    console.log(a5*b6);
} 
mult(4);

//now in es6

const multy = (a, b=6) => {console.log(`${a*b}`);}
multy(2);