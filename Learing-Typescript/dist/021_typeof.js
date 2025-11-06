"use strict";
function descriptionTypesOf(x) {
    if (typeof x === "string") {
        return `It's a string with value "${x}"`;
    }
    else if (typeof x === "number") {
        return `It's a number with value ${x}`;
    }
    else if (typeof x === "boolean") {
        return `It's a boolean with value ${x}`;
    }
    else if (x === null) {
        return "It's null";
    }
    else if (x === undefined) {
        return "It's undefined";
    }
    else if (x instanceof Array) {
        return `It's an Array with ${x.length} elements`;
    }
    else if (x instanceof Date) {
        return `It's a Date object: ${x.toISOString()}`;
    }
    else if (x instanceof Map) {
        return `It's a Map with ${x.size} entries`;
    }
    else if (x instanceof Set) {
        return `It's a Set with ${x.size} values`;
    }
    else if (x instanceof RegExp) {
        return `It's a Regular Expression: ${x}`;
    }
    else if (typeof x === "function") {
        return "It's a Function";
    }
    else if (x instanceof Object) {
        return "It's a plain Object";
    }
    else {
        return "Unknown type";
    }
}
// Testing with multiple examples
console.log(descriptionTypesOf("Hello"));
console.log(descriptionTypesOf(42));
console.log(descriptionTypesOf(true));
console.log(descriptionTypesOf(undefined));
console.log(descriptionTypesOf(null));
console.log(descriptionTypesOf([1, 2, 3]));
console.log(descriptionTypesOf(new Date()));
console.log(descriptionTypesOf(new Map([["a", 1], ["b", 2]])));
console.log(descriptionTypesOf(new Set([1, 2, 3])));
console.log(descriptionTypesOf(/abc/gi));
console.log(descriptionTypesOf({ name: "Soumalya", age: 21 }));
console.log(descriptionTypesOf(() => console.log("Hi")));
