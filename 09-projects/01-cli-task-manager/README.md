# CLI Task Manager

## Requirements
- Add a task
- List tasks
- Mark a task complete
- Delete a task
- Persist tasks to a JSON file

## Suggested types

```ts
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
};
```

## Extension challenges
- Add due dates and priorities.
- Validate user input.
- Add unit tests.
