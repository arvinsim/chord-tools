import React from "react";
import "../styles/globals.css";
import DefaultLayout from "../component/default-layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
