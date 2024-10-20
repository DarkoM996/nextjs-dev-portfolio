import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-screen-2xl mx-auto flex justify-between items-center w-full h-20 px-6 py-4">
      <Link
        href="/"
        prefetch={false}
        className="text-xl font-bold text-wrap hover:underline"
      >
        Darko Mihajlovski
      </Link>
      <Link
        href="/about"
        prefetch={false}
        className="text-xl font-semibold hover:underline"
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
