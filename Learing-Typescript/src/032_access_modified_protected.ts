class Animal {
  protected energy = 23; // 👈 accessible inside this class and subclasses only

  eat(amount: number) {
    // ✅ maybe increase energy when eating
    this.energy += amount;
  }

  status() {
    return this.energy;
  }
}

class Dog extends Animal {
  run() {
    // ✅ running should decrease energy
    this.energy -= 10;
  }

  // ✅ overriding parent's method (optional)
  status(): number {
    return this.energy;
  }
}

// ✅ Usage
const d = new Dog();

// Eat something
d.eat(20); // +20 energy → total 43

// Run once
d.run(); // -10 → total 33

// Check status
console.log(d.status()); // 👉 33
