function identity<T>(value: T): T { return value; }
console.log(identity<string>("TypeScript"));
console.log(identity<number>(123));
