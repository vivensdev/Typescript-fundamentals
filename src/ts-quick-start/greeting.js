"use strict";
// Type annotation - lightweight way to record the intended contract of the function or a variable
function greetOne(person) {
    return "Hello " + person;
}
var userOne = "Mr. V";
document.getElementById("greetingOne").innerHTML = greetOne(userOne);
function greetTwo(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var userTwo = { firstName: "Vivens", lastName: "Ndatinya" };
document.getElementById("greetingTwo").innerHTML = greetTwo(userTwo);
// Classes: TS supports class-based object-oriented programming; classes and interfaces play well together
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + "" + lastName;
    }
    return Student;
}());
var userThree = new Student("Ed", "N.", "Taylor");
document.getElementById("greetingThree").innerHTML = greetTwo(userThree);
