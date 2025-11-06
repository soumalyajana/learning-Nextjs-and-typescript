"use strict";
// Generic constraint:
// <T extends { length: number }> means
// "T must be any type that HAS a length property (which is a number)."
function lenN4(xN4) {
    return xN4.length;
}
// ✅ All these work because they have a .length property
console.log(lenN4("hello")); // string → has .length
console.log(lenN4([1, 2, 3, 4, 5])); // array → has .length
console.log(lenN4({ length: 10, tag: "ok" })); // object with length property
// ❌ ERROR — number doesn't have a .length
// console.log(lenN4(123));
