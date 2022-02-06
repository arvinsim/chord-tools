import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ChordProgressions from "../pages";

describe("Chord", () => {
  it("renders 2 labels", () => {
    const { getByText } = render(<ChordProgressions />);

    expect(getByText("Tonic:")).toBeInTheDocument();
    expect(getByText("Scale:")).toBeInTheDocument();
  });

  it("renders tonic select options", () => {
    const { getAllByTestId } = render(<ChordProgressions />);

    const options = getAllByTestId("tonic");
    expect(options[0].value).toBe("C");
    // expect(options[1].value).toBe("D");
    // expect(options[2].value).toBe("E");
    // expect(options[3].value).toBe("F");
    // expect(options[4].value).toBe("G");
    // expect(options[5].value).toBe("A");
    // expect(options[6].value).toBe("B");
  });

  it("renders scale select options", () => {
    const { getAllByTestId } = render(<ChordProgressions />);

    const options = getAllByTestId("scale");
    expect(options[0].value).toBe("major");
  });
});
