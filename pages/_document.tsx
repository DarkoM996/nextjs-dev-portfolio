import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./components/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Darko | Front End Developer </title>
      <body className="antialiased h-screen bg-primary_backgroundLighterColor-50 dark:bg-primary_backgroundDarkerColor-950">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
