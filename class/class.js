 class Person{
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk")
    }
 }

//  const person = new Person('Mosh');
//  person.walk();


class Teacher extends Person {
    constructor(name, degree){
        super(name);
        this.degree = degree
    }
    teach() {
        console.log("teach");
    }
}

const teacher =  new Teacher("tt", "msc");
console.log(teacher.name);
console.log(teacher.degree);
teacher.walk();
teacher.teach();
