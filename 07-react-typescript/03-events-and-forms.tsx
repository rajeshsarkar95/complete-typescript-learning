import { useState, type ChangeEvent, type FormEvent } from "react";

export function NameForm() {
  const [name, setName] = useState("");
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(name);
  }
  return <form onSubmit={handleSubmit}><input value={name} onChange={handleChange} /><button>Save</button></form>;
}
