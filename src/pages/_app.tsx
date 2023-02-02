import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/navbar/Navbar";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider>
        <Navbar />

        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
