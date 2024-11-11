
// To implement a class hierarchy for different shapes such as Circle and Square, we can create a common base class called Shape, which defines common methods or properties that all shapes will share. Then, we will create specific subclasses for each shape like Circle and Square, and implement methods specific to those shapes.



// Base class Shape
class Shape {
  constructor(name) {
      this.name = name;
  }

  // Common method to calculate area, which can be overridden by subclasses
  area() {
      throw new Error("This method must be implemented by subclasses");
  }

  // Common method to calculate perimeter, can also be overridden
  perimeter() {
      throw new Error("This method must be implemented by subclasses");
  }

  // Method to display information about the shape
  display() {
      console.log(`Shape: ${this.name}`);
      console.log(`Area: ${this.area()}`);
      console.log(`Perimeter: ${this.perimeter()}`);
  }
}

// Circle class extending Shape
class Circle extends Shape {
  constructor(radius) {
      super("Circle");
      this.radius = radius;
  }

  // Overriding the area method
  area() {
      return Math.PI * Math.pow(this.radius, 2);
  }

  // Overriding the perimeter method (circumference for circle)
  perimeter() {
      return 2 * Math.PI * this.radius;
  }
}

// Square class extending Shape
class Square extends Shape {
  constructor(sideLength) {
      super("Square");
      this.sideLength = sideLength;
  }

  // Overriding the area method
  area() {
      return Math.pow(this.sideLength, 2);
  }

  // Overriding the perimeter method
  perimeter() {
      return 4 * this.sideLength;
  }
}

// Example usage:
const circle = new Circle(5);
circle.display();

const square = new Square(4);
square.display();
