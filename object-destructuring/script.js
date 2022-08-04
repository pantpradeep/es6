//object destructuring
// object destructuring

const bioData = {
    name: "Pradeep",
    age: 30,
    deg: "MCA"
}
console.log(`my name is ${bioData.age}`);

let {name, age, deg} = bioData;
console.log(`my name is ${name}`);
