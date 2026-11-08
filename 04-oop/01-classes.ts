class User {
  constructor(public readonly id: number, public name: string) {}
  greet(): string { return `Hello, ${this.name}`; }
}
const user = new User(1, "Rajesh");
console.log(user.greet());
