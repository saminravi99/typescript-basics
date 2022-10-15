export{}
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

/**
 * Enum types are important for -
 * 1. When we need to store a list of constants
 * 2. When we need to have a list of values that are numeric values
 * 3. When we need to have a list of values that are human readable
 * 4. When we need to have a list of values that are human readable and numeric values
 * 5. When we need to have a list of values that are human readable and numeric values and we need to access them by name or by index
 * 6. When we need to have a list of values that are human readable and numeric values and we need to access them by name or by index and we need to change the index number of some of the values
 * 7. When we need to have a list of values that are human readable and numeric values and we need to access them by name or by index and we need to change the index number of some of the values and we need to access the values in reverse order
 */