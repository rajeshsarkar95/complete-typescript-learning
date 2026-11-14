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









