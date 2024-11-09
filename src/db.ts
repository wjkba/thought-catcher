// db.ts
import Dexie, { type EntityTable } from "dexie";

interface Thought {
  id: number;
  content: string;
}

const db = new Dexie("Thoughts") as Dexie & {
  thoughts: EntityTable<Thought, "id">;
};

// Schema declaration:
db.version(1).stores({
  thoughts: "++id, name",
});

export type { Thought };
export { db };
