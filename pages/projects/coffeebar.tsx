import React from "react";
import Head from "next/head";
import CoffeeBarHero from "../project-components/coffeebar/CoffeeBarHero";
import CoffeeBarText from "../project-components/coffeebar/CoffeeBarText";
import CoffeeBarImages from "../project-components/coffeebar/CoffeeBarImages";
import BackToAllProjects from "../components/BackToAllProjects";
import Footer from "../components/Footer";

const coffeebar = () => {
  return (
    <>
      {/* This can be defined at the document.js/ts level but I like doing this way as well */}
      <Head>
        <title>Darko | Front End Developer</title>
      </Head>
      <CoffeeBarHero />
      <CoffeeBarText />
      <CoffeeBarImages />
      <BackToAllProjects />
      <Footer />
    </>
  );
};

export default coffeebar;
