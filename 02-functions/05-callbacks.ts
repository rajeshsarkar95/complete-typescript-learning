function processName(name: string, callback: (formatted: string) => void): void {
  callback(name.trim().toUpperCase());
}
processName(" rajesh ", (value) => console.log(value));
