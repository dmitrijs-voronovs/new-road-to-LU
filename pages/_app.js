import React from "react";
import t from "prop-types";
import "../styles/tailwind.css";
import Theme from "../styles/Theme.js";
import { Footer } from "@components/Footer";
import { ThemeProvider } from "@wigxel/react-components";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <h1>I love myself</h1>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: t.any,
  pageProps: t.object,
};
