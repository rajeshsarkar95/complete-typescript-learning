const input = document.querySelector("#email") as HTMLInputElement | null;
if (input) {
  console.log(input.value);
}

// Assertion changes the compiler's view; it does not validate at runtime.
