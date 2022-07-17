import React, { useCallback, useState, SyntheticEvent } from "react";
import Link from "next/link";

const GuitarFretboardNotes: NextPageWithLayout = () => {
  const notes = [
    ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
    ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
    ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"],
    ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
    ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"],
    ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
  ];

  return (
    <div>
      <h1 className="text-4xl">Guitar Fretboard Notes</h1>

      <ul className={"list-disc list-inside"}>
        <li>
          <Link href={"/"}>Back to Home</Link>
        </li>
        <li>
          <button>Reset</button>
        </li>
      </ul>

      <div>
        {notes.map((line, lineIndex) => {
          return (
            <div key={lineIndex} className="grid grid-cols-13 gap-0">
              {line.map((note, noteIndex) => {
                return <NoteInput note={note} key={lineIndex + noteIndex} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function NoteInput({ note }: { note: string }) {
  const [value, setValue] = useState("");
  const onChange = useCallback((evt: SyntheticEvent) => {
    console.log("setValue called");
    setValue((evt.target as HTMLInputElement).value);
  }, []);

  return (
    <input
      type={"text"}
      className={`w-12 rounded-md ${
        value !== note ? "text-rose-900 border-rose-900 border-4" : ""
      }`}
      onChange={onChange}
    />
  );
}

export default GuitarFretboardNotes;
