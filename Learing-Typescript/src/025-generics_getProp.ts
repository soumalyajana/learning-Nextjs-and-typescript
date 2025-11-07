type UserN7 = {
  id: string;
  name: string;
  email: string;
};

function getUserN7<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function setUserProps<T, K extends keyof T>(
  obj: T,
  key: K,
  newVal: T[K]
): void {
  obj[key] = newVal;
}

const user: UserN7 = {
  id: 'u1',
  name: 'Soumalya Jana',
  email: 'soumalya@example.com',
};

console.log("Before:", user);

// ✅ Using getUserN7
console.log("Get Name:", getUserN7(user, "name"));

// ✅ Using setUserProps
setUserProps(user, "name", "Subhadip");
setUserProps(user, "email", "subhadip@example.com");

console.log("After:", user);
