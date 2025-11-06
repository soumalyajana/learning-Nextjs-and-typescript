"use strict";
// ✅ Create an object of type Person1
const person1 = {
    id: "1",
    address: "Medinipur", // better to use a meaningful address
    salary: 1234,
};
// ✅ Function to check next action based on status
// Fix: use the Status type instead of generic string
// Also, make sure it always returns a value
function nextActionCheck(s) {
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
// ✅ Create an object of merged type
const product = {
    id: "P001",
    address: "Warehouse 5",
    salary: 5000, // can represent employee salary or handling cost
    piece: 100,
    stock: 50,
};
console.log(product);
