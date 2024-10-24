import React, { useEffect } from "react";

const ThemeButtonSwitch = () => {
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
    <button
      onClick={toggleTheme}
      className="flex justify-center items-center m-auto text-lg w-fit bg-primary_backgroundDarkerColor-900 dark:bg-primary_backgroundLighterColor-100 dark:text-black transition-color duration-200 ease-in-out py-3 px-10 rounded-lg text-gray-50 font-semibold"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeButtonSwitch;
