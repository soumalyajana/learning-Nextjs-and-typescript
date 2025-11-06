// ✅ Type inference example
const doubleFunc = (n: number) => n * 2;
// TypeScript infers: (n: number) => number

export function toTitle(s: string): string {
  return `Hello ${s}`;
}
// Inferred return type: string

function booleanToNumber(flag: boolean): number {
  return flag ? 1 : 0;
}
// Inferred return type: number


// ❌ Problem here:
// `params: type` -> 'type' is not defined.
// Also, async functions automatically return a Promise<T>.

async function loadCountInferred(params?: unknown): Promise<number> {
  // 'params' is optional here, can be ignored if not needed.
  return 42;
}

// ✅ Using the function
loadCountInferred().then((n) => {
  console.log("Count:", n);
});
