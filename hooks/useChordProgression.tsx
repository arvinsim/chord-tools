import { useChords } from "./useChords";

export function useChordProgressions(
  tonic: string,
  scale: string
): Array<{
  progression: Array<string>;
  chords: Array<string>;
}> {
  const romanNumeralsMapping: { [key: string]: number } = {
    I: 0,
    II: 1,
    III: 2,
    IV: 3,
    V: 4,
    VI: 5,
    VII: 6,
  };
  const chordProgressions = [
    ["I", "IV", "V", "V"],
    ["I", "I", "IV", "V"],
  ];
  const chords = useChords(tonic, scale);

  return chordProgressions.map((progression) => {
    return {
      progression: progression,
      chords: progression.map((item) => chords[romanNumeralsMapping[item]]),
    };
  });
}
