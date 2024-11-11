// Here’s how you can implement a Book class in JavaScript with member functions to set and display book details such as title, author, and price.

// Explanation:
// Constructor:
// The Book class constructor initializes the title, author, and price properties when a new Book object is created.
// setDetails method:
// This method allows you to update the details of the book. It takes three parameters: title, author, and price, and updates the properties of the class with the new values.
// displayDetails method:
// This method outputs the book’s title, author, and price to the console in a readable format.

class Book {
  // Constructor to initialize book details
  constructor(title, author, price) {
      this.title = title;
      this.author = author;
      this.price = price;
  }

  // Method to set or update book details
  setDetails(title, author, price) {
      this.title = title;
      this.author = author;
      this.price = price;
  }

  // Method to display book details
  displayDetails() {
      console.log(`Book Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Price: $${this.price}`);
  }
}

// Example usage:
const book1 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', 29.99);
book1.displayDetails();

// Updating book details using the setDetails method
book1.setDetails('Eloquent JavaScript', 'Marijn Haverbeke', 39.99);
book1.displayDetails();



// Customization:
// You can extend the Book class with additional functionality, such as:

// A method to apply a discount to the price.
// A method to check if the book is on sale.
// A method to get the book's genre or publication year.
// This basic structure provides a simple and effective way to manage book data using object-oriented principles in JavaScript.
