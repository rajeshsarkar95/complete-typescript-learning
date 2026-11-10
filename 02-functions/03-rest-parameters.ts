
function sum(...values:number[]):number{

  return values.reduce((total,value) => total + value,0);

}
console.log(sum(10,20,30));
