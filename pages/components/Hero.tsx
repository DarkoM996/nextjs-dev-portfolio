import React, { useEffect } from "react";
import ThemeButtonSwitch from "./ThemeButtonSwitch";

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
    <main className="max-w-screen-2xl mx-auto w-full h-[60vh] relative px-6 py-4">
      <div className="flex flex-col justify-center items-center w-full h-[80%] gap-8">
        {/* Working Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Web Development. Front End. React. Design Systems & More
        </h1>
        <button className="hover:underline text-2xl p-2" onClick={toggleTheme}>
          Cool Effect
        </button>
      </div>
    </main>
  );
};

export default Hero;
