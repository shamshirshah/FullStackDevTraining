class Student {
  // Constructor to initialize the student's name, age, and grade
  constructor(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
  }

  // Method to set student's details
  setDetails(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
  }

  // Method to display student's details
  displayDetails() {
      console.log(`Student Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Grade: ${this.grade}`);
  }
}

// Example usage:
const student1 = new Student('John Doe', 20, 'A');
student1.displayDetails();

// Updating student details using the setDetails method
student1.setDetails('Jane Doe', 21, 'B');
student1.displayDetails();
