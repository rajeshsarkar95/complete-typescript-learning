//  type interference typescriot automacally udestands the type based on the assinment value
interface Developer {
  name: string;
  skills: string[];
  experienceYears:number;
}

const developer:Developer = {
  name:"Rajesh",
  skills:["React","Node.js","TypeScript"],
  experienceYears:2
};

console.log(developer);

interface address  {
      names:string;
      address:string;
      country:string;
}
const devesadd:address = {
  names:"Rajesh",
  address:"Raja colony neoriya pilibhit",
  country:"indian",
}
console.log(developer,devesadd);

// Because TypeScript already infers string.
// when to use type iterrence when typescript can clearly undestand the variable types. Explit
// annotation are usefull for function parameters,public Apis,and apis complex data staturus

// String types
let firstName:string = "Rajesh sarkar";
let addresss:string   = "Raja colony";
let messsge:string    = "hello this rajesh sarkar";
console.log(firstName,addresss,messsge);

// 4.4 Number type
let age:number = 21;
let salary:number = 30000;
let parsetage:number  = 100;

// boolean types
let isLoggedIn:boolean  = true;
let isAdmin:boolean    = false;

let numberss:number[] = [10,20,30,40,50,60];
console.log(numberss);
// Alternative syntax:
let numbers:Array<number> = [10,20,30,40];

// Array of objects
type Student = {
    name: string;
    age: number;
};

const students: Student[] = [
    {
        name: "Rajesh",
        age: 21
    },
    {
        name: "Amit",
        age: 22
    }
];
console.log(students);

// real world use case
// When api response,student lists,product lists,users collection and dashbord data;


// Tuples
// A tuple is an arrays with a fixit staructrures and specifi types at each postions
let user:[number,string,boolean]
user = [1,"Rajesh",true]
// Real world situation:When you need fixed staructures,such as an ID, username and active status
// Enums
// Enums define a set  of named constant

enum  USerRole{
     ADMIN = "ADMIN",
     STUDENT = "STUDENT",
     TEACHAR = "TEACHER",
}
let role:USerRole = USerRole.ADMIN;
console.log(role);


















