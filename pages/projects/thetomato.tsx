import React from "react";
import Head from "next/head";
import TheTomatoHero from "../project-components/thetomato/TheTomatoHero";
import TheTomatoText from "../project-components/thetomato/TheTomatoText";

const thetomato = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <TheTomatoHero />
      <TheTomatoText />
    </>
  );
};

export default thetomato;
