import * as React from "react";
import { useState } from "react";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="flex justify-center items-center p-6 rounded-full bg-neutral-200 dark:bg-neutral-900"
      onClick={toggleDarkMode}
    >
      {darkMode ? "LGT" : "DRK"}
    </button>
  );
}
