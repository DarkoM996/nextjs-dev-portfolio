import React from "react";
import Head from "next/head";
import TheTomatoHero from "../project-components/thetomato/TheTomatoHero";
import TheTomatoText from "../project-components/thetomato/TheTomatoText";
import TheTomatoImages from "../project-components/thetomato/TheTomatoImages";
import BackToAllProjects from "../components/BackToAllProjects";
import Footer from "../components/Footer";

const thetomato = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <TheTomatoHero />
      <TheTomatoText />
      <TheTomatoImages />
      <BackToAllProjects />
      <Footer />
    </>
  );
};

export default thetomato;
