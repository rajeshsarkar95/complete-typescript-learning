type Product = { id: number; title: string; price: number };
type ProductTitle = Product["title"];
const title: ProductTitle = "Keyboard";
console.log(title);
