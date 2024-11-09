import { useState } from "react";
import { db } from "../db";

function Catcher() {
  const [textAreaValue, setTextAreaValue] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(textAreaValue);
    addThought();
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextAreaValue(event.target.value);
  }

  async function addThought() {
    const newThought = { content: textAreaValue };
    try {
      const id = await db.thoughts.put(newThought);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={textAreaValue}
        onChange={handleChange}
        className="text-sm p-2 bg-pink-300 w-full min-h-[6.5rem] resize-none align-text-top"
      ></textarea>
      <button type="submit" className="bg-blue-400 w-full">
        submit
      </button>
    </form>
  );
}

export default Catcher;
