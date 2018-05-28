
// Type annotation - lightweight way to record the intended contract of the function or a variable
function greetOne(person: string) {
    return "Hello "  + person;
}

let userOne = "Mr. V";

document.getElementById("greetingOne").innerHTML = greetOne(userOne);


// Interface - In TS, 2 types are compatible if their internal structure is compatible
interface Person {
    firstName: string;
    lastName: string;
}

function greetTwo(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let userTwo = { firstName: "Vivens", lastName: "Ndatinya" };

document.getElementById("greetingTwo").innerHTML = greetTwo(userTwo);

// Classes: TS supports class-based object-oriented programming; classes and interfaces play well together
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + "" + lastName;
    }  
}

let userThree = new Student("Ed", "N.", "Taylor");

document.getElementById("greetingThree").innerHTML = greetTwo(userThree);
 