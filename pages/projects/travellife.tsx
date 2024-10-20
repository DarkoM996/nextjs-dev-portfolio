import React from "react";
import Head from "next/head";
import TravelLifeHero from "../project-components/travellife/TravelLifeHero";
import TravelLifeText from "../project-components/travellife/TravelLifeText";

const travellife = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <TravelLifeHero />
      <TravelLifeText />
    </>
  );
};

export default travellife;
