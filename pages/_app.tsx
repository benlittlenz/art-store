import { useRouter } from "next/router";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";
import ShopProvider from "../context/shopContext";
import { GlobalStyles, lightTheme } from "../theme";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ShopProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ThemeProvider>
    </ShopProvider>
  );
}

export default MyApp;
