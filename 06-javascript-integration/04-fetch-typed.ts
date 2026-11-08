interface Todo { userId: number; id: number; title: string; completed: boolean; }

async function getTodo(): Promise<Todo> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  // The generic argument is a compile-time assertion, not runtime validation.
  return (await response.json()) as Todo;
}
// Run in an environment with network access.
void getTodo().then((todo) => console.log(todo.title)).catch(console.error);
