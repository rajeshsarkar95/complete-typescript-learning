type ReturnOf<T> = T extends (...args: never[]) => infer R ? R : never;
function getUserName() { return "Rajesh"; }
type Name = ReturnOf<typeof getUserName>;
const name: Name = getUserName();
console.log(name);
