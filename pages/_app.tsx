import "../styles/globals.css";
import localFont from "@next/font/local";

import type { AppProps } from "next/app";

const semplicitaFont = localFont({ src: "./Semplicita-Medium.otf" });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={semplicitaFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
