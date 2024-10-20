import React from "react";
import Head from "next/head";
import CoffeeBarHero from "../project-components/coffeebar/CoffeeBarHero";
import CoffeeBarText from "../project-components/coffeebar/CoffeeBarText";
import CoffeeBarImages from "../project-components/coffeebar/CoffeeBarImages";

const coffeebar = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
      </Head>
      <CoffeeBarHero />
      <CoffeeBarText />
      <CoffeeBarImages />
    </>
  );
};

export default coffeebar;
