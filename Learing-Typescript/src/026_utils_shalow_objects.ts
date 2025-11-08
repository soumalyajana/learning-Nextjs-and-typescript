// ✅ 1️⃣ Define an Address type
type AddressN8 = {
  line1: string;
  city: string;
};

// ✅ 2️⃣ Define a User type
type User10 = {
  id: string;
  name: string;
  email: string;
  address: AddressN8;  // 👈 nested object
};

/* 
✅ 3️⃣ Partial<T>
-----------------
- Makes **all properties optional**.
- Useful when updating or patching only a few fields.
*/
type UserPatch10 = Partial<User10>;

const patch10: UserPatch10 = { name: "Soumalya" }; 
const patch11: AddressN8 = { line1: "Street 42", city: "Kolkata" }; 


/* 
✅ 4️⃣ Required<T>
-----------------
- Makes **all properties mandatory**.
- Even if original type had optional fields, now all must be filled.
*/
type UserAllRequiredN10 = Required<User10>;

const userAllPatch11: UserAllRequiredN10 = {
  id: "u2",
  name: "Soumalya",
  address: { line1: "Line 2", city: "Kolkata" },
  email: "test@example.com",
};


/* 
✅ 5️⃣ Readonly<T>
-----------------
- Makes all properties **read-only**, so they can’t be changed after assignment.
*/
type ReadonlyUserN10 = Readonly<User10>;

const readonlyUser: ReadonlyUserN10 = {
  id: "u3",
  name: "Subhadip",
  email: "readonly@example.com",
  address: { line1: "Static Road", city: "Medinipur" },
};

// ❌ readonlyUser.name = "Soumalya"; // Error: cannot assign to 'name' because it's read-only.

console.log("Partial:", patch10);
console.log("Required:", userAllPatch11);
console.log("Readonly:", readonlyUser);


/* 
✅ 6️⃣ Pick<T, K>
-----------------
👉 Creates a new type by **picking** specific keys (K) from an existing type (T).
*/
type BasicUserInfo = Pick<User10, "id" | "name">;
type ContactInfo = Pick<User10, "email" | "address">;

const user1: BasicUserInfo = {
  id: "u1",
  name: "Soumalya",
};

const userContact: ContactInfo = {
  email: "soumalya@example.com",
  address: { line1: "MG Road", city: "Medinipur" },
};

console.log("Basic User Info:", user1);
console.log("Contact Info:", userContact);


/* 
✅ 7️⃣ Omit<T, K>
-----------------
👉 Opposite of Pick.
👉 Removes specific properties (K) from type T.
*/
type UserWithoutEmailN10 = Omit<User10, "email">;

const userWithoutEmail: UserWithoutEmailN10 = {
  id: "u100",
  name: "Soumalya",
  address: { line1: "MG Road", city: "Medinipur" },
};

console.log("User Without Email:", userWithoutEmail);
