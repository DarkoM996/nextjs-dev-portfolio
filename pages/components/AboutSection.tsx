import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-full h-full px-6 py-4 lg:px-32">
      <div className="flex flex-col justify-center items-start w-full h-full gap-52 py-16">
        {/* Small paragraph section */}
        <div className="flex flex-col justify-center items-start gap-4">
          {/* This text needs reworking */}
          <p className="w-full text-xl text-primary_customGray-800  dark:text-primary_customGray-500">
            I am Darko Mihajlovski, a creative developer and designer based out
            of Kumanovo, North Macedonia. I help companies and brands with
            specific solutions while focusing on taking my work to the next
            level with quality as the main goal.
          </p>
          {/* Link to another part of the website */}
          <Link
            href="/about"
            className="text-2xl font-semibold items-start hover:underline"
          >
            More About Me
          </Link>
        </div>
        {/* Get in touch section */}
        <div className="flex flex-col justify-center items-start gap-2 w-full h-full">
          <p className="text-base text-primary_customGray-800  dark:text-primary_customGray-500 w-full h-fit text-left">
            Get in touch
          </p>
          {/* Add a link pointing towards the email */}
          <div className="flex flex-col justify-center items-start w-full h-full">
            <a
              href="https://dribbble.com/DarkoM_0-10"
              onClick={() =>
                (window.location.href = "mailto:darko.mihajlovski96@gmail.com")
              }
              className="text-4xl text-pretty text-bold"
            >
              My Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
