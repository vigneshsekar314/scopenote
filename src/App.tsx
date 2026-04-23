import { createSignal, type Component } from 'solid-js';
import { AddNote } from './components/AddNote';
import { NotePane } from './components/NotePane';

const App: Component = () => {
  const [noteList, setNoteList] = createSignal<string[]>([]);
  const addNote = (newNote: string) => setNoteList((prev) => [...prev, newNote]);
  return (
    <>
      <AddNote addNote={addNote} />
      <NotePane noteList={noteList} />
    </>
  );
};

export default App;
