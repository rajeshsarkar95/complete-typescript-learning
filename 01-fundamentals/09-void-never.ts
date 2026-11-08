function logMessage(message: string): void {
  console.log(message);
}

function fail(message: string): never {
  throw new Error(message);
}

logMessage("Learning TypeScript");
// fail("Stop");
