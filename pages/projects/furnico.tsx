import React from "react";
import Head from "next/head";
import FurnicoHero from "../project-components/furnico/FurnicoHero";
import FurnicoText from "../project-components/furnico/FurnicoText";

const furnico = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <FurnicoHero />
      <FurnicoText />
    </>
  );
};

export default furnico;
