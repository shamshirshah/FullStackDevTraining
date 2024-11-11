// Base class Vehicle

// Here's an extended implementation of a vehicle class hierarchy with properties and methods to calculate the maximum speed, fuel efficiency, and support additional features like fuel level and mileage. This version includes a base class Vehicle and subclasses Car, Motorcycle, and Truck.

// Explanation:
// Base Class Vehicle:
// Includes common properties: make, model, year, maxSpeed, fuelLevel, and mileage.
// Methods include displayDetails(), calculateFuelEfficiency(), and drive() to update mileage and fuel.
// Car Class:
// Inherits from Vehicle and adds numDoors.
// Overrides calculateFuelEfficiency() to provide car-specific logic.
// Includes activateEcoMode() for eco-mode behavior.
// Motorcycle Class:
// Inherits from Vehicle and adds hasSidecar.
// Provides motorcycle-specific calculateFuelEfficiency() logic.
// Truck Class:
// Inherits from Vehicle and adds loadCapacity.
// Overrides calculateFuelEfficiency() with truck-specific logic.
// Customization:
// Additional Classes: Add more vehicle types like Bus or SUV with unique properties.
// Methods for Refueling: Add a refuel() method to increase the fuelLevel.
// Advanced Features: Implement methods for handling driving modes or load adjustments for more realistic vehicle behavior.

class Vehicle {
  constructor(make, model, year, maxSpeed) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.maxSpeed = maxSpeed; // Maximum speed in km/h
      this.fuelLevel = 100; // Percentage (0-100)
      this.mileage = 0; // Total distance traveled in km
  }

  // Method to display common vehicle details
  displayDetails() {
      console.log(`Vehicle Details: ${this.year} ${this.make} ${this.model}`);
      console.log(`Maximum Speed: ${this.maxSpeed} km/h`);
      console.log(`Fuel Level: ${this.fuelLevel}%`);
      console.log(`Mileage: ${this.mileage} km`);
  }

  // Method to calculate fuel efficiency (basic version)
  calculateFuelEfficiency() {
      console.log('Fuel efficiency calculation not available for the base vehicle.');
  }

  // Method to drive the vehicle, reducing fuel level and increasing mileage
  drive(distance) {
      if (this.fuelLevel <= 0) {
          console.log('Cannot drive. Fuel tank is empty.');
          return;
      }
      // Simple fuel consumption logic: 1 unit of fuel for every 10 km
      const fuelNeeded = distance / 10;
      if (fuelNeeded > this.fuelLevel) {
          console.log(`Not enough fuel to drive ${distance} km. Please refuel.`);
          return;
      }

      this.mileage += distance;
      this.fuelLevel -= fuelNeeded;
      console.log(`Drove ${distance} km. Fuel level is now at ${this.fuelLevel}%.`);
  }
}

// Car class extending Vehicle
class Car extends Vehicle {
  constructor(make, model, year, maxSpeed, numDoors) {
      super(make, model, year, maxSpeed);
      this.numDoors = numDoors;
  }

  // Overriding fuel efficiency calculation for cars
  calculateFuelEfficiency() {
      const efficiency = this.maxSpeed > 200 ? 8 : 12; // Arbitrary logic: 8 km/l for sports cars, 12 km/l for others
      console.log(`Fuel efficiency for ${this.model} is approximately ${efficiency} km/l.`);
      return efficiency;
  }

  // Method to display car-specific details
  displayDetails() {
      super.displayDetails();
      console.log(`Number of Doors: ${this.numDoors}`);
  }

  // Method for eco-mode driving
  activateEcoMode() {
      console.log('Eco mode activated. Reducing power to save fuel.');
      this.maxSpeed *= 0.85; // Reduce max speed by 15% for eco-mode
  }
}

// Motorcycle class extending Vehicle
class Motorcycle extends Vehicle {
  constructor(make, model, year, maxSpeed, hasSidecar) {
      super(make, model, year, maxSpeed);
      this.hasSidecar = hasSidecar;
  }

  // Overriding fuel efficiency calculation for motorcycles
  calculateFuelEfficiency() {
      const efficiency = this.hasSidecar ? 18 : 25; // Motorcycles with sidecars have lower fuel efficiency
      console.log(`Fuel efficiency for ${this.model} is approximately ${efficiency} km/l.`);
      return efficiency;
  }

  // Method to display motorcycle-specific details
  displayDetails() {
      super.displayDetails();
      console.log(`Has Sidecar: ${this.hasSidecar ? 'Yes' : 'No'}`);
  }
}

// Truck class extending Vehicle
class Truck extends Vehicle {
  constructor(make, model, year, maxSpeed, loadCapacity) {
      super(make, model, year, maxSpeed);
      this.loadCapacity = loadCapacity; // Load capacity in tons
  }

  // Overriding fuel efficiency calculation for trucks
  calculateFuelEfficiency() {
      const efficiency = 5; // Trucks generally have lower fuel efficiency
      console.log(`Fuel efficiency for ${this.model} is approximately ${efficiency} km/l.`);
      return efficiency;
  }

  // Method to display truck-specific details
  displayDetails() {
      super.displayDetails();
      console.log(`Load Capacity: ${this.loadCapacity} tons`);
  }
}

// Example usage:

// Create a Car object
const car = new Car('Toyota', 'Camry', 2021, 210, 4);
car.displayDetails();
car.calculateFuelEfficiency();
car.drive(50);
car.activateEcoMode();
car.displayDetails();

console.log('---');

// Create a Motorcycle object
const motorcycle = new Motorcycle('Harley-Davidson', 'Iron 883', 2022, 160, false);
motorcycle.displayDetails();
motorcycle.calculateFuelEfficiency();
motorcycle.drive(100);

console.log('---');

// Create a Truck object
const truck = new Truck('Volvo', 'FH16', 2020, 120, 20);
truck.displayDetails();
truck.calculateFuelEfficiency();
truck.drive(30);



