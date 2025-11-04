// 🎯 Goal: Understand `void`, `never`, and why to avoid `any`

// ✅ `void` — function does not return a useful value
function log(msg: string): void {
  console.log(msg);
}

// ✅ `never` — function never successfully returns (e.g., throws an error or infinite loop)
function neverLog(msg: string): never {
  throw new Error(msg);
}

log("Soumalya");

// ⚠️ Uncomment the line below to see how `never` behaves
// neverLog("Subhadip");


// ❌ Avoid using `any` — it disables TypeScript's type checking
// Example: This will cause runtime errors if you pass an invalid value.
let anyExample: any = "Soumalya"; // Should be initialized properly

console.log(anyExample.toUpperCase());

// ✅ Instead of `any`, prefer `unknown` when the type is uncertain
let safeExample: unknown = "Subhadip";

if (typeof safeExample === "string") {
  console.log(safeExample.toUpperCase());
}

// ❌ Using `any` allows *anything* — even invalid operations
function doubleValue(value: any) {
  // TypeScript won’t complain, but this can break at runtime
  return value * 2;
}

console.log(doubleValue(5));          // ✅ Works fine → 10
console.log(doubleValue("5"));        // 😬 Works but not ideal → "55"
console.log(doubleValue(true));       // 😬 true becomes 2
console.log(doubleValue({}));         // 💥 Runtime error: NaN





/// 🎯 TypeScript Practice Set: void, never, and avoiding any

// 🧩 Q1
// Create a function sayHello that prints "Hello Soumalya" to the console 
// but doesn’t return anything. (Use void as the return type)

function sayHello( name : string) : void {
  console.log(name);
} 
sayHello("soumalya");


// 🧩 Q2
// Create a function throwError that always throws an error with message 
// "Something went wrong". (Use never as the return type)

function throwError(): never {
  throw new Error("Something went wrong");
}

throwError();





// 🧩 Q3
// Declare a variable response with type any, assign it a string, 
// and then reassign it a number. 
// Then explain in a comment why any should be avoided.

let response: any = "OK";
response = 456; // now it’s a number
console.log(typeof response); // number

// ❌ any should be avoided because TypeScript won't catch type errors.




// 🧩 Q4
// Fix the any usage from above by using unknown instead, 
// and safely check its type before using it.

let responsese: unknown;

responsese = 20;

if (typeof responsese === "number") {
  console.log(responsese + 10); // safe to use as number
} else {
  console.log("Not a number");
}




// 🧩 Q5
// Create a function processInput that takes a parameter input of type 
// string | number and returns nothing. 
// If string, log "You entered a string". 
// If number, log "You entered a number". (Use void return type)

function processInput(input : string | number) : void {
  if(typeof input === "string"){
    console.log(input);
  }
  else{
    console.log("you enter a number");
  }
}
processInput(23);

// 🧩 Q6
// Write a function loopForever that runs an infinite loop. 
// (Hint: use never as the return type)

function loopForever(): never {
  while(true){
    console.log("Running forever...")
  }
}
loopForever();