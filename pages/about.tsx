import Head from "next/head";
import React from "react";
import AboutHero from "./components/AboutHero";
import AboutText from "./components/AboutText";
import CTA from "./components/CTA";

const about = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <AboutHero />
      <AboutText />
      <CTA />
    </>
  );
};

export default about;
