type IsString<T> = T extends string ? true : false;
type A = IsString<string>;
type B = IsString<number>;
const a: A = true;
const b: B = false;
console.log(a, b);
