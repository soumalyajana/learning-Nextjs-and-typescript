"use strict";
// ✅ Awaited<T> unwraps the resolved type of a Promise
// 👆 Resolves to `string | number`
// ✅ Example: Using Awaited with function return types
async function fetchCount() {
    return 42;
}
// 👆 ReturnType<typeof fetchCount> = Promise<number>
// Awaited<Promise<number>> = number
// ✅ Function returning Promises inside an array
async function getData() {
    return Promise.resolve([
        Promise.resolve(1),
        Promise.resolve("X"),
    ]);
    // 👆 returns Promise<Promise<(1 | "X")[]>>
    // (each element is a Promise)
}
// 👆 Step-by-step explanation:
// 1. ReturnType<typeof getData> → Promise<Promise<(1 | "X")[]>>
// 2. Awaited<Promise<Promise<(1 | "X")[]>>> → Promise<(1 | "X")[]>
// 3. Awaited<Promise<(1 | "X")[]>> → (1 | "X")[]
// ✅ Final Type → (1 | "X")[]
