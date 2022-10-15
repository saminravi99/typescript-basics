export {};

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    return `Hello ${this.employeeName}`;
  }
}

// const employee1 = new Employee(); // Error because no parameter given to contruct
const employee2 = new Employee("Samin");

console.log(employee2.greet());

//javascript had prototypal inheritance
//but TS provided JS with class based inheritance like other major programming languages

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    return `Manager delegating tasks`;
  }
}

const m1 = new Manager("Samin");
console.log(m1.delegateWork());
console.log(m1.employeeName);
console.log(m1.greet());
