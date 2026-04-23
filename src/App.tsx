import { createSignal, type Component } from 'solid-js';
import { AddNote } from './components/AddNote';
import { NotePane } from './components/NotePane';
import type { NoteListType } from './note.type';

const App: Component = () => {
  const [noteList, setNoteList] = createSignal<NoteListType[]>([]);
  const addNote = (newNote: NoteListType) => setNoteList((prev) => [...prev, newNote]);
  return (
    <>
      <AddNote addNote={addNote} />
      <NotePane noteList={noteList} />
    </>
  );
};


export default App;
