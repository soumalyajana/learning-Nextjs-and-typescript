"use strict";
// 🎯 Goal: Understand optional (?), readonly, and Record types
const user1 = { id: "u1", name: "Sangam", createdAt: new Date() };
const user2 = { id: "u2", name: "Soumalya", createdAt: new Date(), email: "test@email.com" };
const c1 = { whatever: 1, total: 5 };
const c2 = {
    likes: 1,
    views: 2,
    shares: 3,
    souvik: 5, // ✅ all keys must be present
};
const userMe = {
    name: "soumlya jana",
    age: 23,
    isAdmin: true
};
console.log(userMe.age, userMe.name);
const product1 = {
    id: 1,
    name: "MAcbook",
    price: 5550
};
console.log(product1.name);
console.log(product1.id);
console.log(product1.price);
const book1 = {
    title: "Book 1",
    author: "Author 1",
    pages: 12,
};
console.log(book1.pages, book1.title, book1.author);
// 🧩 Q4
// Create a function printUser that takes a user object with 
// name (string) and email (string) and logs a message like 
// "User: <name> - Email: <email>". 
// Use inline type annotation for the parameter.
function printUser(user) {
}
const user4 = {
    name: "Soumlaya Jana",
    email: "Soumalyajana2003@gmail.com"
};
printUser(user4);
const employee = {
    name: "Arjun",
    department: "Engineering",
};
console.log(employee.department);
const user23 = {
    name: "Biswapriya Jana",
    address: { city: "kolkata", country: "india" }
};
console.log(user23.address.city);
console.log(user23.address.country);
const mobile1 = {
    darkMode: true
};
console.log(mobile1.darkMode);
console.log(mobile1.fontSize);
const config = {
    version: "1.0.0",
    releaseYear: 2025,
};
// config.version = "2.0.0"; ❌ Error (readonly)
console.log(config.version, config.releaseYear);
// 🧩 Q9
// Create an object car with properties make, model, and year. 
// Then destructure them into separate variables.
const car = {
    make: "Tesla",
    model: "Model 3",
    year: 2024,
};
const { make, model, year } = car;
console.log(make, mobile1, year);
// 🧩 Q10
// Create an array of objects named usersList where each object has 
// name (string) and age (number). Add at least 3 users.
const usersList = [
    { name: "Soumalya", age: 23 },
    { name: "Riya", age: 21 },
    { name: "Amit", age: 25 },
];
console.log(usersList);
