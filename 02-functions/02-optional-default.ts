
function greet(name: string, greeting = "Hello", punctuation?: string): string {
  return `${greeting},${name}${punctuation ?? "!"}`;
}

console.log(greet("Rajesh"));

console.log(greet("Amit","Welcome", "."));
