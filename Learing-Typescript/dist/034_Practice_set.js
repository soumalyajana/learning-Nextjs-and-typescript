"use strict";
// Day 1: Type Inference & Primitives
// 🟢 Easy: Declare a variable without type annotation and check how TypeScript infers its type.
// 🟡 Medium: Write a function add(a, b) that infers parameter and return types automatically.
const variable1 = "soumalya";
if (typeof variable1 === "string") {
    console.log(variable1);
}
function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
