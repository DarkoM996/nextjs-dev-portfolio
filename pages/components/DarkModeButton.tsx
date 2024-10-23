import * as React from "react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
const iconStyles = "h-4 w-4 text-gray-600 dark:text-gray-300";

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
