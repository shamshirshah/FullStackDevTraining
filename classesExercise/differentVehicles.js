// Here’s how you can implement a class hierarchy in JavaScript for different vehicles, such as Car and Motorcycle, with a common base class Vehicle. Each class will have common methods in the base class and specific implementations in the subclasses.

// Base class Vehicle
class Vehicle {
  constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  // Method to display common details of the vehicle
  displayDetails() {
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
  }

  // Method to start the vehicle (common behavior)
  start() {
      console.log(`${this.make} ${this.model} is starting...`);
  }

  // Method to stop the vehicle (common behavior)
  stop() {
      console.log(`${this.make} ${this.model} is stopping...`);
  }
}

// Car class extending Vehicle
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
  }

  // Overriding the start method to customize it for cars
  start() {
      console.log(`${this.make} ${this.model} car with ${this.numDoors} doors is starting...`);
  }

  // Overriding the stop method to customize it for cars
  stop() {
      console.log(`${this.make} ${this.model} car with ${this.numDoors} doors is stopping...`);
  }

  // Method specific to the Car class
  displayCarDetails() {
      this.displayDetails();
      console.log(`Number of Doors: ${this.numDoors}`);
  }
}

// Motorcycle class extending Vehicle
class Motorcycle extends Vehicle {
  constructor(make, model, year, type) {
      super(make, model, year);
      this.type = type;
  }

  // Overriding the start method to customize it for motorcycles
  start() {
      console.log(`${this.make} ${this.model} motorcycle of type ${this.type} is starting...`);
  }

  // Overriding the stop method to customize it for motorcycles
  stop() {
      console.log(`${this.make} ${this.model} motorcycle of type ${this.type} is stopping...`);
  }

  // Method specific to the Motorcycle class
  displayMotorcycleDetails() {
      this.displayDetails();
      console.log(`Type: ${this.type}`);
  }
}

// Example usage:
const car = new Car('Toyota', 'Camry', 2022, 4);
car.start(); 
car.displayCarDetails();
car.stop();

console.log('---');

const motorcycle = new Motorcycle('Harley-Davidson', 'Iron 883', 2023, 'Cruiser');
motorcycle.start(); 
motorcycle.displayMotorcycleDetails();
motorcycle.stop();

// Customization:
// You can extend this class to handle more complex date operations, such as:

// Validating the date to ensure it's a valid day/month/year combination.
// Adding methods to calculate the day of the week for a given date.
// Adding functionality for date manipulation (e.g., adding days or months).
