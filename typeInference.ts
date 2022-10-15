export{}

let a;
a = 10;
a = true;

//Type Inference - TypeScript tries to figure out the type of variable automatically based on the value assigned to it. This is called type inference. Type inference is a way to provide type information when there is no explicit type annotation. For example, in the following code:
let b = 10;
// b = false; // Error
console.log(b.toFixed(2)); // 10.00
//Here, TypeScript infers that a is a number based on the value assigned to it. This is called type inference. Type inference is a way to provide type information when there is no explicit type annotation. For example, in the following code:
let c = true;
// c = 10; // Error
// Here we explicitly set the type of c to boolean. So we can't assign a number to c. This is called type annotation. Type annotation is a way to explicitly tell the compiler what type a variable will refer to. Type annotation is also called type assertion. Type assertion is a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.



/**
 * Type Inference is-
 * 1. Automatic type assignment to a variable based on the value assigned to it. 
 */

/**
 * Type Inference are important for -
 * 1. Development Experience
 * 2. Readability of Code
 * 3. Reduce number of bugs in code
 * 4. Reduce the amount of code we need to write
 * 5. Reduce the amount of code we need to maintain
 * 6. Reduce the amount of code we need to review
 * 7. Reduce the amount of code we need to test
 * 8. Reduce the amount of code we need to debug
 * 9. Reduce the amount of code we need to document
 * 10. Reduce the amount of code we need to refactor
 * 11. Reduce the amount of code we need to optimize
 */


/**
 * Difference between Type Inference and Type Annotation/Assertion/Casting
 * 1. Type Inference is automatic type assignment to a variable based on the value assigned to it.
 * 2. Type Annotation is a way to explicitly tell the compiler what type a variable will refer to.
 * 3. Type Inference is a way to provide type information when there is no explicit type annotation.
 * 4. Type Annotation is a way to explicitly tell the compiler what type a variable will refer to.
 */

let d;
d = 10;
d = true;
/**
 * Type infernece doesnt work on variable d because d was not initialized with value. So even if we assign a boolean value to d, it will not throw an error. This is because type inference only works when a variable is initialized with a value.
 */