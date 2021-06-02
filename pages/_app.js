import React from "react";
import t from "prop-types";
import "../styles/tailwind.css";
import Head from "next/head";
import Theme from "../styles/Theme.js";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { ThemeProvider } from "@wigxel/react-components";
import { appWithTranslation } from "next-i18next";

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>Dmitrijs Voronovs - new road to LU</title>
        <link rel="icon" href="/logo2@3x.png" />
      </Head>
      <Header />
      <main className="my-5 mx-5">
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

MyApp.propTypes = {
  Component: t.any,
  pageProps: t.object,
};

export default appWithTranslation(MyApp);
