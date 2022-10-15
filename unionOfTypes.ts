export {};

let multiType: number | boolean;
multiType = 20;
multiType = true; // No Error

/**
 * Union Type - Union type is a way of defining a variable that can be one of several types.
 * We can use the pipe symbol (|) to separate each type.
 * We can use union type to define a variable that can be a number or a boolean.
 * We can also use union type to define a variable that can be a number or a string.
 * We can also use union type to define a variable that can be a number or a boolean or a string.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function or a class.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function or a class or a null.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function or a class or a null or a undefined.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function or a class or a null or a undefined or a void.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function or a class or a null or a undefined or a void or a never.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function or a class or a null or a undefined or a void or a never or a enum.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function or a class or a null or a undefined or a void or a never or a enum or a tuple.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function or a class or a null or a undefined or a void or a never or a enum or a tuple or a symbol.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function or a class or a null or a undefined or a void or a never or a enum or a tuple or a symbol or a bigint.
 * We can also use union type to define a variable that can be a number or a boolean or a string or an array or an object or a function or a class or a null or a undefined or a void or a never or a enum or a tuple or a symbol or a bigint or a unknown.
 */

/**
 * Any vs Union Type
 * Any type is the super type of all types in TypeScript. It denotes a dynamic type.
 * Union type is a way of defining a variable that can be one of several types. but it is not the super type of all types. SO type is limited to the types we define.
 *
 */

let code: string | number;
code = 123;
console.log(code.toFixed(2)); // 123.00
code = "ABC";
// code = true; // Error
console.log(code.toLowerCase()); // No Error

/**
 * IntelliSense support for Union Type
 * But No IntelliSense support for Any Type
 */
