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
    ["I", "VI", "IV", "V"],
    ["I", "V", "VI", "IV"],
    ["ii", "V", "I", "IV"],
    ["V", "V", "I"],
    ["vi", "ii", "V", "I"],
    ["I", "V", "IV", "IV", "I", "V", "I", "V"],
    ["ii", "V", "I"],
    ["I", "IV", "ii", "V"],
    ["I", "V", "vi", "iii", "IV", "I", "IV", "V"],
    ["I", "V", "vi", "IV"],
    ["III", "VII", "i", "V", "III", "VII", "i", "V", "i"],
    // prettier-ignore
    ["I", "I", "I", "I", "I", "I", "I", "I", "I", "IV", "IV", "I", "I", "V", "IV", "I", "I"],
    ["I", "vi", "ii", "V"],
    ["V", "IV", "I"],
  ];
  const chords = useChords(tonic, scale);

  return chordProgressions.map((progression) => {
    return {
      progression: progression,
      chords: progression.map(
        (item) => chords[romanNumeralsMapping[item.toUpperCase()]]
      ),
    };
  });
}
