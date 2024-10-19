import React from "react";
import Head from "next/head";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";

const index = () => {
  return (
    <main>
      {/* Head can be defined also in document.tsx and the meta title can still stand for the homepage too */}
      <Head>
        <title>Darko | Front End Developer</title>
        <meta />
      </Head>
      <Hero />
      <ProjectSection />
      <AboutSection />
    </main>
  );
};

export default index;
