import React from "react";
import Head from "next/head";
import FurnicoHero from "../project-components/furnico/FurnicoHero";
import FurnicoText from "../project-components/furnico/FurnicoText";
import FurnicoImages from "../project-components/furnico/FurnicoImages";

const furnico = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <FurnicoHero />
      <FurnicoText />
      <FurnicoImages />
    </>
  );
};

export default furnico;
