"use strict";
// ✅ Create an object that matches the User333 interface
const user333 = {
    id: "1",
    name: "Soumalya Jana",
    createAt: new Date(),
    email: "soumlayajana2003@gmail.com",
};
// ❌ ERROR in your code: you used number for id, but User333 expects string
// ✅ FIX: make id a string
const admin333 = {
    id: "2", // must be string (not number)
    name: "Soumalya Jana is admin",
    createAt: new Date(),
    email: "XYZ@gmail.com",
    permission: ["admin"],
};
// ✅ Now we can create an object of that combined interface
const adminWithMeta333 = {
    id: "3",
    name: "Soumalya Jana (Admin with Meta)",
    createAt: new Date(),
    email: "XYZ@gmail.com",
    permission: ["admin"],
    meta: {
        active: true, // from Meta interface
    },
};
// ✅ Example: trying to modify readonly property will cause an error
// adminWithMeta333.createAt = new Date(); // ❌ ERROR: Cannot assign to 'createAt' because it is a read-only property
