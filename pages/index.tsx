import React from "react";
import Head from "next/head";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";

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
    </main>
  );
};

export default index;
