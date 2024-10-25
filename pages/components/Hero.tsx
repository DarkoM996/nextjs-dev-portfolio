import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <main className="max-w-screen-2xl mx-auto w-full h-[60vh] relative px-4 py-4 md:px-6">
      <div className="flex flex-col justify-center items-center w-full h-[80%] gap-8">
        {/* Working Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Web Development. Front End. React. Design Systems & More
          <button
            className="absolute bottom-0 right-0 mr-6 mb-6 hover:underline text-xl p-4 bg-black text-white rounded-full"
            onClick={toggleTheme}
          >
            Cool Effect
          </button>
        </h1>
      </div>
    </main>
  );
};

export default Hero;
