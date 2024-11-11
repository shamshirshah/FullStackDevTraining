// Here's an implementation of a class hierarchy for different animals in JavaScript, where we have a base class Animal and subclasses for specific animals like Cat and Dog. Each animal class will have a common speak method (overridden for each specific animal) and a method to display information about the animal.

// Customization:
// You can add more animal types, such as Bird, Fish, etc., each with their own specific properties (e.g., wingspan for birds, finCount for fish).
// Add methods to simulate behaviors common to all animals, such as eating, sleeping, or moving.
// You could also implement additional methods for common animal attributes like weight, height, or habitat.

// Base class Animal
class Animal {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  // Method to display basic details of the animal
  displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age} years`);
  }

  // Method to be overridden by subclasses
  speak() {
      console.log(`${this.name} makes a sound.`);
  }
}

// Dog class extending Animal
class Dog extends Animal {
  constructor(name, age, breed) {
      super(name, age); // Call the parent constructor
      this.breed = breed;
  }

  // Overriding the speak method to provide dog-specific behavior
  speak() {
      console.log(`${this.name} says: Woof!`);
  }

  // Display dog-specific details
  displayDogDetails() {
      this.displayDetails();
      console.log(`Breed: ${this.breed}`);
  }
}

// Cat class extending Animal
class Cat extends Animal {
  constructor(name, age, color) {
      super(name, age); // Call the parent constructor
      this.color = color;
  }

  // Overriding the speak method to provide cat-specific behavior
  speak() {
      console.log(`${this.name} says: Meow!`);
  }

  // Display cat-specific details
  displayCatDetails() {
      this.displayDetails();
      console.log(`Color: ${this.color}`);
  }
}

// Example usage:

// Creating a Dog object
const dog = new Dog('Rex', 5, 'Golden Retriever');
dog.speak();  // Output: Rex says: Woof!
dog.displayDogDetails();
// Output:
// Name: Rex
// Age: 5 years
// Breed: Golden Retriever

console.log('---');

// Creating a Cat object
const cat = new Cat('Whiskers', 3, 'Gray');
cat.speak();  // Output: Whiskers says: Meow!
cat.displayCatDetails();
// Output:
// Name: Whiskers
// Age: 3 years
// Color: Gray

