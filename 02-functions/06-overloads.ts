
function format(value: number):string;
function format(value: Date):string;

function format(value:number | Date):string {
  return value instanceof Date ? value.toISOString() : value.toFixed(2);
}

console.log(format(12.345));
console.log(format(new Date("2026-01-01")));
