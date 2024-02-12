"use strict";
//1.
const myAge = 10;
const myName = "Snader";
const adult = true;
const myHobbies = ["Coding", "Football", "Gaming"];
const myGender = 42;
//2.
var daysOfTheWeek;
(function (daysOfTheWeek) {
    daysOfTheWeek[daysOfTheWeek["MONDAY"] = 0] = "MONDAY";
    daysOfTheWeek[daysOfTheWeek["TUESDAY"] = 1] = "TUESDAY";
    daysOfTheWeek[daysOfTheWeek["WEDNESDAY"] = 2] = "WEDNESDAY";
    daysOfTheWeek[daysOfTheWeek["THURSDAY"] = 3] = "THURSDAY";
    daysOfTheWeek["FRIDAY"] = "Friday";
    daysOfTheWeek["SATURDAY"] = "Saturday";
    daysOfTheWeek["SUNDAY"] = "Sunday";
})(daysOfTheWeek || (daysOfTheWeek = {}));
//An Object (key - pair values)
//3.
class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    /* //email is read-only
    setEmail(email: string): void {
        this.email = email;
    }
    */
    setAge(age) {
        this.age = age;
    }
}
const p1 = new Person("Sander", "sanderroust@gmail.com", 21);
class Employee extends Person {
    constructor(name, email, age, salary) {
        super(name, email, age);
        this.salary = salary;
    }
}
const p2 = new Employee("Jack", "jackoulund@gmail.com", 21, 40000);
//4.
let myVariable = 500;
let ex1 = myVariable;
let ex2 = myVariable;
//5.
function calcSum(a, b) {
    return a + b;
}
//6. 
let http1 = [200, "OK"];
let http2 = [404, "NOT FOUND"];
let http3 = [500, "SERVER ERROR"];
let http4 = [401, "UNAUTHORIZED"];
let personTuple = [p1.getName(), p1.getAge(), p1.getEmail()];
//7. 
function iAcceptBoth(input) {
    return input;
}
let newPersonTuple = [p1.getName(), p1.getAge(), p1.getEmail()];
iAcceptBoth(42);
iAcceptBoth("Hello");
//8.
function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
//9.
let numbersArray = [1, 2, 3, 4, 5];
let numbersArray2 = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];
//10.
// Part 1
// A variable that might be null or undefined
let nullableValue = "Hello";
// Use the exclamation mark to assert that the value is non-null
let nonNullableValue = nullableValue;
console.log(nonNullableValue); // Output: Hello
// Part 2
// A variable that might be null or undefined
function possibleUndefinedStringFunction() { return ""; }
let myString = possibleUndefinedStringFunction();
// Use the exclamation mark to assert that the value is non-null
let lemgth = myString.length;
//11.
// Part 1
// A function that takes an optional parameter
function printName(name) {
    console.log(name);
}
// Call the function without a parameter
printName(); // Output: undefined
// Call the function with a parameter
printName("John"); // Output: John
// Create a person object with an age property
const personWithAge = {
    name: "Sander",
    age: 21
};
// Create a person object without an age property
const personWithoutAge = {
    name: "Sander"
};
//12.
function getNumberOrString(input) {
    return typeof input === 'number' ? input * 2 : input;
}
//13.
const imTypeAny = 500;
const imTypeString = imTypeAny;
const imTypeString2 = imTypeAny;
const myDiv = document.getElementById('myDiv');
//14.
function directionFunction(direction) {
    switch (direction) {
        case "left":
            return 1;
        case "right":
            return 2;
        case "up":
            return 3;
        case "down":
            return 4;
    }
}
function getHumanOrAlien(creator) {
    if ("eat" in creator) {
        return creator.eat;
    }
    else {
        return creator.fly;
    }
}
function isPersonOrCar(input) {
    return 'name' in input ? input.name : input.model;
}
// write a type predicate to narrow the type of the fish parameter
function isFish(pet) {
    return pet.swim !== undefined;
}
function howToMove(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
const myObject = {
    name: "Sander",
    age: 21,
};
// Function taking a person and a student, and returning combined properties
function combinePersonAndStudent(person, student) {
    // Use the spread operator to combine properties from both interfaces
    return { ...person, ...student };
}
