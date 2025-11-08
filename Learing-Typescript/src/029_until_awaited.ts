// ✅ Awaited<T> unwraps the resolved type of a Promise

// Example 1️⃣: Simple Promise
type Promise1 = Awaited<Promise<number>>; 
// 👆 `Promise<number>` resolves to `number`

// Example 2️⃣: Nested Promise
type Promise2 = Awaited<Promise<Promise<string>>>; 
// 👆 `Promise<Promise<string>>` eventually resolves to `string`

// Example 3️⃣: Non-Promise
type Promise3 = Awaited<string>; 
// 👆 If T is not a Promise, Awaited<T> = T (so it's just `string`)

// Example 4️⃣: Union of Promises
type PromisesUnionExample = Awaited<Promise<string | number>>; 
// 👆 Resolves to `string | number`

// ✅ Example: Using Awaited with function return types
async function fetchCount() {
  return 42;
}

// ❌ Original: `async ResolvedFetchCountValue = ...` (invalid syntax)
// ✅ Fixed: define a *type*, not an async variable
type ResolvedFetchCountValue = Awaited<ReturnType<typeof fetchCount>>;
// 👆 ReturnType<typeof fetchCount> = Promise<number>
// Awaited<Promise<number>> = number



// ✅ Function returning Promises inside an array
async function getData() {
  return Promise.resolve([
    Promise.resolve(1 as const),
    Promise.resolve("X" as const),
  ]);
  // 👆 returns Promise<Promise<(1 | "X")[]>>
  // (each element is a Promise)
}

// ✅ Extract the *final resolved type*
type DataTupleWithPromise = Awaited<ReturnType<typeof getData>>;
// 👆 Step-by-step explanation:
// 1. ReturnType<typeof getData> → Promise<Promise<(1 | "X")[]>>
// 2. Awaited<Promise<Promise<(1 | "X")[]>>> → Promise<(1 | "X")[]>
// 3. Awaited<Promise<(1 | "X")[]>> → (1 | "X")[]
// ✅ Final Type → (1 | "X")[]
