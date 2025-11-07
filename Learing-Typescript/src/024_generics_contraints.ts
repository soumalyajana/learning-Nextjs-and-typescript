// Generic constraint:
// <T extends { length: number }> means
// "T must be any type that HAS a length property (which is a number)."

function lenN4<T extends { length: number }>(xN4: T): number {
  return xN4.length;
}

// ✅ All these work because they have a .length property
console.log(lenN4("hello"));                  // string → has .length
console.log(lenN4([1, 2, 3, 4, 5]));          // array → has .length
console.log(lenN4({ length: 10, tag: "ok" })); // object with length property

// ❌ ERROR — number doesn't have a .length
// console.log(lenN4(123));


type UserN6 = {
  id : string;
  name : string;
  age? : number
}

function userN6Extract<T , K extends keyof T>(arrN4 : T[], keyN4: K) : Array<T[K]>{
  return arrN4.map(item=>item[keyN4])
}
const userN5 : UserN6[] = [
  {
    id: '1', name : 'name1', age: 22
  },
  {
    id: '2', name : 'name2', 
  }
]

console.log(userN6Extract(userN5, 'age'))