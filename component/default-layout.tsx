import React from "react";
import Head from "next/head";

export default function DefaultLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div>
      <Head>
        <title>Chord Tools</title>
        <meta name="description" content="Chord Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <main>{children}</main>
      </div>
    </div>
  );
}
