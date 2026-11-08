let unsafeValue: any = "hello";
unsafeValue = 100; // any disables most type checking.

let safeValue: unknown = "hello";
// safeValue.toUpperCase(); // Error: narrow unknown first.
if (typeof safeValue === "string") {
  console.log(safeValue.toUpperCase());
}
