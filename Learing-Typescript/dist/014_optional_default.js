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
function connect(host, port, secure) {
    const p = port ?? 80;
    const s = secure ?? false;
    return `Connecct ${host} ${p} ${secure}`;
}
connect('localhost');
