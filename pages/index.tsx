import React from "react";
import Link from "next/link";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Links</h1>
      <ul>
        <li>
          <Link href="/chord-progressions">Chord Progressions</Link>
          <Link href="/guitar-fretboard-notes">Guitar Fretboard Notes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
