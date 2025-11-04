// 🎯 Goal: Understand optional (?), readonly, and Record types

// `email?: string` → means "email may be absent"
// This is NOT the same as `email: string | undefined`,
// which means "email must exist but can hold undefined"

type UserInfo = {
  id: string;                 // required
  name: string;
  email?: string;             // optional
  readonly createdAt: Date;   // cannot be reassigned
};

const user1: UserInfo = { id: "u1", name: "Sangam", createdAt: new Date() };
const user2: UserInfo = { id: "u2", name: "Soumalya", createdAt: new Date(), email: "test@email.com" };

// ❌ Invalid: 'createdAt' is readonly, so it cannot be reassigned
// user1.createdAt = new Date(); // ❌ Error


// 🧠 Difference between optional and explicit undefined

type User2 = { email?: string };             // property may not exist at all
type User3 = { email: string | undefined };  // property must exist, but can be undefined


// ✅ Index Signature
// Any string key will map to a number
type Count = { [k: string]: number };

const c1: Count = { whatever: 1, total: 5 };


// ✅ Record Type (alternative to index signatures)
// Record<Keys, Value>
type Count1 = Record<"likes" | "views" | "shares" | "souvik", number>;

const c2: Count1 = {
  likes: 1,
  views: 2,
  shares: 3,
  souvik: 5, // ✅ all keys must be present
};

// ❌ Error Example: "random" is not part of the allowed keys
// const c3: Count1 = { likes: 1, views: 2, shares: 3, random: 5 }; // ❌ Error





// 🎯 TypeScript Practice Set: Object Types

// 🧩 Q1
// Create an object named user with properties: 
// name (string), age (number), and isAdmin (boolean). 
// Let TypeScript infer the types.

type user = {
  name : string,
  age : number,
  isAdmin: boolean
}

const userMe : user = {
  name : "soumlya jana",
  age : 23,
  isAdmin : true
}

console.log(userMe.age , userMe.name)


// 🧩 Q2
// Create an object named product with explicit type annotation 
// having properties: id (number), name (string), and price (number).

type product = {
  id : number,
  name : string,
  price : number
}

const product1 : product = {
  id : 1,
  name : "MAcbook",
  price : 5550
}

console.log(product1.name);
console.log(product1.id);
console.log(product1.price);


// 🧩 Q3
// Define a type alias named Book with properties: 
// title (string), author (string), and pages (number). 
// Then create a variable book1 using that type.


type Book = {
  title: string;
  author: string;
  pages: number;
};

const book1: Book = {
  title: "Book 1",
  author: "Author 1",
  pages: 12,
};

console.log(book1.pages, book1.title, book1.author);



// 🧩 Q4
// Create a function printUser that takes a user object with 
// name (string) and email (string) and logs a message like 
// "User: <name> - Email: <email>". 
// Use inline type annotation for the parameter.

function printUser(user : {name : string , email : string}){

}

const user4 = {
  name : "Soumlaya Jana",
  email : "Soumalyajana2003@gmail.com"
}

printUser(user4);



// 🧩 Q5
// Create an object employee where department can be either 
// "HR" or "Engineering" or "Sales". 
// (Hint: Use string literal types)

type Department = "HR" | "Engineering" | "Sales";

const employee = {
  name: "Arjun",
  department: "Engineering" as Department,
};

console.log(employee.department);







// 🧩 Q6
// Create a nested object company with this structure:
// {
//   name: string;
//   address: { city: string; country: string }
// }
// Then log the city value.

type address = {
  name : string,
  address : {city : string , country : string}
}

const user23 : address = {
  name : "Biswapriya Jana",
  address : {city : "kolkata" , country : "india"}
}

console.log(user23.address.city)
console.log(user23.address.country)




// 🧩 Q7
// Create an object settings where the keys are optional:
// darkMode?: boolean, fontSize?: number
// Initialize it with only darkMode.

type settings = {
  darkMode?: boolean, fontSize?: number
}

const mobile1 : settings = {
  darkMode : true
}

console.log(mobile1.darkMode);
console.log(mobile1.fontSize);


// 🧩 Q8
// Create a readonly object config with properties 
// version (string) and releaseYear (number).

type Config = {
  readonly version: string;
  readonly releaseYear: number;
};

const config: Config = {
  version: "1.0.0",
  releaseYear: 2025,
};

// config.version = "2.0.0"; ❌ Error (readonly)
console.log(config.version, config.releaseYear);




// 🧩 Q9
// Create an object car with properties make, model, and year. 
// Then destructure them into separate variables.

const car = {
  make: "Tesla",
  model: "Model 3",
  year: 2024,
};

const {make , model , year} = car;

console.log(make, mobile1, year)


// 🧩 Q10
// Create an array of objects named usersList where each object has 
// name (string) and age (number). Add at least 3 users.

const usersList = [
  { name: "Soumalya", age: 23 },
  { name: "Riya", age: 21 },
  { name: "Amit", age: 25 },
];

console.log(usersList);
