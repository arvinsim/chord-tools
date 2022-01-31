import type { ReactElement } from "react";
import DefaultLayout from "../component/default-layout";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <div className="text-center text-4xl">Home</div>
      <div>
        Welcome! This site is created by Arthur to help him with his guitar
        practice. But you might find this helpful too!
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
