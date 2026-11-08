abstract class PaymentProvider {
  abstract pay(amount: number): Promise<boolean>;
}
class DemoPayment extends PaymentProvider {
  async pay(amount: number): Promise<boolean> {
    console.log(`Processing ${amount}`);
    return true;
  }
}
void new DemoPayment().pay(100);
