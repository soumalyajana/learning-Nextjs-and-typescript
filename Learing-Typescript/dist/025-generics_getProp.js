"use strict";
function getUserN7(obj, key) {
    return obj[key];
}
function setUserProps(obj, key, newVal) {
    obj[key] = newVal;
}
const user = {
    id: 'u1',
    name: 'Soumalya Jana',
    email: 'soumalya@example.com',
};
console.log("Before:", user);
// ✅ Using getUserN7
console.log("Get Name:", getUserN7(user, "name"));
// ✅ Using setUserProps
setUserProps(user, "name", "Subhadip");
setUserProps(user, "email", "subhadip@example.com");
console.log("After:", user);
