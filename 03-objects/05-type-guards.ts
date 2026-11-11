
type Cat = {kind:"cat";meow:() => void};

type Dog = { kind: "dog"; bark: () => void};

type Pet = Cat | Dog;

function handlePet(pet: Pet):void{
  if (pet.kind === "cat") pet.meow();
  else pet.bark();
}

handlePet({ kind: "dog", bark: () => console.log("Woof")});
