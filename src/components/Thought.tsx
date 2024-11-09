interface ThoughtProps {
  text: string;
}

function Thought({ text }: ThoughtProps) {
  return (
    <div className="bg-yellow-300 p-2">
      <p>{text}</p>
    </div>
  );
}

export default Thought;
