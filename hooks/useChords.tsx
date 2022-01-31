export function useChords(tonic: string, scale: string): Array<string> {
  const mappings: { [index: string]: { [key: string]: Array<string> } } = {
    major: {
      C: ["C", "Dm", "Em", "F", "G", "Am", "B°"],
      Db: ["Db", "Eb", "Fm", "Gb", "Ab", "Bbm", "C°"],
      D: ["D", "Em", "F#m", "G", "A", "Bm", "C#°"],
      Eb: ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "D°"],
      E: ["E", "F#m", "G#m", "A", "B", "C#m", "D#°"],
      F: ["F", "Gm", "Am", "Bb", "C", "Dm", "E°"],
      Gb: ["Gb", "Abm", "Bbm", "C", "D", "Ebm", "F°"],
      G: ["G", "Am", "Bm", "C", "D", "Em", "F°"],
      Ab: ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "G°"],
      A: ["A", "Bm", "C#m", "D", "E", "F#M", "G#°"],
      Bb: ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "A°"],
      B: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#°"],
    },
  };

  const result = mappings[scale][tonic];
  if (result?.length > 0) {
    return result;
  }
  return ["", "", "", "", "", "", ""];
}
