"use strict";
// tuples -> fixed length and fixed type
// (string | numbers)[]
// optional tuples
const userEntity = ['soumalya', 23];
const city = ["Kolkata", "Bangalore", "Mumbai", "Pune"];
const city1 = ["Kolkata", "Bangalore", "Mumbai", "Pune"];
console.log(city, city1);
// ----------------------------------------------------
// Q2️⃣ Union Type in Arrays
// ----------------------------------------------------
const items = ["apple", 10, "banana", 25];
items.map((item) => {
    if (typeof item === "string") {
        console.log(`String item: ${item}`);
    }
    else {
        console.log(`Number item: ${item}`);
    }
});
// ----------------------------------------------------
// Q3️⃣ Readonly Array
// ----------------------------------------------------
// Define a readonly array `readonlyNumbers` of type number[]
// Try to push or modify an element — observe the TypeScript error.
// Then use `.map()` or `.filter()` safely on it.
const readonlyNumbers = [10, 20, 30, 40];
// ❌ readonlyNumbers.push(50); // Error: Property 'push' does not exist
// ❌ readonlyNumbers[0] = 99; // Error: Cannot assign to read-only element
// ✅ Allowed methods (non-mutating)
const doubled = readonlyNumbers.map((n) => n * 2);
console.log("Original:", readonlyNumbers);
console.log("Mapped:", doubled);
// ----------------------------------------------------
// Q4️⃣ Function with Readonly Parameter
// ----------------------------------------------------
function calculateSum(nums) {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    return sum;
}
const normalArr = [1, 2, 3];
const readonlyArr = [4, 5, 6];
console.log("Sum (mutable):", calculateSum(normalArr));
console.log("Sum (readonly):", calculateSum(readonlyArr));
// ----------------------------------------------------
// Q5️⃣ ReadonlyArray vs Normal Array
// ----------------------------------------------------
const mutableArr = [1, 2, 3];
const readonlyArr2 = [4, 5, 6];
// ✅ Allowed on mutable
mutableArr[0] = 100;
mutableArr.push(10);
// ❌ Error on readonly
// readonlyArr2[0] = 100; // Error
// readonlyArr2.push(10); // Error
// ✅ Non-mutating methods still work
console.log("Mutable filter:", mutableArr.filter((x) => x > 2));
console.log("Readonly filter:", readonlyArr2.filter((x) => x > 4));
