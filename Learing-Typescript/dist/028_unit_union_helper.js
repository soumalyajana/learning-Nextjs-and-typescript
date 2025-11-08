"use strict";
// Result → "click" | "submit" | "hover" | "keyUp"
function handleEvent1(e) {
    console.log(e);
}
handleEvent1("click"); // ✅ valid
// Result → "create" | "update" | "delete" | "read" (same as ActionsN1)
function handleEvent2(e) {
    console.log(e);
}
handleEvent2("read"); // ✅ valid
// Result → number
function square(num) {
    return num * 2;
}
square(10); // ✅ valid
// square(null); ❌ Error: Argument of type 'null' is not assignable to parameter of type 'number'
