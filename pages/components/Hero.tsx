import React from "react";

const Hero = () => {
  return (
    <main className="max-w-screen-2xl mx-auto w-full h-[60vh] relative px-6 py-4 dark:bg-neutral-900">
      <div className="flex flex-col justify-center items-start w-full h-full">
        {/* Working Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white">
          Web Development. Front End. React. Design Systems & More
        </h1>
      </div>
    </main>
  );
};

export default Hero;
