
type Admin = {name:string; permissions:string[]};
type Customer = {name:string;orders:number};
type Person = Admin | Customer;
type Employee = Admin & { employeeId:string};
const person: Person = {name:"Rajesh",orders:3};
const employee:Employee = {name:"Amit",permissions:["read"],employeeId: "E-1"};

console.log(person,employee);
