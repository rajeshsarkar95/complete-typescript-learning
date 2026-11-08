import { useRef } from "react";

export function SearchBox() {
  const inputRef = useRef<HTMLInputElement>(null);
  return <><input ref={inputRef} /><button onClick={() => inputRef.current?.focus()}>Focus</button></>;
}
