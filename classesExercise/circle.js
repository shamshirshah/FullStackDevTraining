class Circle {
  // Constructor to initialize the radius of the circle
  constructor(radius) {
    this.radius = radius;
  }

  // Method to calculate the area of the circle
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  // Method to calculate the circumference of the circle
  circumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Example usage:
// const circle = new Circle(5);  // Create a circle with radius 5
// console.log("Area:", circle.area());            // Output: Area: 78.53981633974483
// console.log("Circumference:", circle.circumference());  // Output: Circumference: 31.41592653589793

const circle1 = new Circle(3);  
console.log("Area:", circle1.area());   // Output: Area: 28.274333882308138         
console.log("Circumference:", circle1.circumference());  // Output: Circumference: 18.84955592153876