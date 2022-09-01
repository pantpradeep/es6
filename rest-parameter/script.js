//es5

function sum(a,b){
    console.log(a+b);
}

sum(1,2,3,4,5,6);


//es6

const sum1= (...inputs) =>{
    console.log(...inputs);
    let total = 0;
    for (let i of inputs) {
        total += i;    
    }
    console.log(total);

}

sum1(1,2,3,4)