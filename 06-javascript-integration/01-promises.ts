function wait(ms: number): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Finished"), ms));
}
wait(100).then(console.log);
