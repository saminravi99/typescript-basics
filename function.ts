export {};

const add = (a: number, b: number): number => {
  return a + b;
};

//type for returning was inferred

add(1, 2);
// add(1 "2"); // Error
// add(a, b) // Error
// add(1) // Error
// add(1, 2 ,3) // Error
// add() // Error

//we can also explicitly define the return type
const add2 = (a: number, b: number): number => {
  return a + b;
};

add2(1, 2);

// we can set any parameter optionals to undefined if they don't exist

const add3 = (a: number, b?: number): number => {
  return b ? a + b : a;
};

// here if add3 function does not get 2nd parameter then it is undefined and will return just undefined
// so we can return by ternary operator. That is, if b is undefined then it will return just the value of a, otherwise it will return the sum of a and b

add3(1); // No Error
add3(1, 2); // No Error
// add3(); // Error
// add(undefined, 2 ) // Error
// add3(_, 2) //  Error

//Function with default values for parameters

const add4 = (a: number, b: number = 10): number => {
  return a + b;
};

add4(1); // No Error
add4(1, 2); // No Error

// so in add4 function if 2nd parameter is not specified then its value will be 10. But not undefined