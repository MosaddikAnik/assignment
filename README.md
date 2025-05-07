1.. TypeScript infers in many types : i) Variables are initialized ii) Default values are set for function parameters iii) Return types of functions determined

2.. interface Person { name: string; age: number; isStudent: boolean; } type PersonKeys = keyof Person;

function getValue(obj: Person, key: PersonKeys) { return obj[key]; }

const person: Person = { name: "Anik", age: 25, isStudent: true };

console.log(getValue(person, "name")); console.log(getValue(person, "age"));
