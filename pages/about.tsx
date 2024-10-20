import Head from "next/head";
import React from "react";
import AboutHero from "./components/AboutHero";
import AboutText from "./components/AboutText";

const about = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <AboutHero />
      <AboutText />
    </>
  );
};

export default about;
