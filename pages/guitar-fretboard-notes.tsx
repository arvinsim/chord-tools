import React from "react";

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
      <h1>Guitar Fretboard Notes</h1>
      <button>Reset</button>

      <div>
        {notes.map((line, lineIndex) => {
          return (
            <div key={lineIndex} className="grid grid-cols-12 gap-0">
              {line.map((note) => {
                return (
                  <input
                    type={"text"}
                    value={note}
                    key={note}
                    className={"w-12 rounded-md"}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuitarFretboardNotes;
