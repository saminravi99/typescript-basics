export {};

let myName = "Hello, Samin Israr Ravi";
console.log(myName);

let age: number = 20;
let isMale: boolean = true;
const PI: number = 3.14;
let player: string = "Samin Israr Ravi";

console.log(`My name is ${player} and I am ${age} years old.`);

// player = 2
// age = "Samin Israr Ravi" // Error
console.log(player.length);
console.log(age.toFixed(2));
console.log(isMale.valueOf());

/***
 * Basic Types
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. Array
 * 7. Tuple
 * 8. Enum
 * 9. Any
 * 10. Void
 * 11. Never
 * 12. Object
 */

let n: null = null;
let u: undefined = undefined; // not much use so they are subtypes of all other types
// null and undefined can be assigned to any other type

// let canFly : boolean = null;
// let count : number = undefined; // Error

//Array Type
//Two ways to define array type
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [1, 2, 3, 4, 5];

//Tuple Type - Array with fixed number of elements and mixed types. Element order is important
let person: [string, number] = ["Samin Israr Ravi", 20];
console.log(person);
// person = [20, "Samin Israr Ravi"] // Error

//Enum Type - Enum is a way of giving more friendly names to sets of numeric values
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c); // returns 1 - which is the index number of Green
console.log(Color[1]); // Green

enum Heroes {
  Hulk = 7, // set the index number of Hulk to 7
  IronMan,
  SpiderMan,
}

let i: Heroes = Heroes.IronMan;
console.log(i); // returns 8 - which is the index number of IronMan
console.log(Heroes[8]); // IronMan

let h: Heroes = Heroes.Hulk;
console.log(h); // returns 7 - which is the index number of Hulk
console.log(Heroes[7]); // Hulk

let s: Heroes = Heroes.SpiderMan;
console.log(s); // returns 9 - which is the index number of SpiderMan
console.log(Heroes[9]); // SpiderMan


//Any Type - Any type is the super type of all types in TypeScript. It denotes a dynamic type.
let randomValue: any = 10;
randomValue = true; // no error
randomValue = "Samin Israr Ravi"; // No Error
console.log(randomValue);
/**
 * Any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.
 * You might expect Object to play a similar role, as it does in other languages. However, variables of type Object only allow you to assign any value to them.
 * You can’t call arbitrary methods on them, even ones that actually exist:
 * You can’t even call Object’s own methods:
 * The solution is the any type, which is the type of variables that don’t have a type annotation:
 */