// ✅ Define a User interface
interface User333 {
  id: string; // id must be a string
  name: string; // name must be a string
  email?: string; // email is optional (notice the ?)
  readonly createAt: Date; // readonly means it cannot be changed after initialization
}

// ✅ Create an object that matches the User333 interface
const user333: User333 = {
  id: "1",
  name: "Soumalya Jana",
  createAt: new Date(),
  email: "soumlayajana2003@gmail.com",
};

// ✅ Extend User333 to create an Admin interface
interface Admin333 extends User333 {
  permission: string[]; // Admins have an array of permissions
}

// ❌ ERROR in your code: you used number for id, but User333 expects string
// ✅ FIX: make id a string
const admin333: Admin333 = {
  id: "2", // must be string (not number)
  name: "Soumalya Jana is admin",
  createAt: new Date(),
  email: "XYZ@gmail.com",
  permission: ["admin"],
};

// ✅ Create another interface that adds metadata
interface Meta {
  meta: {
    active: boolean;
  };
}

// ❌ WRONG: `const adminWithMe333 extends ...`
//    `extends` is only used with `interface` or `class`, not with `const`

// ✅ FIX: create a new interface that combines both Admin333 and Meta
interface AdminWithMeta333 extends Admin333, Meta {}

// ✅ Now we can create an object of that combined interface
const adminWithMeta333: AdminWithMeta333 = {
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
