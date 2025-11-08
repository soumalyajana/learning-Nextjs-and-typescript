"use strict";
// ✅ Proper class definition
class UserN15 {
    id;
    name;
    email; // 👈 mark as optional since it's not always initialized
    createdAt = new Date();
    constructor(id, name, email) {
        // ✅ assign required fields
        this.id = id;
        this.name = name;
        // ✅ assign optional field only if provided
        if (email)
            this.email = email;
    }
}
// ✅ Examples of creating instances
const result4 = new UserN15("1", "Soumalya");
const result5 = new UserN15("2", "Jonny", "test@gmail.com");
// ❌ BAD CLASS - invalid syntax
// const Bad {  ❌ Missing `class` keyword and type annotations incomplete
// ✅ FIXED version
class Bad {
    a;
    constructor() {
        this.a = "default value"; // ✅ must assign all required properties
    }
}
