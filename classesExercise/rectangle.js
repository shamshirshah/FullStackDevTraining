// Here is a JavaScript implementation of a Rectangle class with member functions to calculate its area and perimeter:

// Explanation:
// Constructor:
// The Rectangle class constructor accepts two parameters: length and width, which are used to initialize the corresponding properties of the rectangle object.
// area method:
// The area method calculates the area of the rectangle using the formula: length * width.
// perimeter method:
// The perimeter method calculates the perimeter of the rectangle using the formula: 2 * (length + width).
// displayDetails method:
// The displayDetails method outputs the rectangle's length, width, area, and perimeter in a readable format to the console.

class Rectangle {
  // Constructor to initialize the dimensions of the rectangle
  constructor(length, width) {
      this.length = length;
      this.width = width;
  }

  // Method to calculate the area of the rectangle
  area() {
      return this.length * this.width;
  }

  // Method to calculate the perimeter of the rectangle
  perimeter() {
      return 2 * (this.length + this.width);
  }

  // Method to display the area and perimeter
  displayDetails() {
      console.log(`Rectangle Length: ${this.length}`);
      console.log(`Rectangle Width: ${this.width}`);
      console.log(`Area: ${this.area()}`);
      console.log(`Perimeter: ${this.perimeter()}`);
  }
}

// Example usage:
const rect1 = new Rectangle(10, 5);
rect1.displayDetails();

// Creating another rectangle with different dimensions
const rect2 = new Rectangle(7, 3);
rect2.displayDetails();


