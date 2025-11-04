// ✅ Example: Union Types in TypeScript
// A "union type" allows a value to be one of several types.

// ----------------------------------------------------
// 1️⃣ Value Union Example (string | number)
// ----------------------------------------------------
function printId(id: string | number) {
  // TypeScript doesn't know if 'id' is string or number at first
  // So we must "narrow" the type using typeof check

  if (typeof id === "string") {
    // Here, TS knows id is string
    console.log("String ID:", id.toUpperCase()); // safe
  } else {
    // Here, TS knows id is number
    console.log("Number ID (formatted):", id.toFixed(2)); // safe
  }
}

// Test:
printId("abc123");
printId(42);

// ----------------------------------------------------
// 2️⃣ Object Union Example (Admin | Customer)
// ----------------------------------------------------
type Admin = { role: "Admin"; permissions: string[] };
type Customer = { role: "Customer"; loyaltyPoints: number };

function describeUser(user: Admin | Customer) {
  // Type narrowing using discriminated union (role field)
  if (user.role === "Admin") {
    console.log("👑 Admin Permissions:", user.permissions.join(", "));
  } else {
    console.log("🛒 Customer Loyalty Points:", user.loyaltyPoints);
  }
}

// Test:
describeUser({ role: "Admin", permissions: ["read", "write", "delete"] });
describeUser({ role: "Customer", loyaltyPoints: 120 });

// ----------------------------------------------------
// 3️⃣ Type Narrowing using 'in' Operator
// ----------------------------------------------------
function describeUserWithInOperator(user: Admin | Customer) {
  if ("permissions" in user) {
    console.log("Admin user detected! Permissions:", user.permissions);
  } else {
    console.log("Customer user detected! Points:", user.loyaltyPoints);
  }
}

// Test:
describeUserWithInOperator({ role: "Admin", permissions: ["manage-users"] });
describeUserWithInOperator({ role: "Customer", loyaltyPoints: 75 });

// ----------------------------------------------------
// 4️⃣ Array of Unions vs Union of Arrays
// ----------------------------------------------------

// Array of unions -> each element can be string or number
const arrayOfUnions: (string | number)[] = ["a", 1, "b", 2];

// Union of arrays -> entire array is either all strings or all numbers
const unionOfArrays: string[] | number[] =
  Math.random() > 0.5 ? ["x", "y", "z"] : [10, 20, 30];

// Type Narrowing Example:
if (typeof unionOfArrays[0] === "string") {
  console.log("All strings:", unionOfArrays.join(", "));
} else {
  // console.log("All numbers:", unionOfArrays.reduce((a, b) => a + b, 0));
}


// ----------------------------------------------------
// 5️⃣ Bonus Example: Function returning different types
// ----------------------------------------------------
function getValue(flag: boolean): string | number {
  return flag ? "TypeScript" : 101;
}


const value = getValue(Math.random() > 0.5);
if (typeof value === "string") {
  console.log("Got a string:", value.toLowerCase());
} else {
  console.log("Got a number:", value.toFixed(1));
}






// ✅ TypeScript Practice Set: Union Types & Type Narrowing

// ----------------------------------------------------
// Q1️⃣ Value Union Practice
// ----------------------------------------------------
// Create a function `formatInput(input: string | number | boolean)`
// - If string → convert to uppercase
// - If number → double it
// - If boolean → reverse it (true -> false)
// Test with all 3 input types.


function formatInput(input : string | number | boolean) {
  if(typeof input === 'string'){
    console.log(input.toUpperCase());
  }else if(typeof input === 'number'){
    console.log(input * input);
  }else {
    console.log("Reversed Boolean:", !input);
  }
}

formatInput("typescript");
formatInput(10);
formatInput(true);


// ----------------------------------------------------
// Q2️⃣ Object Union (Discriminated Union)
// ----------------------------------------------------
// Define:
// type Bird = { type: "bird"; canFly: boolean; wings: number };
// type Fish = { type: "fish"; canSwim: boolean; fins: number };
// Create a function `describeAnimal(animal: Bird | Fish)`
// - If bird → log "Bird with X wings"
// - If fish → log "Fish with X fins"

type Bird = { type: "bird"; canFly: boolean; wings: number };
type Fish = { type: "fish"; canSwim: boolean; fins: number };

function describeAnimal(animal: Bird | Fish){
  if(animal.type == 'bird'){
    console.log(`Bird with ${animal.wings} wings. Can fly: ${animal.canFly}`)
  }else {
    console.log(`Fish with ${animal.fins} fins. Can swim: ${animal.canSwim}`);
  }
}

describeAnimal({ type: "bird", canFly: true, wings: 2 });
describeAnimal({ type: "fish", canSwim: true, fins: 3 });



// ----------------------------------------------------
// Q3️⃣ Narrowing with 'in' Operator
// ----------------------------------------------------
// Define:
// type Car = { make: string; seats: number; drive: () => void };
// type Bike = { make: string; pedals: boolean };
// Create a function `getVehicleInfo(vehicle: Car | Bike)`
// - Use 'in' operator to detect the type
// - Log details accordingly.

type Car = { make: string; seats: number; drive: () => void };
type Bike = { make: string; pedals: boolean };

function getVehicleInfo(vehicle: Car | Bike){
  if("drive"in vehicle){
    
  }
}



// ----------------------------------------------------
// Q4️⃣ Union of Arrays vs Array of Unions
// ----------------------------------------------------
// 1️⃣ Create an array where each element can be string or number
// 2️⃣ Create another variable that can be either all strings or all numbers
// - Loop through both and narrow types using typeof.


// ----------------------------------------------------
// Q5️⃣ Function Returning Union
// ----------------------------------------------------
// Write a function `getRandomData()` that randomly returns one of:
// - A string
// - A number
// - A boolean
// Then use type narrowing to handle each case.


// ----------------------------------------------------
// Q6️⃣ Union with Custom Types
// ----------------------------------------------------
// Define:
// type Success = { status: "success"; data: string };
// type Error = { status: "error"; message: string };
// Create a function `handleResponse(res: Success | Error)`
// - If success → log "✅ Data received: ..."
// - If error → log "❌ Error occurred: ..."


// ----------------------------------------------------
// Q7️⃣ Union in Parameters
// ----------------------------------------------------
// Create a function `logCoordinate(coord: string | [number, number])`
// - If string → log "Coordinate string: <value>"
// - If array → log "X: <first>, Y: <second>"



// ----------------------------------------------------
// Q8️⃣ Nested Union
// ----------------------------------------------------
// Write a function `processValue(value: string | number | string[] | number[])`
// - If string → uppercase it
// - If number → square it
// - If string[] → join with commas
// - If number[] → calculate the sum
