// Here’s a JavaScript implementation of a Bank class that represents a bank with member functions to add and display account details. Each account will be represented by a BankAccount object, and the Bank class will manage these accounts.

class BankAccount {
  // Constructor to initialize bank account details
  constructor(accountNumber, accountHolderName, balance) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
  }

  // Method to deposit money into the account
  deposit(amount) {
      if (amount > 0) {
          this.balance += amount;
          console.log(`Deposited: $${amount}`);
      } else {
          console.log("Deposit amount must be positive.");
      }
  }

  // Method to withdraw money from the account
  withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          console.log(`Withdrew: $${amount}`);
      } else {
          console.log("Insufficient balance or invalid amount.");
      }
  }

  // Method to display account details
  displayAccountDetails() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Account Holder: ${this.accountHolderName}`);
      console.log(`Balance: $${this.balance}`);
  }
}

class Bank {
  // Constructor to initialize the bank with an empty list of accounts
  constructor(bankName) {
      this.bankName = bankName;
      this.accounts = [];
  }

  // Method to add a new bank account
  addAccount(account) {
      this.accounts.push(account);
      console.log(`Account for ${account.accountHolderName} added.`);
  }

  // Method to display all bank accounts
  displayAllAccounts() {
      console.log(`Bank: ${this.bankName}`);
      console.log("Accounts:");
      this.accounts.forEach(account => account.displayAccountDetails());
  }
}

// Example usage:

// Create a new bank
const myBank = new Bank('TechBank');

// Create new bank accounts
const account1 = new BankAccount('001', 'John Doe', 1000);
const account2 = new BankAccount('002', 'Jane Smith', 2000);

// Add accounts to the bank
myBank.addAccount(account1);
myBank.addAccount(account2);

// Deposit and withdraw money from an account
account1.deposit(500);
account2.withdraw(300);

// Display details of all accounts in the bank
myBank.displayAllAccounts();

// Customization:
// You can enhance this implementation further by:

// Adding a feature to handle account types (e.g., savings, checking).
// Implementing additional methods like transferring money between accounts.
// Adding interest calculation for savings accounts or overdraft protection for checking accounts.
