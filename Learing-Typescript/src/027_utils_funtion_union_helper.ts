// ✅ Function with default parameter and typed return
function ExtractUserInfo(id: string, isExtraInfo = false) {
  return {
    id,
    name: 'Soumalya',
    log: isExtraInfo ? "details" : undefined as string | undefined,
  };
}

// ✅ Type utilities
type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>;
type GetUserParamsInfo = Parameters<typeof ExtractUserInfo>;

// ❌ Incorrect: You used `ReturnType` for args
// ✅ Correct: `Parameters` gives argument types (tuple)
const argsInfo: GetUserParamsInfo = ["u1", true];
const resultInfo: GetUserReturnInfo = ExtractUserInfo(...argsInfo);



// ✅ Class
class PersonN1 {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hi, I am ${this.name}`;
  }
}

// ✅ Use correct utility types
type PersonInstanceN1 = InstanceType<typeof PersonN1>;
type PersonConstructorParamsN1 = ConstructorParameters<typeof PersonN1>;

// ✅ Example usage
const resultInfo1: PersonConstructorParamsN1 = ["Soumalya", 20];
const abc: PersonInstanceN1 = new PersonN1(...resultInfo1);
