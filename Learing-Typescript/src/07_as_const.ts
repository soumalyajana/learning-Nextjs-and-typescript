const Roles = ["admin", "user", "operator"] as const;

// derive a union from the array
type Role = (typeof Roles)[number]

function setRole(r : Role){
    console.log(r);
}

setRole("admin");