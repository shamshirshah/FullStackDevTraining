
// Implement a Bank Account class or a simple Bank Account with deposit and withdraw functions. in javascript

class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
    console.log(`Initial balance: $${initialBalance}.`);
  }

  // Method to deposit money into the account
  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than zero.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited: $${amount}. New balance: $${this.balance}.`);
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than zero.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew: $${amount}. New balance: $${this.balance}.`);
  }

  // Method to check the current balance
  getBalance() {
    return this.balance;
  }
}

// Example usage
const myAccount = new BankAccount(100); // Initialize with $100
myAccount.deposit(50); // Deposit $50
myAccount.withdraw(30); // Withdraw $30
console.log(`Final balance: $${myAccount.getBalance()}`); // Display the final balance
myAccount.withdraw(3000); // Withdraw $3000
console.log(`Final balance: $${myAccount.getBalance()}`);

const Amit = new BankAccount(100); // Initialize with $100
Amit.deposit(50); // Deposit $50
Amit.withdraw(30); // Withdraw $30
console.log(`Final balance: $${Amit.getBalance()}`); // Display the final balance
Amit.withdraw(300); // Withdraw $300

const Sarib = new BankAccount(5000);
Sarib.deposit(1000);
Sarib.withdraw(500);
console.log(`Final balance: $${Sarib.getBalance()}`); // Display the final balance
Sarib.withdraw(2200);
console.log(`Final balance: $${Sarib.getBalance()}`);
Sarib.withdraw(300); // Withdraw $300
console.log(`Final balance: $${Sarib.getBalance()}`);