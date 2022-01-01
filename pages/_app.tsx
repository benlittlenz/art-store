import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";
import { GlobalStyles, lightTheme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
