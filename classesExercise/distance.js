// To create a class representing a 2D point and calculate the distance between two points, we can define a Point class with x and y coordinates. The class will include a method to calculate the Euclidean distance between two points.

class Point {
  // Constructor to initialize a point with x and y coordinates
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  // Method to calculate the distance between two points
  static calculateDistance(point1, point2) {
      // Use the distance formula to calculate the distance
      const dx = point2.x - point1.x;
      const dy = point2.y - point1.y;
      return Math.sqrt(dx * dx + dy * dy);
  }

  // Method to display the point's coordinates
  display() {
      console.log(`Point: (${this.x}, ${this.y})`);
  }
}

// Example usage:

// Create two Point objects
const point1 = new Point(3, 4);
const point2 = new Point(7, 1);

// Display the points
point1.display();  // Output: Point: (3, 4)
point2.display();  // Output: Point: (7, 1)

// Calculate the distance between point1 and point2
const distance = Point.calculateDistance(point1, point2);
console.log(`Distance between the two points: ${distance.toFixed(2)}`);  // Output: Distance between the two points: 5.00
