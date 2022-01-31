import { useState } from "react";
import type { ReactElement } from "react";

import DefaultLayout from "../component/default-layout";
import { useChords } from "../hooks/useChords";
import { useChordProgressions } from "../hooks/useChordProgression";

const ChordProgressions: NextPageWithLayout = () => {
  const [tonic, setTonic] = useState("C");
  const [scale, setScale] = useState("major");
  const chords = useChords(tonic, scale);
  const chordProgressions = useChordProgressions(tonic, scale);

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

ChordProgressions.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ChordProgressions;
