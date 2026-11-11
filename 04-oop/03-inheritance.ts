
class Animal {
  constructor(protected name: string) {}
  move(): void { console.log(`${this.name} moves`);}
}
class Dog extends Animal {
  bark(): void { console.log(`${this.name} barks`); }
}
const dog = new Dog("Tommy");
dog.move();
dog.bark();
