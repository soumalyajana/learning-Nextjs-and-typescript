"use strict";
function describeUserExample(u) {
    if ("permission" in u) {
        // TypeScript automatically knows this must be InExample1
        return `Admin permissions: ${u.permission.join(", ")}`;
    }
    // Here TypeScript knows it's InExample2
    return `User expires at: ${u.expireAt.toISOString()}`;
}
// Testing both cases
console.log(describeUserExample({ role: "Admin", permission: ["read", "write"] }));
console.log(describeUserExample({ role: "User", expireAt: new Date("2025-12-31") }));
// ✅ Fixed object — email key must be declared
const P1N3 = { name: "Soumalya Jana" };
const P2N3 = {
    name: "Subhadip",
    contact: { email: "Soumlayajana2003@gmail.com" },
};
// ✅ Optional chaining — prevents runtime crash if contact is undefined
const emailFromP1 = P1N3.contact?.email; // undefined (no contact)
const emailFromP2 = P2N3.contact?.email; // "Soumlayajana2003@gmail.com"
console.log("Email 1:", emailFromP1);
console.log("Email 2:", emailFromP2);
// ✅ Nullish Coalescing (??)
const countFromServerN3 = 0;
const labelFromServerN3 = "";
// ?? only replaces null or undefined — not 0 or ""
const aN3 = countFromServerN3 ?? 100; // keeps 0 because it's NOT null/undefined
const bN3 = labelFromServerN3 ?? "Default Label"; // keeps "" because it's not undefined
const cN3 = undefined ?? "Fallback"; // "Fallback"
console.log("aN3:", aN3); // 0
console.log("bN3:", bN3); // ""
console.log("cN3:", cN3); // "Fallback"
