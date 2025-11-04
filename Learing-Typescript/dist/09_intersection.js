"use strict";
// value must be everything from A and from B
const e = { id: 'e1', createdAt: new Date() };
const contact = {
    email: "soumalyajan",
    phone: "7029445312"
};
const person = {
    name: "Soumalya Jana",
    city: "kolkata",
    country: "India",
    age: 23
};
console.log(person.city);
const person = {
    email: "srbgiheuh",
    phone: "349930y"
};
function logPostDetails(post) {
    console.log(`${post.title} ${post.content}`);
}
logPostDetails({
    title: "How are you boy",
    Date: Date.now()
});
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
