import React from "react";
import Head from "next/head";
import CoffeeBarHero from "../project-components/coffeebar/CoffeeBarHero";

const coffeebar = () => {
  return (
    <>
      <Head>
        <title>Darko | Front End Developer</title>
      </Head>
      <CoffeeBarHero />
    </>
  );
};

export default coffeebar;
