// Here’s a JavaScript implementation of a Product class that represents a product with member functions to set and display its details. Each product will have properties like name, price, and category, and methods to set and display these details.

// Customization:
// You can extend this Product class in several ways:

// Add more attributes like stockQuantity, rating, or manufacturer.
// Add a method to calculate discounts or sales tax.
// Include methods for checking product availability or managing inventory.

class Product {
  // Constructor to initialize product details
  constructor(name, price, category) {
      this.name = name;
      this.price = price;
      this.category = category;
  }

  // Method to set or update the product details
  setDetails(name, price, category) {
      this.name = name;
      this.price = price;
      this.category = category;
  }

  // Method to display product details
  displayDetails() {
      console.log(`Product Name: ${this.name}`);
      console.log(`Price: $${this.price.toFixed(2)}`);
      console.log(`Category: ${this.category}`);
  }
}

// Example usage:

// Create a new Product instance
const product1 = new Product('Laptop', 999.99, 'Electronics');

// Display product details
product1.displayDetails();

// Update product details using the setDetails method
product1.setDetails('Smartphone', 499.99, 'Electronics');

// Display the updated product details
product1.displayDetails();


