import { useState } from "react";
import { useChords } from "../hooks/useChords";
import { useChordProgressions } from "../hooks/useChordProgression";

const ChordProgressions: NextPageWithLayout = () => {
  const [tonic, setTonic] = useState("C");
  const [scale, setScale] = useState("major");
  const chords = useChords(tonic, scale);
  const chordProgressions = useChordProgressions(tonic, scale);
  const tonicOptions = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];

  return (
    <div className="container mx-auto">
      <div className="text-center text-4xl">Chord Progressions</div>
      <form className="flex flex-col gap-8 justify-center">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <label htmlFor="tonic">Tonic:</label>
          </div>
          <div className="basis-3/4">
            <select
              id="tonic"
              data-testid="tonic"
              value={tonic}
              className="rounded border-2 border-gray-300"
              onChange={(e) => setTonic(e.target.value)}
            >
              {tonicOptions.map((tonicOption) => {
                return (
                  <option key={tonicOption} value={tonicOption}>
                    {tonicOption}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/4">
            <label htmlFor="scale">Scale:</label>
          </div>
          <div className="basis-3/4">
            <select
              id="scale"
              data-testid="scale"
              value={scale}
              className="rounded border-2 border-gray-300"
              onChange={(e) => setScale(e.target.value)}
            >
              <option value="major">Major</option>
            </select>
          </div>
        </div>
      </form>
      <div className="text-center">{chords.join(" - ")}</div>
      <div className="container mx-auto">
        {chordProgressions.map((progression, index) => {
          return (
            <div className="flex flex-row text-center" key={index}>
              <div className="basis-1/2 text-red-500">
                {progression.progression.join(" - ")}
              </div>
              <div className="basis-1/2 text-blue-500">
                {progression.chords.join(" - ")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChordProgressions;
