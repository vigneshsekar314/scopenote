import { createSignal } from 'solid-js';
import { NoteListType } from '../../note.type';

function useNote(addNote: (newNote: NoteListType) => void) {
  const [newNoteDesc, setNewNoteDesc] = createSignal('');
  const [newNoteTitle, setNewNoteTitle] = createSignal('');
  const [newNoteTag, setNewNoteTag] = createSignal('');
  const handleNoteAdd = (e: MouseEvent) => {
    e.preventDefault();
    if (!newNoteTitle()) {
      return;
    }
    const tagList = newNoteTag() ? newNoteTag().split(',') : [];
    addNote({
      id: crypto.randomUUID(),
      title: newNoteTitle(),
      desc: newNoteDesc(),
      tags: tagList,
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
    });
    setNewNoteTitle('');
    setNewNoteDesc('');
    setNewNoteTag('');
  };
  const handleDiscard = (e: MouseEvent) => {
    e.preventDefault();
    setNewNoteTitle('');
    setNewNoteDesc('');
    setNewNoteTag('');
  };

  return {
    newNoteTitle,
    newNoteDesc,
    newNoteTag,
    setNewNoteTitle,
    setNewNoteDesc,
    setNewNoteTag,
    handleNoteAdd,
    handleDiscard,
  };
}

export { useNote };
