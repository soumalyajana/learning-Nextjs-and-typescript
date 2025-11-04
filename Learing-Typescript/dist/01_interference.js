"use strict";
// // 🎯 Goal: Understand when to let TypeScript infer types automatically
// // TypeScript can infer types very well — you don't always need to annotate everything.
// // ✅ Example 1: Basic Type Inference
// let count = 0;              // TS infers: number
// const site = "Soumalya";    // TS infers: "Soumalya" (string literal type)
// // ⚠️ Over-annotation isn’t wrong — just unnecessary when the type is obvious.
// // ✅ Example 2: When to Use Explicit Annotations
// export function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(5, 2));
// // ✅ Example 3: When the Type Is *Not* Obvious
// // Here, we explicitly tell TypeScript that `maybe` can hold either a string or a number.
// let maybe: string | number;
// maybe = Math.random() > 0.5 ? "test" : 10;
// // ✅ Summary:
// // - Let TypeScript infer when the type is obvious.
// // - Annotate when it’s unclear, for example:
// //    → Function parameters & return types
// //    → Variables that can hold multiple possible types
// practice and question
let isLoggedIn = true; // Boolean
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("soumalya")); // 
const value = "Soumalya"; // string
const userAge = 23; // need to explicitly annotate the userAge with number
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 5));
const data = true;
