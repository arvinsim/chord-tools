import { useState } from "react";
import type { ReactElement } from "react";
import { Key, Progression } from "@tonaljs/tonal";

import DefaultLayout from "../component/default-layout";
import { useChords } from "../hooks/useChords";

const ChordProgressions: NextPageWithLayout = () => {
  const [tonic, setTonic] = useState("C");
  const [scale, setScale] = useState("major");
  const chords = useChords(tonic, scale);

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center text-4xl">Chord Progressions</div>
      <form>
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
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="A">A</option>
              <option value="B">B</option>
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
        {chordProgressions.map((progression) => {
          const a = progression.join(" - ");
          const b = Progression.fromRomanNumerals(tonic, progression).join(
            " - "
          );
          return (
            <div className="flex flex-row text-center" key={a + b}>
              <div className="basis-1/2 text-red-500">{a}</div>
              <div className="basis-1/2 text-blue-500">{b}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const keys: { [index: string]: { [index: string]: any } } = {
  major: {
    C: Key.majorKey("C"),
    D: Key.majorKey("D"),
    E: Key.majorKey("E"),
    F: Key.majorKey("F"),
    G: Key.majorKey("G"),
    A: Key.majorKey("A"),
    B: Key.majorKey("B"),
  },
};

const chordProgressions = [
  ["I", "IV", "V", "V"],
  ["I", "I", "IV", "V"],
];

ChordProgressions.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ChordProgressions;
