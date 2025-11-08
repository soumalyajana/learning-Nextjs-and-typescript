// --------------------------------------------------------
// 🔹 Exclude<U, V>
// Removes from `U` those members that are assignable to `V`
// --------------------------------------------------------
type EventTypes1 = "click" | "submit" | "hover" | "keyUp" | "keyDown";

// ✅ Removes "keyDown"
type EventTypes2 = Exclude<EventTypes1, "keyDown">;
// Result → "click" | "submit" | "hover" | "keyUp"

function handleEvent1(e: EventTypes2) {
  console.log(e);
}

handleEvent1("click"); // ✅ valid
// handleEvent1("keyDown"); ❌ Error: "keyDown" was excluded




// --------------------------------------------------------
// 🔹 Extract<U, V>
// Keeps from `U` only those members that are assignable to `V`
// --------------------------------------------------------
type ActionsN1 = "create" | "update" | "delete" | "read";
type ActionsN2 = Extract<ActionsN1, "create" | "delete" | "read" | "update">;
// Result → "create" | "update" | "delete" | "read" (same as ActionsN1)

function handleEvent2(e: ActionsN2) {
  console.log(e);
}

handleEvent2("read"); // ✅ valid




// --------------------------------------------------------
// 🔹 NonNullable<T>
// Removes `null` and `undefined` from a type
// --------------------------------------------------------
type MaybeNumber = number | null | undefined;
type CleanNumber = NonNullable<MaybeNumber>;
// Result → number

function square(num: CleanNumber) {
  return num * 2;
}

square(10);  // ✅ valid
// square(null); ❌ Error: Argument of type 'null' is not assignable to parameter of type 'number'
