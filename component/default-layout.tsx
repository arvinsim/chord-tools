import React from "react";
import Head from "next/head";
import Link from "next/link";

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
      <div className="container mx-auto w-1/2">
        <div>
          <Link href="/">
            <div className="text-2xl">Chord Tools</div>
          </Link>
          <Link href="/chord-progressions">
            <div className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              Chord Progressions
            </div>
          </Link>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
