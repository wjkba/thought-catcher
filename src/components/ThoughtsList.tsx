import { type Thought as ThoughtType } from "../types";
import Thought from "./Thought";

interface ThoughtsListProps {
  thoughts: ThoughtType[];
}

function ThoughtsList({ thoughts }: ThoughtsListProps) {
  return (
    <div className="grid gap-2 bg-black p-2">
      {thoughts?.map((thought: ThoughtType) => (
        <Thought key={thought.id} text={thought.content} />
      ))}
    </div>
  );
}

export default ThoughtsList;
