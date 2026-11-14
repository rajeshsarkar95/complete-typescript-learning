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



