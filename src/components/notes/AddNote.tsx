import { NoteListType } from '../../note.type';
import { useNote } from './useAddNote';

interface AddNoteProps {
  addNote: (newNote: NoteListType) => void;
}
export function AddNote(props: AddNoteProps) {
  const addNoteProps = () => props.addNote;
  const {
    newNoteTitle,
    newNoteDesc,
    newNoteTag,
    setNewNoteTitle,
    setNewNoteDesc,
    setNewNoteTag,
    handleNoteAdd,
    handleDiscard,
  } = useNote(addNoteProps());
  const inputStyle = 'min-w-20 border-1 border-grey-400 max-w-lg min-h-20 max-h-50 self-center';
  const textStyle = 'border max-h-7 self-center';
  const labelStyle = 'm-2 p-2 self-center min-w-50';

  return (
    <div>
      <div>
        <strong class="m-2 p-2">Add Note</strong>
      </div>
      <form>
        <div class="flex flex-col gap-2 pt-5">
          <div class="flex flex-row">
            <label for="newNoteTitle" class={labelStyle}>
              Title
            </label>
            <input
              id="newNoteTitle"
              class={textStyle}
              value={newNoteTitle()}
              onChange={(e) => setNewNoteTitle(e.target.value)}
            />
          </div>
          <div class="flex flex-row">
            <label for="newNoteDesc" class={labelStyle}>
              Description
            </label>
            <textarea
              id="newNoteDesc"
              class={inputStyle}
              value={newNoteDesc()}
              onChange={(e) => setNewNoteDesc(e.target.value)}
            />
          </div>
          <div class="flex flex-row">
            <label for="newNoteTag" class={labelStyle}>
              Tags
            </label>
            <input
              id="newNoteTag"
              class={textStyle}
              value={newNoteTag()}
              onChange={(e) => setNewNoteTag(e.target.value)}
            />
          </div>
        </div>
        <div class="flex gap-1">
          <button
            class="p-2 m-2 bg-green-400 rounded-sm"
            type="submit"
            onClick={(e) => handleNoteAdd(e)}
          >
            Save
          </button>
          <button class="p-2 m-2 bg-red-400 rounded-sm" onClick={handleDiscard}>
            Discard
          </button>
        </div>
      </form>
    </div>
  );
}
