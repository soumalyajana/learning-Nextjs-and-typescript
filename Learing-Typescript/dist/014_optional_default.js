"use strict";
function greetPersonOptional(name) {
    const upperRes = name ? name?.toUpperCase() : "Guest";
    return `Hello ${upperRes}`;
}
console.log(greetPersonOptional("soumlaya"));
console.log(greetPersonOptional());
function greetPersonDefault(name = "Guest") {
    return `Hello ${name.toUpperCase()}`;
}
