function greetPersonOptional(name?: string ) : string {
    const upperRes =name?  name?.toUpperCase() : "Guest"
    return `Hello ${upperRes}`
}

console.log(greetPersonOptional("soumlaya"));
console.log(greetPersonOptional());

function greetPersonDefault(name: string = "Guest") : string {
    return `Hello ${name.toUpperCase()}`;
}