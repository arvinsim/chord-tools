import type { ReactElement } from "react";
import DefaultLayout from "../component/default-layout";

const ChordProgressions: NextPageWithLayout = () => {
  return <div>Chord Progressions</div>;
};

ChordProgressions.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ChordProgressions;
