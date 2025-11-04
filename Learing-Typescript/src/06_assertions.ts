// const raw = '{"id" : 1, "name" :"A" }';
// const riskyUser = JSON.parse(raw) as {id :number ; name : string};
// console.log(riskyUser.name);




// 🎯 TypeScript Practice Set — Type Assertions (06_assertions.ts)


// 🧩 Q1
// Create a variable `value` of type unknown and assign it a string.
// Then assert it as a string and log its length.

let value: unknown = "Soumalya Jana";

// ✅ Using type assertion to treat `value` as string
console.log((value as string).length); // Output: 13


// 🧩 Q2
// Create a variable `input` with type unknown and assign it a number.
// Use type assertion to treat it as a number and add 10 to it, then log the result.

let input: unknown = 20;

// ✅ Assert input as a number before arithmetic
let result = (input as number) + 10;
console.log(result); // Output: 30


// 🧩 Q3
// Create a function getLength(data: string | number): number
// If data is a string, return its length.
// If it's a number, convert it to string first using assertion and then return its length.

function getLength(data: string | number): number {
  if (typeof data === "string") {
    return data.length;
  } else {
    return (data as number).toString().length;
  }
}

console.log(getLength("Soumalya")); // 8
console.log(getLength(123456));     // 6


// 🧩 Q4
// Create a variable `someValue` of type any and assign it "TypeScript".
// Use both type assertion syntaxes (`as` and angle brackets) to get its length.

let someValue: any = "TypeScript";

// ✅ Using `as` syntax
let len1 = (someValue as string).length;

// ✅ Using angle bracket syntax
let len2 = (<string>someValue).length;

console.log(len1, len2); // 10 10


// 🧩 Q5
// Create a function handleEvent(event: Event)
// Inside it, assert the event as an HTMLInputElement and log its value.
// (You can simulate this with a simple object having a value property.)

function handleEvent(event: Event) {
  const inputElement = event as unknown as { value: string };
  console.log("Input value:", inputElement.value);
}

// Simulate a fake event object
const fakeEvent = { value: "Hello TS" } as unknown as Event;
handleEvent(fakeEvent); // Output: Input value: Hello TS


// 🧩 Q6
// Create an interface `User` with properties name (string) and age (number).
// Then create an empty object {} and use type assertion to treat it as `User`.
// Assign name and age values afterward and log the object.

interface User {
  name: string;
  age: number;
}

// Assert an empty object as User
let newUser = {} as User;

newUser.name = "Soumalya";
newUser.age = 23;

console.log(newUser); // Output: { name: "Soumalya", age: 23 }
