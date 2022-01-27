import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function DefaultLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>Chord Tools</title>
        <meta name="description" content="Chord Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row justify-center">
        <div className="basis-1/2">
          <Link href="/">
            <h1 className="text-2xl font-bold">Chord Tools</h1>
          </Link>
          <Link href="/chord-progressions">
            <div className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              Chord Progressions
            </div>
          </Link>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}
