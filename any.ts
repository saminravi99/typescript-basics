export{}
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

/**
 * we should avoid using any type as much as possible. It is better to be explicit and provide a type annotation when you don’t know what type a variable will be.
 */

/**
 * we should use any type when -
 * 1. We are working with a 3rd party library that doesn't have type definitions
 * 2. We are working with a legacy code base that we don't want to refactor
 * 3. We are writing a test
 * 4. We are writing a function that will return the type of any value
 * 5. We are writing a function that will accept any type of value
 */