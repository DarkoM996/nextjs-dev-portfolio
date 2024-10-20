import React from "react";

const TheTomatoHero = () => {
  return (
    <section className="max-w-screen-md mx-auto w-full h-full relative px-6 py-4">
      <div className="flex flex-col justify-center items-start gap-6 lg:gap-16 lg:pt-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          TheTomato
        </h1>
        <h3 className="text-2xl md:text-3xl font-medium text-neutral-600">
          The Tomato is a food web app that's designed to be easy to use with a
          clean and minimalistic design. The brand's goals are to make ordering
          food an enjoyable and seamless process.
        </h3>
      </div>
    </section>
  );
};

export default TheTomatoHero;
