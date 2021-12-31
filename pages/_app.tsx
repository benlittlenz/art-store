import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
