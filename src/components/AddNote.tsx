import { createSignal } from "solid-js";

interface AddNoteProps {
  addNote: (newNote: string) => void;
}
export function AddNote(props: AddNoteProps) {
  const [newNote, setNewNote] = createSignal("");
  const handleNoteChange = (noteText: string) => setNewNote(noteText);
  const handleNoteAdd = () => {
    props.addNote(newNote());
    setNewNote("");
  };
  return (
    <>
      <div>
        <textarea class="m-2 p-2 border-1 border-grey-400 min-w-20 max-w-lg min-h-20 max-h-50"
          value={newNote()}
          onChange={(e) => handleNoteChange(e.target.value)}
        />
      </div>
      <div class="flex gap-1">
        <button class="p-2 m-2 bg-green-400 rounded-sm"
          onClick={(_) => handleNoteAdd()}
        >
          Save
        </button>
        <button class="p-2 m-2 bg-red-400 rounded-sm">
          Discard
        </button>
      </div >
    </>);
}
