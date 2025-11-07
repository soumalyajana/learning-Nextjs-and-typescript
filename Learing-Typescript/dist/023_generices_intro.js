"use strict";
// ✅ Generic Identity Function
function id(x) {
    return x;
}
// TypeScript infers the type of T automatically
const numResult = id(5); // T is inferred as number
const strResult = id("Soumalya"); // T is inferred as string
const arrResult = id(["Soumalya"]); // T is inferred as string[]
console.log(numResult + 1); // 6
console.log(strResult.toUpperCase()); // "SOUMALYA"
console.log(arrResult); // ["Soumalya"]
// ✅ Another Example — firstGen<T>
function firstGen(arr) {
    return arr[0];
}
console.log(firstGen([1, 2, 3, 4, 5, 6])); // inferred T = number
console.log(firstGen(["Soumalya", "Jana"])); // inferred T = string
console.log(firstGen([true, false])); // inferred T = boolean
// ✅ wrap<T> — returning a generic object
function wrap(value) {
    return { value };
}
const wrappedNumber = wrap(10); // T inferred as number
const wrappedString = wrap("hello"); // T inferred as string
const wrappedArray = wrap([1, 2, 3]); // T inferred as number[]
console.log(wrappedNumber.value); // 10
console.log(wrappedString.value); // "hello"
console.log(wrappedArray.value); // [1, 2, 3]
// Practice Questions — Generics
// Swap Function
// Write a generic function swap that takes a tuple [T, U] and returns [U, T].
// Test: Swap [1, "Hello"] and [true, 42].
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
const swapped1 = swap([1, "Soumalya"]);
const swapped2 = swap([true, 42]);
console.log("Swap Test 1:", swapped1); // ["Soumalya", 1]
console.log("Swap Test 2:", swapped2); // [42, true]
// Filter Array
// Write a generic function filterArr that filters elements from an array based on a predicate function.
// Test: Filter numbers greater than 3 from [1,2,3,4,5] and strings that include "a" from ["Soumalya", "Jana", "OpenAI"].
function filterArr(arr, predicate) {
    return arr.filter(predicate);
}
const numbers = [1, 2, 3, 4, 5, 6];
const string = ["Soumalya", "Jana", "OpenAI"];
console.log("Filter Numbers >3:", filterArr(numbers, n => n > 3));
console.log("Filter string where a is include ", filterArr(string, s => s.includes("a")));
// Key Extractor
// Write a generic function getValue that takes an object and a key, and returns the value at that key.
// Test: Use { name: "Soumalya", age: 21, isStudent: true } and get values for "name", "age", and "isStudent".
function getValue(obj, key) {
    return obj[key];
}
const person = { name: "Soumalya", age: 21, isStudent: true };
console.log("Get Name:", getValue(person, "name")); // "Soumalya"
console.log("Get Age:", getValue(person, "age")); // 21
console.log("Get isStudent:", getValue(person, "isStudent")); // true
// Map With ID
// Write a generic function mapWithId that converts an array into an array of objects { id: number, value: T }.
// Test: Map ["a","b","c"] and [10,20,30].
function mapWithId(arr) {
    return arr.map((value, index) => ({ id: index + 1, value }));
}
console.log("Map Strings with ID:", mapWithId(["a", "b", "c"]));
// [{id: 1, value: "a"}, {id: 2, value: "b"}, {id: 3, value: "c"}]
console.log("Map Numbers with ID:", mapWithId([10, 20, 30]));
// [{id: 1, value: 10}, {id: 2, value: 20}, {id: 3, value: 30}]
