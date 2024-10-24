import React from "react";

const CoffeeBarHero = () => {
  return (
    <section className="max-w-screen-md mx-auto w-full h-full relative px-6 py-4">
      <div className="flex flex-col justify-center items-start gap-6 lg:gap-16 lg:pt-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          CoffeeBar
        </h1>
        <h3 className="text-2xl md:text-3xl font-medium text-primary_backgroundDarkerColor-600 dark:text-primary_customGray-200">
          CoffeeBar is a UX UI Design case study about a coffee bar where people
          can enjoy their favorite cup of coffee in a relaxing atmosphere that
          tests an innovative concept.
        </h3>
      </div>
    </section>
  );
};

export default CoffeeBarHero;
