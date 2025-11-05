function greetPersonOptional(name?: string ) : string {
    const upperRes =name?  name?.toUpperCase() : "Guest"
    return `Hello ${upperRes}`
}

console.log(greetPersonOptional("soumlaya"));
console.log(greetPersonOptional());

function greetPersonDefault(name: string = "Guest") : string {
    return `Hello ${name.toUpperCase()}`;
}


function connect(host : string, port? : number , secure?: boolean){
    const p = port?? 80;
    const s = secure?? false
    return `Connecct ${host} ${p} ${secure}`
}

connect('localhost');