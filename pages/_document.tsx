import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./components/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Darko | Front End Developer </title>
      <body className="antialiased h-screen">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
