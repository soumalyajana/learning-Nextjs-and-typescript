// ✅ Type inference example
const doubleFunc = (n) => n * 2;
// TypeScript infers: (n: number) => number
export function toTitle(s) {
    return `Hello ${s}`;
}
// Inferred return type: string
function booleanToNumber(flag) {
    return flag ? 1 : 0;
}
// Inferred return type: number
// ❌ Problem here:
// `params: type` -> 'type' is not defined.
// Also, async functions automatically return a Promise<T>.
async function loadCountInferred(params) {
    // 'params' is optional here, can be ignored if not needed.
    return 42;
}
// ✅ Using the function
loadCountInferred().then((n) => {
    console.log("Count:", n);
});
