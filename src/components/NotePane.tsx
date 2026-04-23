import { For, Accessor } from "solid-js";

interface NotePaneProps {
  noteList: Accessor<string[]>;
}
export function NotePane(props: NotePaneProps) {
  const noteCollection = () => props.noteList();
  const noteCard = (note: string) => <div class="m-2 p-2 min-w-20 max-w-100 bg-gray-200"><p>{note}</p></div>;
  return (
    <div class="flex flex-col flex-wrap gap-1">
      <For each={noteCollection()}>
        {noteCard}
      </For>
    </div>
  );
}
