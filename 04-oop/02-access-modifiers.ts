
class BankAccount {
  private balance = 0;
  constructor(public readonly owner: string) {}
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.balance += amount;
  }
  getBalance(): number {return this.balance;}
}
const account = new BankAccount("Rajesh");

account.deposit(500);

console.log(account.getBalance());
