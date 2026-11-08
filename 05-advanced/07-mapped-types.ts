type Optional<T> = { [K in keyof T]?: T[K] };
type Flags<T> = { [K in keyof T]: boolean };
type User = { name: string; age: number };
const flags: Flags<User> = { name: true, age: false };
console.log(flags);
