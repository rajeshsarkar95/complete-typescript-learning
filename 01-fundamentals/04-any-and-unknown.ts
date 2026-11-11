
let unsafeValue: any = "hello";
unsafeValue = 100; // any disables most type checking.
let safeValue: unknown = "hello";
// safeValue.toUpperCase(); // Error: narrow unknown first.
if (typeof safeValue === "string"){
  console.log(safeValue.toUpperCase());
} 

// any TypeScript
// Defincations  any is a Typescript type that allows a variables to store any type of value withouth performing type type checking
// in simple world:You  can assing any value to an any variables and typescript will not give the type error for its oprations

// Examples
let value:any = "Hello";
value = 100;
value = "string"
value = true;
value = {name:"string"};
console.log(value);
// Why use any?
// When the data type is unknown and you want to bypass type checking
// When migrating JavaScript code to TypeScript.
// When working with dynamic data (although unknown is safer).

