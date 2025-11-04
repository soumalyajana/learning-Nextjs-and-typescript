"use strict";
// let username : string = "sangam";
// let age : number = 40;
// let isCreator : boolean = true;
// let big : bigint = 2n ** 63n -1n;
// // Operator '+' cannot be applied to types 'boolean' and 'number'.ts(2365)
// // const mix = isCreator + age;
// // Operator '+' cannot be applied to types 'bigint' and 'number'.
// // const mixNum = big + age;
// const Token : unique symbol = Symbol('Token')
// function yearsTodays(years : number) : number {
//     return years * 365;
// }
// console.log(username.toUpperCase());
// console.log(yearsTodays(2)); // if i give data to funtion as a string ("2") like this then it willl give me error
// Primitive Types Practice Set
// Declare a variable userName and assign it a string value. (Let TS infer the type)
const userName = "soumalya"; // so ts will autometically findout what is the infer value
//Declare a variable age and assign it a number value. (Use explicit type annotation)
const age = 23;
//Declare a boolean variable isActive and assign it a value. (Let TS infer the type)
const isActive = true;
// Create a variable price that can be either a number or null.
const variable = 0;
// Declare a variable nothingHere and assign it undefined. (Explicit annotation)
let myVariable;
console.log(myVariable); // Output: undefined
// Create a symbol called uniqueId with description "id".
const uniqueId = Symbol('token');
// Declare a bigint variable named hugeNumber and assign a large value.
const bigNum = 2n ** 63n - 1n;
;
// Declare a constant greeting with value "Hello, World!". (No type annotation — let TS infer)
const greeting = "Hello world";
// Create a variable statusMessage that can hold either a string or boolean.
const statusMessage = true;
// Declare a variable temperature of type number, but don’t assign any value yet.
let temperature;
temperature = 34;
