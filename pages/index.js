import React from "react";
import Head from "next/head";

/** eslint-ignore react/react-in-jsx-scope */
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>New road to LU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title ">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  );
}
