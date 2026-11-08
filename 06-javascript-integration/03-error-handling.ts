async function loadData(): Promise<string> {
  try {
    return await Promise.resolve("Data loaded");
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message);
    throw error;
  }
}
void loadData().then(console.log);
