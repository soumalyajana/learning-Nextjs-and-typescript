"use strict";
// ✅ Function with default parameter and typed return
function ExtractUserInfo(id, isExtraInfo = false) {
    return {
        id,
        name: 'Soumalya',
        log: isExtraInfo ? "details" : undefined,
    };
}
// ❌ Incorrect: You used `ReturnType` for args
// ✅ Correct: `Parameters` gives argument types (tuple)
const argsInfo = ["u1", true];
const resultInfo = ExtractUserInfo(...argsInfo);
// ✅ Class
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi, I am ${this.name}`;
    }
}
// ✅ Example usage
const resultInfo1 = ["Soumalya", 20];
const abc = new PersonN1(...resultInfo1);
