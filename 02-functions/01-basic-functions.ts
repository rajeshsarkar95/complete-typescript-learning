import { log } from "node:console";

function add(a:number,b:number):number {
  return a + b;
}
console.log(add(10,20));
// this code showcase type sefty of something wihich i provided in  typescript script or typescript is besscally superset of javascript 
function calculateTotal(
  price:number,
  quentity:number
):number{
  return price * quentity;
}
calculateTotal(100,5);

// Type annotations
let username:string = "Rajesh";
let age:number     = 21;
let isDeveloper:boolean = true;
let Skills:string[] = ["React","Nodejs","Mongodb"];
console.log(username,age,isDeveloper,Skills);






