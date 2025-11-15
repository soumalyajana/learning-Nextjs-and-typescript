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
// Day 2: Special & Literal Types
// 🟢 Easy: Create variables using any, unknown, and void. Observe compiler differences.
// 🟡 Medium: Define a function that accepts only 'up' | 'down' | 'left' | 'right' as input.
let anyVar = 10;
anyVar = "hello"; // ✅ allowed
console.log(typeof anyVar);
let unknownVar = 20;
// unknownVar = unknownVar + 10; // ❌ Error: need type check first
if (typeof unknownVar === "number") {
    console.log(unknownVar + 10); // ✅ safe after type check
}
function logMessage() {
    console.log("This function returns nothing!");
}
logMessage();
function move(direction) {
    console.log(`Moving ${direction}`);
}
move("up"); // ✅ OK
move("down"); // ✅ OK
const variable34 = {
    name: "Soumalya Jana",
    age: 22,
    hight: 5.9
};
console.log(variable34.name);
console.log(variable34.hight);
console.log(variable34.age);
// Mock JSON (could come from API)
const jsonData = '{"id": 1, "username": "soumalya", "email": "soumalya@example.com"}';
// Parse JSON (returns type `any` by default)
const user = JSON.parse(jsonData); // ✅ type assertion
console.log(user.id); // 1
console.log(user.username); // soumalya
console.log(user.email); // soumalya@example.com
// Day 4: as const & Readonly
// 🟢 Easy: Create a colors object using as const.
// 🟡 Medium: Try modifying the value and observe TypeScript errors; explain why.
const person3333 = {
    name: "Soumalya",
    role: "developer",
    level: 1
};
// person.level = 2; ❌ Error: Cannot assign to 'level' because it is a read-only property.
console.log(person3333.name); // "Soumalya"
console.log(person3333.role); // "developer"
console.log(person3333.level); // 1
const skill = ["TS", "React", "Node"];
console.log(skill);
