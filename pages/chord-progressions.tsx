import type { ReactElement } from "react";
import { Key, Progression } from "@tonaljs/tonal";

import DefaultLayout from "../component/default-layout";
import { useState } from "react";

const ChordProgressions: NextPageWithLayout = () => {
  const [tonic, setTonic] = useState("C");
  const [scale, setScale] = useState("major");
  const chords = keys[scale][tonic].chords.join(" - ");

  return (
    <>
      <form>
        <label htmlFor="tonic">Tonic:</label>
        <select
          id="tonic"
          data-testid="tonic"
          value={tonic}
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
        <label htmlFor="scale">Scale:</label>
        <select
          id="scale"
          data-testid="scale"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
        >
          <option value="major">Major</option>
        </select>
      </form>
      <div>{chords}</div>
      <div>
        {chordProgressions.map((progression) => {
          const a = progression.join(" - ");
          const b = Progression.fromRomanNumerals(tonic, progression).join(
            " - "
          );
          return (
            <div key={a + b}>
              <div className="text-red-500">{a}</div> -------
              <div className="text-blue-500">{b}</div>
            </div>
          );
        })}
      </div>
    </>
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
