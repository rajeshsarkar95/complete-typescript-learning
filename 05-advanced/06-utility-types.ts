interface User { id: number; name: string; email: string }
type CreateUser = Omit<User, "id">;
type UpdateUser = Partial<User>;
type UserCard = Pick<User, "id" | "name">;
type ImmutableUser = Readonly<User>;
const newUser: CreateUser = { name: "Rajesh", email: "r@example.com" };
console.log(newUser);
