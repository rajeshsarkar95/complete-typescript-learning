async function main(): Promise<void> {
  const message = await Promise.resolve("Hello from async/await");
  console.log(message);
}
void main();
