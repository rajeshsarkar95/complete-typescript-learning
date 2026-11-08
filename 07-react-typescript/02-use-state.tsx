import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);
  return <button onClick={() => setCount((current) => current + 1)}>Count: {count}</button>;
}
