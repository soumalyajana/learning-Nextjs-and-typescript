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
function userN6Extract(arrN4, keyN4) {
    return arrN4.map(item => item[keyN4]);
}
const userN5 = [
    {
        id: '1', name: 'name1', age: 22
    },
    {
        id: '2', name: 'name2',
    }
];
console.log(userN6Extract(userN5, 'age'));
