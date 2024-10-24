import Head from "next/head";
import React from "react";
import AboutHero from "./components/AboutHero";
import AboutText from "./components/AboutText";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const about = () => {
  return (
    <main className="bg-primary_backgroundLighterColor-50 dark:bg-primary_backgroundDarkerColor-950">
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <AboutHero />
      <AboutText />
      <CTA />
      <Footer />
    </main>
  );
};

export default about;
