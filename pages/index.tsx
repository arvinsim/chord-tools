import React from "react";
import Link from "next/link";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className={"text-4xl"}>Links</h1>
      <ul className={"list-disc list-inside"}>
        <li>
          <Link href="/chord-progressions">Chord Progressions</Link>
        </li>
        <li>
          <Link href="/guitar-fretboard-notes">Guitar Fretboard Notes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
