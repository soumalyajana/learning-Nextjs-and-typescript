class BankAccount {
  public owner: string;      // 👈 can be accessed anywhere
  private balance = 0;       // 👈 only accessible inside the class
  #otp = 123456;             // 👈 JavaScript private field (hard private)

  constructor(owner: string) {
    this.owner = owner;
  }

  // ✅ Method name corrected and syntax fixed
  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    this.balance += amount;
  }

  // ✅ Method to safely get the balance
  getBalance() {
    return this.balance;
  }

  // ✅ Private OTP check method
  verifyOtp(code: number) {
    return this.#otp === code; // only accessible inside the class
  }
}

// ✅ Usage
const acc = new BankAccount("Soumalya");

acc.deposit(5000);
console.log(acc.getBalance()); // 👉 5000

// console.log(acc.balance); ❌ Error: Property 'balance' is private
// console.log(acc.#otp); ❌ Error: Private field '#otp' must be declared in enclosing class
