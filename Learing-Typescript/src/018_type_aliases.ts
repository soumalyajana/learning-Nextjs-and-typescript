// ✅ Define a Person1 type
type Person1 = {
  id: string;
  address: string;
  salary: number;
};

// ✅ Create an object of type Person1
const person1: Person1 = {
  id: "1",
  address: "Medinipur", // better to use a meaningful address
  salary: 1234,
};

// ✅ Define a union type for Status
// ❌ You wrote 'string' — probably meant 'shipped' or something similar
// ✅ Correcting that to 'shipped' for clarity
type Status = "new" | "paid" | "shipped";

// ✅ Function to check next action based on status
// Fix: use the Status type instead of generic string
// Also, make sure it always returns a value
function nextActionCheck(s: Status): string {
  switch (s) {
    case "new":
      return "Processing order...";

    case "paid":
      return "Preparing for shipment...";

    case "shipped":
      return "Order completed!";

    default:
      // This line will never run because 's' can only be one of the above three values
      return "Unknown status";
  }
}

// ✅ Example usage
console.log(nextActionCheck("paid")); // Output: "Preparing for shipment..."


// ✅ Demonstrating intersection types (&)
// Combines all properties from Person1, ToMerge1, and ToMerge2

type ToMerge1 = { piece: number };
type ToMerge2 = { stock: number };

// ✅ mergedProductInfo now contains id, address, salary, piece, and stock
type MergedProductInfo = Person1 & ToMerge1 & ToMerge2;

// ✅ Create an object of merged type
const product: MergedProductInfo = {
  id: "P001",
  address: "Warehouse 5",
  salary: 5000, // can represent employee salary or handling cost
  piece: 100,
  stock: 50,
};

console.log(product);
