type Result =
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function show(result: Result): string {
  switch (result.status) {
    case "success": return result.data;
    case "error": return result.message;
  }
}
console.log(show({ status: "success", data: "Done" }));
