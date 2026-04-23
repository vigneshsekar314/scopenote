import { createSignal, type Component } from 'solid-js';
import { AddNote } from './components/notes/AddNote';
import { NotePane } from './components/notes/NotePane';
import type { NoteListType } from './note.type';

const App: Component = () => {
  const [noteList, setNoteList] = createSignal<NoteListType[]>([]);
  const addNote = (newNote: NoteListType) => setNoteList((prev) => [...prev, newNote]);
  const removeNote = (noteId: string) => setNoteList((prev) => prev.filter((n) => n.id != noteId));
  return (
    <>
      <AddNote addNote={addNote} />
      <NotePane noteList={noteList} removeNote={removeNote} />
    </>
  );
};


export default App;
