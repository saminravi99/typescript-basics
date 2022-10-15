export {};

const fullName = (person: { firstName: string; lastName: string }) => {
  return `Hello, ${person.firstName} ${person.lastName}`;
};

const p = {
  firstName: "Samin Israr",
  lastName: "Ravi",
  //   lastName: 20 // Error thrown when function is called and this object is passed as parameter
  age: 12,
};

console.log(fullName(p));

//Interface - create a new type, describing the property names and value types of an object

/**
 * Interface are needed for-
 * 1. When we need to have a list of values that are human readable and numeric values
 */

interface Address {
  street: string;
  city: string;
  state: string;
  zip: number;
}

const address: Address = {
  street: "123 Main St",
  city: "Boston",
  state: "MA",
  zip: 12345,
  //   postalCode : 12345 // Error
};

const getAddress = (address: Address): string => {
  return `${address.street}, ${address.city}, ${address.state}, ${address.zip}`;
};

console.log(getAddress(address));


// same interface can be used as a type for multiple objects , and function parameters type when the parameter will be an object


// interface with optional types

interface Player {
    name : string;
    age : number;
    isStriker ?: boolean; // isStriker property is optional. So no error will be thrown if it is not given
}

const player : Player = {
    name : "Messi",
    age: 30,
    // isFinitely : true, // Error
    //but if isStriker is not given then no error will be thrown
}

const player2 : Player ={
    name : "Neymar",
    age : 25,
    isStriker : true
}

const getPlayer = ( player : Player) : string => {
    return `Hello ${player.name}`
}
console.log(getPlayer(player))
console.log(getPlayer(player2))
