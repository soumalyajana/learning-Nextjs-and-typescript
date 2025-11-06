// ✅ Generic Identity Function
function id<T>(x: T): T {
  return x;
}

// TypeScript infers the type of T automatically
const numResult = id(5);            // T is inferred as number
const strResult = id("Soumalya");   // T is inferred as string
const arrResult = id(["Soumalya"]); // T is inferred as string[]

console.log(numResult + 1);         // 6
console.log(strResult.toUpperCase()); // "SOUMALYA"
console.log(arrResult);             // ["Soumalya"]


// ✅ Another Example — firstGen<T>
function firstGen<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(firstGen([1, 2, 3, 4, 5, 6]));   // inferred T = number
console.log(firstGen(["Soumalya", "Jana"])); // inferred T = string
console.log(firstGen([true, false]));        // inferred T = boolean


// ✅ wrap<T> — returning a generic object
function wrap<T>(value: T): { value: T } {
  return { value };
}

const wrappedNumber = wrap(10);         // T inferred as number
const wrappedString = wrap("hello");    // T inferred as string
const wrappedArray = wrap([1, 2, 3]);   // T inferred as number[]

console.log(wrappedNumber.value);  // 10
console.log(wrappedString.value);  // "hello"
console.log(wrappedArray.value);   // [1, 2, 3]
