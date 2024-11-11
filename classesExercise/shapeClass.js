// Here’s how you can implement a class hierarchy for different geometric shapes, such as Circle and Square, with a common base class Shape. Each shape will have methods for calculating the area and perimeter, and the subclasses will provide specific implementations for these calculations.



// Base class Shape
class Shape {
  constructor(name) {
      this.name = name;
  }

  // Method to display the shape's name
  displayName() {
      console.log(`Shape: ${this.name}`);
  }

  // Method to calculate area (to be implemented in subclasses)
  calculateArea() {
      throw new Error("Method 'calculateArea' must be implemented in subclasses.");
  }

  // Method to calculate perimeter (to be implemented in subclasses)
  calculatePerimeter() {
      throw new Error("Method 'calculatePerimeter' must be implemented in subclasses.");
  }
}

// Circle class extending Shape
class Circle extends Shape {
  constructor(radius) {
      super('Circle');
      this.radius = radius;
  }

  // Override calculateArea for Circle
  calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
  }

  // Override calculatePerimeter for Circle
  calculatePerimeter() {
      return 2 * Math.PI * this.radius;
  }

  // Method to display circle details
  displayCircleDetails() {
      this.displayName();
      console.log(`Radius: ${this.radius}`);
      console.log(`Area: ${this.calculateArea().toFixed(2)}`);
      console.log(`Perimeter: ${this.calculatePerimeter().toFixed(2)}`);
  }
}

// Square class extending Shape
class Square extends Shape {
  constructor(sideLength) {
      super('Square');
      this.sideLength = sideLength;
  }

  // Override calculateArea for Square
  calculateArea() {
      return Math.pow(this.sideLength, 2);
  }

  // Override calculatePerimeter for Square
  calculatePerimeter() {
      return 4 * this.sideLength;
  }

  // Method to display square details
  displaySquareDetails() {
      this.displayName();
      console.log(`Side Length: ${this.sideLength}`);
      console.log(`Area: ${this.calculateArea()}`);
      console.log(`Perimeter: ${this.calculatePerimeter()}`);
  }
}

// Example usage:

// Create a Circle object
const circle = new Circle(5);
circle.displayCircleDetails();
// Output:
// Shape: Circle
// Radius: 5
// Area: 78.54
// Perimeter: 31.42

console.log('---');

// Create a Square object
const square = new Square(4);
square.displaySquareDetails();
// Output:
// Shape: Square
// Side Length: 4
// Area: 16
// Perimeter: 16
