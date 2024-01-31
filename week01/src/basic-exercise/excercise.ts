//1.
const myAge: number = 10;
const myName: string = "Snader";
const adult: boolean = true;
const myHobbies: string[] = ["Coding", "Football", "Gaming"];
const myGender: any = 42;

//2.
enum daysOfTheWeek {
    MONDAY = 0,
    TUESDAY = 1,
    WEDNESDAY = 2,
    THURSDAY = 3,
    FRIDAY = "Friday",
    SATURDAY = "Saturday",
    SUNDAY = "Sunday"
}

//An Object (key - pair values)

//3.
class Person {
    private name: string;
    private readonly email: string;
    private age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
    getEmail(): string {
        return this.email;
    }
    getAge(): number {
        return this.age;
    }
    setName(name: string): void {
        this.name = name;
    }
    /* //email is read-only
    setEmail(email: string): void {
        this.email = email;
    }
    */
    setAge(age: number): void {
        this.age = age;
    }
}

const p1: Person = new Person("Sander", "sanderroust@gmail.com", 21);

class Employee extends Person {

    private salary: number;

    constructor(name: string, email: string, age: number, salary: number){
        super(name, email, age);
        this.salary = salary;
    }

}

const p2: Employee = new Employee("Jack", "jackoulund@gmail.com", 21, 40000);


//4.

let myVariable: any = 500;

let ex1: string = myVariable as string;
let ex2: string = <string>myVariable;

//5.

function calcSum(a: number, b: number): number {
    return a + b;
}

//6. 

let http1: [number, string] = [200, "OK"]
let http2: [number, string] = [404, "NOT FOUND"]
let http3: [number, string] = [500, "SERVER ERROR"]
let http4: [number, string] = [401, "UNAUTHORIZED"]

let personTuple: [string, number, string] = [p1.getName(), p1.getAge(), p1.getEmail()]



//7. 

function iAcceptBoth(input: number | string){
    return input;
}


type NumOrString = string | number;
let newPersonTuple: [string, NumOrString, string] = [p1.getName(), p1.getAge(), p1.getEmail()]

iAcceptBoth(42);
iAcceptBoth("Hello");

//8.

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

//9.

let numbersArray: Array<number> = [1,2,3,4,5]

let numbersArray2: string[][] = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]

//10.

 // Part 1
 // A variable that might be null or undefined
 let nullableValue: string | null | undefined = "Hello";

 // Use the exclamation mark to assert that the value is non-null
 let nonNullableValue: string = nullableValue!;

 console.log(nonNullableValue); // Output: Hello

// Part 2
// A variable that might be null or undefined
function possibleUndefinedStringFunction(){return ""}
let myString: string | undefined = possibleUndefinedStringFunction();
// Use the exclamation mark to assert that the value is non-null
let lemgth: number = myString!.length;


//11.

// Part 1
// A function that takes an optional parameter
function printName(name?: string) {
    console.log(name);
  }
  
  // Call the function without a parameter
  printName(); // Output: undefined
  // Call the function with a parameter
  printName("John"); // Output: John
  
  // Part 2
  // A type alias with an optional age property
  type Person2 = {
    name: string;
    age?: number;
  };
  
  // Create a person object with an age property
  const personWithAge: Person2 = {
    name: "Sander",
    age: 21
  }
  // Create a person object without an age property
  const personWithoutAge: Person2 = {
    name: "Sander"
  }

//12.

  function getNumberOrString(input: string | number): string | number{
    return typeof input === 'number' ? input * 2 : input;
  }

//13.

const imTypeAny: any = 500;

const imTypeString: string = imTypeAny as string;
const imTypeString2: string = <string>imTypeAny;

const myDiv: HTMLElement | null = document.getElementById('myDiv');

//14.

function directionFunction(direction: "left" | "right" | "up" | "down"): 1 | 2 | 3 | 4{
    switch(direction){
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