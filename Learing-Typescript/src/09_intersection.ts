// value must be everything from A and from B

type Intra1 = {id : string};
type Inter2 = {createdAt : Date};

type Entiy = Intra1 & Inter2;

const e: Entiy = {id : 'e1', createdAt : new Date()};

interface HasEmail {
    email : string
}

interface HasPhone {
    phone : string
}

type ContactInfo = HasEmail | HasPhone;

const contact : ContactInfo= {
    email : "soumalyajan",
    phone : "7029445312"
}






// ✅ TypeScript Practice Set: Intersection Types

// ----------------------------------------------------
// Q1️⃣ Basic Object Intersection
// ----------------------------------------------------
// Define two types:
// - Person: { name: string; age: number }
// - Address: { city: string; country: string }
// Create a new type `PersonWithAddress` using intersection (&)
// Then create a variable of that type.


type Person = { name: string; age: number };
type Address = { city: string; country: string };

type PersonWithAddress = Person & Address;

const person : PersonWithAddress = {
    name: "Soumalya Jana",
    city: "kolkata",
    country: "India",
    age : 23
}

console.log(person.city)


// ----------------------------------------------------
// Q2️⃣ Interface Intersection
// ----------------------------------------------------
// Create interfaces:
// - HasEmail { email: string }
// - HasPhone { phone: string }
// Combine them using intersection into `ContactInfo`
// Declare an object that satisfies both.


type HasEmail = { email : string};
type HasPhone = { phone : string};

type ContactInfo = HasEmail & HasPhone;

const person : ContactInfo = {
    email : "srbgiheuh",
    phone : "349930y"
}



// ----------------------------------------------------
// Q3️⃣ Function Parameter Intersection
// ----------------------------------------------------
// Define:
// - type Timestamps = { createdAt: Date; updatedAt: Date }
// - type Post = { title: string; content: string }
// Create a function `logPostDetails(post: Post & Timestamps)`
// The function should log the title and createdAt.

type Timestamps = { createdAt: Date; updatedAt: Date }
type Post = { title: string; content: string }

function logPostDetails(post : Post & Timestamps){
    console.log(`${post.title} ${post.content}`)
}

logPostDetails ({
    title : "How are you boy",
    Date : Date.now()
})


// ----------------------------------------------------
// Q4️⃣ Combining Optional and Required Fields
// ----------------------------------------------------
// type User = { username: string; password: string }
// type OptionalDetails = { bio?: string; profilePic?: string }
// Create an intersection `CompleteUser`
// Then create an example object using it.


// ----------------------------------------------------
// Q5️⃣ Intersection in Function Return Type
// ----------------------------------------------------
// Define:
// type Developer = { skills: string[] }
// type Manager = { teamSize: number }
// Create a function `promoteEmployee()` that returns `Developer & Manager`


// ----------------------------------------------------
// Q6️⃣ Conflict in Intersection
// ----------------------------------------------------
// type A = { value: string }
// type B = { value: number }
// Create a variable of type A & B
// Observe and understand the TypeScript error that occurs.


// ----------------------------------------------------
// Q7️⃣ Nested Intersection Example
// ----------------------------------------------------
// type BasicInfo = { id: number; name: string }
// type JobDetails = { position: string; department: string }
// type EmployeeMeta = { joinedAt: Date; active: boolean }
// Create a type EmployeeFull = BasicInfo & JobDetails & EmployeeMeta
// Then create an object example.


// ----------------------------------------------------
// Q8️⃣ Real-World Scenario
// ----------------------------------------------------
// You have:
// type APIResponse = { status: number; success: boolean }
// type UserData = { id: number; username: string }
// Create a type FullResponse = APIResponse & { data: UserData }
// Then define a variable of that type and fill in dummy data.
