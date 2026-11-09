
class User {
  constructor(public readonly id:number,public name:string){}
  greet(): string { return`Hello,${this.name}`;}
}

const user = new User(1,"Rajesh");
console.log(user.greet());


class User1 {
    constructor(public readonly id:number,public name:string){
    }
    greet(): string { return`Hello,${this.name}`;}
}
 const user1 = new User1(1,"Rajesh");
console.log(user1.greet());

function greet() {
  throw new Error("Function not implemented.");
}

