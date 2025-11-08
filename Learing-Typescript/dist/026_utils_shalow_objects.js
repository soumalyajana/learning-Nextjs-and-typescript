"use strict";
const patch10 = { name: "Soumalya" };
const patch11 = { line1: "Street 42", city: "Kolkata" };
const userAllPatch11 = {
    id: "u2",
    name: "Soumalya",
    address: { line1: "Line 2", city: "Kolkata" },
    email: "test@example.com",
};
const readonlyUser = {
    id: "u3",
    name: "Subhadip",
    email: "readonly@example.com",
    address: { line1: "Static Road", city: "Medinipur" },
};
// ❌ readonlyUser.name = "Soumalya"; // Error: cannot assign to 'name' because it's read-only.
console.log("Partial:", patch10);
console.log("Required:", userAllPatch11);
console.log("Readonly:", readonlyUser);
const user1 = {
    id: "u1",
    name: "Soumalya",
};
const userContact = {
    email: "soumalya@example.com",
    address: { line1: "MG Road", city: "Medinipur" },
};
console.log("Basic User Info:", user1);
console.log("Contact Info:", userContact);
const userWithoutEmail = {
    id: "u100",
    name: "Soumalya",
    address: { line1: "MG Road", city: "Medinipur" },
};
console.log("User Without Email:", userWithoutEmail);
