import React from "react";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-full relative px-6 py-4 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-primary_customGray-700">&copy; Darko Mihajlovski</p>
        {/* Icons with links pointing out to socials */}
        <div className="flex items-center gap-8 text-2xl">
          <a href="https://github.com/DarkoM996">
            <FaGithub />
          </a>
          <a href="https://www.behance.net/darkomihajlo">
            <FaBehance />
          </a>
          <a href="https://dribbble.com/DarkoM_0-10">
            <FaDribbble />
          </a>
          <a href="https://www.linkedin.com/in/darko-mihajlovski-1bb4701b7">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
