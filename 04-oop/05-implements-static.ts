interface Logger { log(message: string): void; }
class ConsoleLogger implements Logger {
  static provider = "console";
  log(message: string): void { console.log(message); }
}
new ConsoleLogger().log(ConsoleLogger.provider);
