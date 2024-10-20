import React from "react";
import Head from "next/head";
import SneakerHeadHero from "../project-components/sneakerhead/SneakerHeadHero";
import SneakerHeadText from "../project-components/sneakerhead/SneakerHeadText";
import SneakerHeadImages from "../project-components/sneakerhead/SneakerHeadImages";
import BackToAllProjects from "../components/BackToAllProjects";
import Footer from "../components/Footer";

const sneakerhead = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <SneakerHeadHero />
      <SneakerHeadText />
      <SneakerHeadImages />
      <BackToAllProjects />
      <Footer />
    </>
  );
};

export default sneakerhead;
