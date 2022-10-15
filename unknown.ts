export {};
// Unknown Type - The unknown type is the type-safe counterpart of any. We can assign any value to a variable of type unknown, but we can’t access any properties of a value of type unknown without first checking whether the value is of a specific type.

let myVariable: unknown = 10;

myVariable = true;
myVariable = "Samin Israr Ravi"; // No Error just like any type

//But
// console.log(myVariable.name);  // Error
// console.log(myVariable.toUpperCase()); // Error
// console.log(myVariable.length); // Error
// console.log(myVariable.toFixed(2)); // Error
// console.log(myVariable.valueOf()); // Error
// console.log(myVariable.toString()); // Error
// So we see that we can assign any value to unknown type but we can't access any properties of a value of type unknown without first checking whether the value is of a specific type.

//We can use type assertion to access the properties of unknown type

(myVariable as string).toUpperCase(); // Type Assertion / Type Casting
(<string>myVariable).toUpperCase(); // Type Assertion / Type Casting

(myVariable as number).toFixed(2); // Type Assertion / Type Casting
(<number>myVariable).toFixed(2); // Type Assertion / Type Casting

(myVariable as boolean).valueOf(); // Type Assertion / Type Casting
(<boolean>myVariable).valueOf(); // Type Assertion / Type Casting

//We can also use typeof to check the type of unknown type
if (typeof myVariable === "string") {
  console.log(myVariable.toUpperCase());
}

//============================================================================

//User defined type guard to call myVariable as an object access a property of it which is string
function hasName(obj: any): obj is { name: string } {
  /**
   * So hasName function receives parameter which is of type any
   * hasName function returns the same parameter which has property "name" and "name" is of type string
   */
  return !!obj && typeof obj === "object" && "name" in obj;
  // !!obj is used to check if obj is not null or undefined
  // typeof obj === "object" is used to check if obj is of type object
  // "name" in obj is used to check if obj has property name
}
// This function returns true if the object has a name property and false otherwise.

if (hasName(myVariable)) {
  console.log(myVariable.name);
}

//============================================================================

// Type guard to call myVaribale as a function

function isFunction(x: any): x is Function {
  return typeof x === "function";
}

if (isFunction(myVariable)) {
  myVariable();
}

//========================================================================================================

// Type guard to call myVaribale as an array

function isArray(x: any): x is Array<any> {
  return Array.isArray(x);
}

if (isArray(myVariable)) {
  myVariable.push(10);
}

//====================================================================================================

// Type guard to call myVaribale as a string

function isString(x: any): x is string {
  return typeof x === "string";
}

if (isString(myVariable)) {
  myVariable.toUpperCase();
}

//====================================================================================================

// Type guard to call myVaribale as a number

function isNumber(x: any): x is number {
  return typeof x === "number";
}

if (isNumber(myVariable)) {
  myVariable.toFixed(2);
}

//====================================================================================================

// Type guard to call myVaribale as a boolean

function isBoolean(x: any): x is boolean {
  return typeof x === "boolean";
}

if (isBoolean(myVariable)) {
  myVariable.valueOf();
}

//====================================================================================================

// Type guard to call myVaribale as a null

function isNull(x: any): x is null {
  return x === null;
}

if (isNull(myVariable)) {
  console.log("myVariable is null");
}

//====================================================================================================

// Type guard to call myVaribale as a undefined

function isUndefined(x: any): x is undefined {
  return x === undefined;
}

if (isUndefined(myVariable)) {
  console.log("myVariable is undefined");
}

//====================================================================================================

// Type guard to call myVaribale as a object

function isObject(x: any): x is object {
  return typeof x === "object";
}

if (isObject(myVariable)) {
  console.log("myVariable is object");
}

//====================================================================================================

// Type guard to call myVaribale as a array and access a property of it which is string

function isArrayOfString(x: any): x is Array<string> {
  return Array.isArray(x) && x.every((item) => typeof item === "string");
}

if (isArrayOfString(myVariable)) {
  console.log(myVariable.join(", "));
}

//====================================================================================================

// Type guard to call myVaribale as a array and access a property of it which is number

function isArrayOfNumber(x: any): x is Array<number> {
  return Array.isArray(x) && x.every((item) => typeof item === "number");
}

if (isArrayOfNumber(myVariable)) {
  console.log(myVariable.join(", "));
}

//====================================================================================================

// Type guard to call myVaribale as a array and access a property of it which is boolean

function isArrayOfBoolean(x: any): x is Array<boolean> {
  return Array.isArray(x) && x.every((item) => typeof item === "boolean");
}

if (isArrayOfBoolean(myVariable)) {
  console.log(myVariable.join(", "));
}

//====================================================================================================

// Type guard to call myVaribale as a array and access a property of it which is object and access a property of it which is string

function isArrayOfObjectWithString(x: any): x is Array<{ name: string }> {
  return (
    Array.isArray(x) &&
    x.every((item) => typeof item === "object" && "name" in item)
  );
}

if (isArrayOfObjectWithString(myVariable)) {
  console.log(myVariable.join(", "));
}

//====================================================================================================

// Type guard to call myVaribale as a array and access a property of it which is object and access a property of it which is number

function isArrayOfObjectWithNumber(x: any): x is Array<{ age: number }> {
  return (
    Array.isArray(x) &&
    x.every((item) => typeof item === "object" && "age" in item)
  );
}

if (isArrayOfObjectWithNumber(myVariable)) {
  console.log(myVariable.join(", "));
}

//====================================================================================================

// Type guard to call myVaribale as a array and access a property of it which is object and access a property of it which is function

function isArrayOfObjectWithFunction(
  x: any
): x is Array<{ sayHello: Function }> {
  return (
    Array.isArray(x) &&
    x.every((item) => typeof item === "object" && "sayHello" in item)
  );
}

if (isArrayOfObjectWithFunction(myVariable)) {
  //call the function
  myVariable[0].sayHello();
}

//====================================================================================================

// Type guard to call myVaribale as a array and access a property of it which is object and access a property of it which is array

function isArrayOfObjectWithArray(
  x: any
): x is Array<{ hobbies: Array<string> }> {
  return (
    Array.isArray(x) &&
    x.every((item) => typeof item === "object" && "hobbies" in item)
  );
}

if (isArrayOfObjectWithArray(myVariable)) {
  console.log(myVariable[0].hobbies.join(", "));
}

//====================================================================================================

// Type guard to call myVaribale as a array and access a property of it which is object and access a property of it which is array and access a property of it which is string

function isArrayOfObjectWithArrayOfString(
  x: any
): x is Array<{ hobbies: Array<string> }> {
  return (
    Array.isArray(x) &&
    x.every(
      (item) =>
        typeof item === "object" &&
        "hobbies" in item &&
        Array.isArray(item.hobbies) &&
        item.hobbies.every((hobby) => typeof hobby === "string")
    )
  );
}

if (isArrayOfObjectWithArrayOfString(myVariable)) {
  console.log(myVariable[0].hobbies.join(", "));
}

//====================================================================================================

// Type guard to call myVaribale as a array and access a property of it which is object and access a property of it which is array and access a property of it which is number

function isArrayOfObjectWithArrayOfNumber(
  x: any
): x is Array<{ ages: Array<number> }> {
  return (
    Array.isArray(x) &&
    x.every(
      (item) =>
        typeof item === "object" &&
        "ages" in item &&
        Array.isArray(item.ages) &&
        item.ages.every((age) => typeof age === "number")
    )
  );
}

if (isArrayOfObjectWithArrayOfNumber(myVariable)) {
  console.log(myVariable[0].ages.join(", "));
}

//====================================================================================================

// Type guard to call myVaribale as a array and access a property of it which is object and access a property of it which is array and access a property of it which is function

function isArrayOfObjectWithArrayOfFunction(
  x: any
): x is Array<{ sayHello: Array<Function> }> {
  return (
    Array.isArray(x) &&
    x.every(
      (item) =>
        typeof item === "object" &&
        "sayHello" in item &&
        Array.isArray(item.sayHello) &&
        item.sayHello.every((sayHello) => typeof sayHello === "function")
    )
  );
}

if (isArrayOfObjectWithArrayOfFunction(myVariable)) {
  //call the function
  myVariable[0].sayHello[0]();
}

// Type guard to call myVaribale as a array and access a property of it which is function

function isArrayOfFunction(x: any): x is Array<Function> {
  return Array.isArray(x) && x.every((item) => typeof item === "function");
}

if (isArrayOfFunction(myVariable)) {
  console.log(myVariable.join(", "));
}
