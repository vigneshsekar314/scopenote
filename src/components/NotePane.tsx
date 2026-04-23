import { For, Accessor } from "solid-js";
import { NoteListType } from "../note.type";
import { NoteCard } from "./NoteCard";

interface NotePaneProps {
  noteList: Accessor<NoteListType[]>;
  removeNote: (noteId: string) => NoteListType[];
}
export function NotePane(props: NotePaneProps) {
  const noteCollection = () => props.noteList();
  return (
    <div class="flex flex-col flex-wrap gap-1">
      <For each={noteCollection()}>
        {(note: NoteListType) => <NoteCard
          noteItem={note}
          removeNote={props.removeNote} />}
      </For>
    </div>
  );
}
