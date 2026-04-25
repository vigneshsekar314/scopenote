import { NoteListType } from '../../note.type';
import { showEllipsis } from '../../utils/textFormat';

interface NoteCardProps {
  noteItem: NoteListType;
  removeNote: (noteId: string) => NoteListType[];
}

export function NoteCard(props: NoteCardProps) {
  const labelStyle = 'w-50';
  const note = () => props.noteItem;
  const trim20 = (text: string) => showEllipsis(text, 20);
  const removeNoteItem = () => props.removeNote(note().id);

  return (
    <div class="m-2 p-2 bg-gray-200 min-w-20 max-w-150 flex flex-row gap-x-5">
      <div>
        <div class="m-2 p-2 min-w-20 max-w-150 flex flow-row gap-2">
          <label for="paneTitle" class={labelStyle}>
            <strong>Title:</strong>{' '}
          </label>
          <p id="paneTitle">{trim20(note().title)}</p>
        </div>
        <div class="m-2 p-2 min-w-20 max-w-150 flex flow-row gap-2">
          <label for="paneDesc" class={labelStyle}>
            <strong>Description:</strong>{' '}
          </label>
          <p id="paneDesc">{trim20(note().desc)}</p>
        </div>
        <div class="m-2 p-2 min-w-20 max-w-150 flex flow-row gap-2">
          <label for="paneTags" class={labelStyle}>
            <strong>Tags: </strong>
          </label>
          <p id="paneTags">{trim20(note().tags.join(', '))}</p>
        </div>
      </div>
      <div class="ml-auto">
        <button class="flex flex-row bg-red-400 rounded-sm p-2" onClick={removeNoteItem}>
          <p>🗑️</p>
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
}
