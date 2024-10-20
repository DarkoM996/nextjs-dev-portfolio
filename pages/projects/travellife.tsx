import React from "react";
import Head from "next/head";
import TravelLifeHero from "../project-components/travellife/TravelLifeHero";
import TravelLifeText from "../project-components/travellife/TravelLifeText";
import TravelLifeImages from "../project-components/travellife/TravelLifeImages";
import BackToAllProjects from "../components/BackToAllProjects";
import Footer from "../components/Footer";

const travellife = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <TravelLifeHero />
      <TravelLifeText />
      <TravelLifeImages />
      <BackToAllProjects />
      <Footer />
    </>
  );
};

export default travellife;
