class Temperature {
  #c = 0; // ✅ Private field for Celsius value

  constructor(celsius: number) {
    this.celsius = celsius; // ✅ Call setter to validate input
  }

  // ✅ Getter for Celsius
  get celsius(): number {
    return this.#c;
  }

  // ✅ Setter for Celsius
  set celsius(value: number) {
    if (Number.isNaN(value)) {
      throw new Error("Not a number! Please check input");
    }
    this.#c = value;
  }

  // ✅ Getter for Fahrenheit
  get fahrenheit(): number {
    // ❌ Your code had `(this.#c * 9) ? 5 + 32` which is wrong
    return (this.#c * 9) / 5 + 32; // ✅ Correct formula
  }

  // ✅ Setter for Fahrenheit
  set fahrenheit(f: number) {
    this.celsius = ((f - 32) * 5) / 9;
  }
}

// ✅ Usage Example
const t = new Temperature(25); // 25°C
console.log(`Initial: ${t.celsius}°C = ${t.fahrenheit}°F`);

t.fahrenheit = 212; // 212°F → 100°C
console.log(`Updated: ${t.celsius}°C = ${t.fahrenheit}°F`);



/////////


const hello = `How are are yiu boy `