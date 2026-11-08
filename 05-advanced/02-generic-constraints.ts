function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}
console.log(getLength("TypeScript"));
console.log(getLength([1, 2, 3]));
