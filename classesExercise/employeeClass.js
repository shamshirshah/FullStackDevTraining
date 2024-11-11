// Here’s how you can implement a class hierarchy for different types of employees (e.g., Manager, Programmer) with a common base class Employee in JavaScript. The base class will contain common properties and methods, while the subclasses will define specific behaviors for each type of employee.



// Base class Employee
class Employee {
  constructor(name, id, salary) {
      this.name = name;
      this.id = id;
      this.salary = salary;
  }

  // Method to display common employee details
  displayEmployeeDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Employee ID: ${this.id}`);
      console.log(`Salary: $${this.salary}`);
  }

  // Method to display a generic employee role
  displayRole() {
      console.log(`${this.name} is an employee.`);
  }
}

// Manager class extending Employee
class Manager extends Employee {
  constructor(name, id, salary, department) {
      super(name, id, salary); // Call the parent constructor
      this.department = department;
  }

  // Overriding the displayRole method to show manager-specific behavior
  displayRole() {
      console.log(`${this.name} is a Manager in the ${this.department} department.`);
  }

  // Method to display manager-specific details
  displayManagerDetails() {
      this.displayEmployeeDetails();
      console.log(`Department: ${this.department}`);
  }
}

// Programmer class extending Employee
class Programmer extends Employee {
  constructor(name, id, salary, programmingLanguage) {
      super(name, id, salary); // Call the parent constructor
      this.programmingLanguage = programmingLanguage;
  }

  // Overriding the displayRole method to show programmer-specific behavior
  displayRole() {
      console.log(`${this.name} is a Programmer, skilled in ${this.programmingLanguage}.`);
  }

  // Method to display programmer-specific details
  displayProgrammerDetails() {
      this.displayEmployeeDetails();
      console.log(`Programming Language: ${this.programmingLanguage}`);
  }
}

// Example usage:

// Create a Manager object
const manager = new Manager('Alice', 'M123', 95000, 'Sales');
manager.displayManagerDetails();
// Output:
// Name: Alice
// Employee ID: M123
// Salary: $95000
// Department: Sales

console.log('---');

// Create a Programmer object
const programmer = new Programmer('Bob', 'P456', 80000, 'JavaScript');
programmer.displayProgrammerDetails();
// Output:
// Name: Bob
// Employee ID: P456
// Salary: $80000
// Programming Language: JavaScript
