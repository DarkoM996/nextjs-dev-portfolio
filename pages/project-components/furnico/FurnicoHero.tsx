import React from "react";

const FurnicoHero = () => {
  return (
    <section className="max-w-screen-md mx-auto w-full h-full relative px-6 py-6">
      <div className="flex flex-col justify-center items-start gap-6 lg:gap-16 lg:pt-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Furnico Web App
        </h1>
        <h3 className="text-2xl md:text-3xl font-medium text-primary_backgroundDarkerColor-600 dark:text-primary_customGray-200">
          Furnico is an ecommerce web app that relies on clean and minimalistic
          design with a brown color palette to create a warm and cozy feeling
          when the user is on the website.
        </h3>
      </div>
    </section>
  );
};

export default FurnicoHero;
