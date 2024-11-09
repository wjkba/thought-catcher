import { useLiveQuery } from "dexie-react-hooks";
import Catcher from "./components/Catcher";
import ThoughtsList from "./components/ThoughtsList";
import { db } from "./db";
import { type Thought } from "./types";

function App() {
  const thoughts: Thought[] = useLiveQuery(() => db.thoughts.toArray()) || [];

  return (
    <div className="flex justify-center w-full h-screen bg-blue-300">
      <div className="bg-green-300 max-w-[450px] px-[8px] w-full">
        <main className="bg-white">
          <section id="catcher">
            <Catcher />
          </section>
          <section id="thoughts">
            {thoughts ? (
              <ThoughtsList thoughts={thoughts} />
            ) : (
              <p>Loading...</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
