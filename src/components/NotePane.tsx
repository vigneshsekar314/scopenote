import { For, Accessor } from "solid-js";
import { NoteListType } from "../note.type";

interface NotePaneProps {
  noteList: Accessor<NoteListType[]>;
}
export function NotePane(props: NotePaneProps) {
  const noteCollection = () => props.noteList();
  const noteCard = (note: NoteListType) => {
    return (
      <div class="m-2 p-2 bg-gray-200 min-w-20 max-w-150">
        <div class="m-2 p-2 min-w-20 max-w-50 flex flow-row gap-2">
          <label for="paneTitle">Title: </label>
          <p id="paneTitle">{note.title}</p>
        </div>
        <div class="m-2 p-2 min-w-20 max-w-150 flex flow-row gap-2">
          <label for="paneDesc">Description: </label>
          <p id="paneDesc">{note.desc}</p>
        </div>
        <div class="m-2 p-2 min-w-20 max-w-150 flex flow-row gap-2">
          <label for="paneTags">Tags: </label>
          <p id="paneTags">{note.tags}</p>
        </div>
      </div>
    )
  };
  return (
    <div class="flex flex-col flex-wrap gap-1">
      <For each={noteCollection()}>
        {noteCard}
      </For>
    </div>
  );
}
