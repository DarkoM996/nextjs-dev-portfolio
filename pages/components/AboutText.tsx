import Image from "next/image";
import React from "react";
import backgroundimage from "../../public/images/client-construction-website-mockup-v-1.3.jpg";

const AboutText = () => {
  return (
    <div className="max-w-screen-md mx-auto w-full h-full relative  flex flex-col justify-center items-start gap-6 px-6 py-8">
      {/* Paragraphs that give explanations */}
      <p className="text-xl text-primary_backgroundDarkerColor-950 dark:text-primary_backgroundLighterColor-500 font-light ">
        I am Darko Mihajlovski, a web developer with main focus on front end
        development and React in general based out of Kumanovo. I enjoy bringing
        high quality designs to life in the browser by building high quality and
        aestistically pleasing web apps and websites.
      </p>
      <p className="text-xl text-primary_backgroundDarkerColor-950 dark:text-primary_backgroundLighterColor-500 font-light ">
        I build web apps and websites that focus on clean, minimalistic and user
        friendly design. I utilize React.js as well as tools like Tailwind CSS,
        Scss etc to make this possible at a high quality level.
      </p>
      <p className="text-xl text-primary_backgroundDarkerColor-950 dark:text-primary_backgroundLighterColor-500 font-light ">
        From ecommerce that inspire, to e-commerce web apps, dashboards etc that
        convince and are truly beneficial. All while focusing on building and
        delivering high quaity as well as beautiful experiences for and on the
        web.
      </p>
      <p className="text-xl text-black font-light dark:text-primary_backgroundLighterColor-500">
        One aspect that makes me stand out as a front end developer is my
        passion and understanding of design. I design all my websites and web
        apps from scratch thanks to my knowledge of tools like Figma and
        Photoshop.
      </p>
      <p className="text-xl text-black font-light dark:text-primary_backgroundLighterColor-500">
        Additionally, I have worked with design component libraries such as
        Shadcn which make building design systems and bringing them in the web a
        seamless process. This allows to me understand when and where design
        requirements can be pushed or stopped depending on the case.
      </p>

      {/* Image that can be changed  */}
      <div className="relative w-full h-screen py-16">
        <Image
          src={backgroundimage}
          alt="project image"
          className="object-cover rounded-2xl w-full h-full"
        />
      </div>
      {/* Section about technologies used with icons from react icons */}
      <div className="max-w-screen-md mx-auto w-full h-full relative py-4 dark:text-primary_backgroundLighterColor-500">
        <h2 className="text-3xl md:text-4xl lg:text-5xl py-10">Disciplines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl text-primary_customGray-900 dark:text-primary_customGray-500">
          <p>Front-End</p>
          <p>Web Design</p>
          <p>Back-End</p>
          <p>End-to-end Product Design</p>
          <p>Interaction Design</p>
          <p>User Experience Design</p>
          <p>Interface Design</p>
          <p>Design Systems</p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
