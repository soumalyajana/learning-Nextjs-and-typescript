// 🎯 Goal: Understand string literal types and how TypeScript infers them

// Define a union type — only specific string values are allowed
type Direction = "left" | "right" | "up";

function move(d: Direction) {
  console.log("Moving:", d);
}

// ✅ Example 1: Using const
const d1 = "left"; // TS infers literal type "left"
move(d1);          // ✅ Works fine


// ❌ Example 2: Using let (commented out)
// let d2 = "left";
// move(d2); 
// ❌ Error: Argument of type 'string' is not assignable to parameter of type 'Direction'.
// Reason: 'let' variables are inferred as general `string`, not the literal "left"

// ✅ Example 3: Annotate type explicitly
let d3: Direction = "left";
move(d3);          // ✅ Works fine

// ✅ Example 4: Invalid value (uncomment to test)
// move("down"); // ❌ Error: Argument of type '"down"' is not assignable to type 'Direction'.



// 🎯 TypeScript Practice Set: String Literal Types
// 🧠 Goal: Learn how to restrict string values to a fixed set of allowed options.


// 🧩 Q1
// Create a type Direction that allows only "up", "down", "left", or "right".
// Then create a variable move of that type and assign it one of those directions.

// Define the string literal type
type Direction = "up" | "down" | "left" | "right";

// Declare a variable of that type
let move: Direction = "up";

console.log("Moving:", move);

// ✅ Valid assignments:
move = "left";
move = "down";

// ❌ Invalid assignment (will cause TypeScript error)
// move = "forward"; // Error: Type '"forward"' is not assignable to type 'Direction'



// 🧩 Q2
// Create a type Theme that can only be "light" or "dark".
// Then write a function setTheme(theme: Theme): void 
// that logs "Theme set to <theme>".


type Theme = "light" | "dark";

function setTheme(theme : Theme) : void {
  console.log(`Theme set to ${theme}`);
}

setTheme("dark");
setTheme("light");


// 🧩 Q3
// Create a type Status with values "success", "error", and "loading".
// Then create a variable currentStatus: Status and assign it "success".
// Try assigning "failed" and see what happens.

type Status = "success"| "error" | "loading";

const currentStatus : Status = "failed"; // Type '"failed"' is not assignable to type 'Status'




// 🧩 Q4
// Create a type Role with possible values "admin", "user", "guest".
// Then create a function getAccessLevel(role: Role): string 
// that returns "Full Access" for admin, "Limited Access" for user,
// and "Read-Only" for guest.


type role = "admin"| "user"| "guest";

function getAccessLevel(Role : role){
  if(Role === "admin"){
    console.log("Full Access to admin");
  }else if(Role === "user"){
    console.log("Limited Access")
  }else {
    console.log("Read only")
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


