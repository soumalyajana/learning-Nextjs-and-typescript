"use strict";
// 🎯 Goal: Understand string literal types and how TypeScript infers them
function move(d) {
    console.log("Moving:", d);
}
// ✅ Example 1: Using const
const d1 = "left"; // TS infers literal type "left"
move(d1); // ✅ Works fine
// ❌ Example 2: Using let (commented out)
// let d2 = "left";
// move(d2); 
// ❌ Error: Argument of type 'string' is not assignable to parameter of type 'Direction'.
// Reason: 'let' variables are inferred as general `string`, not the literal "left"
// ✅ Example 3: Annotate type explicitly
let d3 = "left";
move(d3); // ✅ Works fine
// Declare a variable of that type
let move = "up";
console.log("Moving:", move);
// ✅ Valid assignments:
move = "left";
move = "down";
function setTheme(theme) {
    console.log(`Theme set to ${theme}`);
}
setTheme("dark");
setTheme("light");
const currentStatus = "failed"; // Type '"failed"' is not assignable to type 'Status'
function getAccessLevel(Role) {
    if (Role === "admin") {
        console.log("Full Access to admin");
    }
    else if (Role === "user") {
        console.log("Limited Access");
    }
    else {
        console.log("Read only");
    }
}
getAccessLevel("admin");
getAccessLevel("guest");
getAccessLevel("user");
// 🧩 Q5
// Create a type ResponseCode that allows "OK", "NOT_FOUND", or "UNAUTHORIZED".
// Then create a function handleResponse(code: ResponseCode): void 
// that logs a message based on the code value.
// Example:
// handleResponse("OK") → "Request successful!"
// handleResponse("NOT_FOUND") → "Resource not found."
// handleResponse("UNAUTHORIZED") → "Please log in first."
