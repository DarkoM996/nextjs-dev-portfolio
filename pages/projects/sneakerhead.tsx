import React from "react";
import Head from "next/head";
import SneakerHeadHero from "../project-components/sneakerhead/SneakerHeadHero";
import SneakerHeadText from "../project-components/sneakerhead/SneakerHeadText";

const sneakerhead = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <SneakerHeadHero />
      <SneakerHeadText />
    </>
  );
};

export default sneakerhead;
