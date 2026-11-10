
type User = {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
};

const user: User = { id: 1, name: "Rajesh", createdAt: new Date() };
console.log(user);
