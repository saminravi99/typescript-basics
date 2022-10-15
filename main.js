"use strict";
exports.__esModule = true;
var myName = "Hello, Samin Israr Ravi";
console.log(myName);
var age = 20;
var isMale = true;
var PI = 3.14;
var player = "Samin Israr Ravi";
console.log("My name is ".concat(player, " and I am ").concat(age, " years old."));
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
 * 13. Unknown
 */
var n = null;
var u = undefined; // not much use so they are subtypes of all other types
// null and undefined can be assigned to any other type
// let canFly : boolean = null;
// let count : number = undefined; // Error
//Array Type
//Two ways to define array type
var arr = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
//Tuple Type - Array with fixed number of elements and mixed types. Element order is important
var person = ["Samin Israr Ravi", 20];
console.log(person);
// person = [20, "Samin Israr Ravi"] // Error
//Enum Type - Enum is a way of giving more friendly names to sets of numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); // returns 1 - which is the index number of Green
console.log(Color[1]); // Green
var Heroes;
(function (Heroes) {
    Heroes[Heroes["Hulk"] = 7] = "Hulk";
    Heroes[Heroes["IronMan"] = 8] = "IronMan";
    Heroes[Heroes["SpiderMan"] = 9] = "SpiderMan";
})(Heroes || (Heroes = {}));
var i = Heroes.IronMan;
console.log(i); // returns 8 - which is the index number of IronMan
console.log(Heroes[8]); // IronMan
var h = Heroes.Hulk;
console.log(h); // returns 7 - which is the index number of Hulk
console.log(Heroes[7]); // Hulk
var s = Heroes.SpiderMan;
console.log(s); // returns 9 - which is the index number of SpiderMan
console.log(Heroes[9]); // SpiderMan
//Any Type - Any type is the super type of all types in TypeScript. It denotes a dynamic type.
var randomValue = 10;
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



