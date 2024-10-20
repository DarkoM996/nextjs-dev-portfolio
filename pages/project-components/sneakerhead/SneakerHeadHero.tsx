import React from "react";

const SneakerHeadHero = () => {
  return (
    <section className="max-w-screen-md mx-auto w-full h-full relative px-6 py-4">
      <div className="flex flex-col justify-center items-start gap-6 lg:gap-16 lg:pt-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          SneakerHead
        </h1>
        <h3 className="text-2xl md:text-3xl font-medium text-primary_backgroundDarkerColor-600">
          SneakerHead is a full stack ecommerce web app. The brand's primary
          goal is to bring a collection of the best sneakers from the world's
          top sneaker brands available to their customers while providing the
          best possible experience on the app.
        </h3>
      </div>
    </section>
  );
};

export default SneakerHeadHero;
