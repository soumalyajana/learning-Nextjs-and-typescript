// Day 1: Type Inference & Primitives
// 🟢 Easy: Declare a variable without type annotation and check how TypeScript infers its type.
// 🟡 Medium: Write a function add(a, b) that infers parameter and return types automatically.

const variable1 =  "soumalya";

if( typeof variable1 === "string"){
    console.log(variable1);
}


function add( a : number , b : number): number {
    return a + b;
}

console.log(add(2 ,4));

// Day 2: Special & Literal Types
// 🟢 Easy: Create variables using any, unknown, and void. Observe compiler differences.
// 🟡 Medium: Define a function that accepts only 'up' | 'down' | 'left' | 'right' as input.

let anyVar: any = 10;
anyVar = "hello"; // ✅ allowed

console.log(typeof anyVar);

let unknownVar: unknown = 20;
// unknownVar = unknownVar + 10; // ❌ Error: need type check first
if (typeof unknownVar === "number") {
  console.log(unknownVar + 10); // ✅ safe after type check
}

function logMessage(): void {
  console.log("This function returns nothing!");
}
logMessage();


type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}

move("up");    // ✅ OK
move("down");  // ✅ OK
// move("forward"); // ❌ Error: Argument not assignable to type 'Direction'
