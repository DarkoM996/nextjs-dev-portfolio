import Image from "next/image";
import React from "react";
import backgroundimage from "../../public/images/client-construction-website-mockup-v-1.4.jpg";

const AboutText = () => {
  return (
    <div className="max-w-screen-md mx-auto w-full h-full relative  flex flex-col justify-center items-start gap-6 px-6 py-8">
      {/* Paragraphs that give explanations */}
      <p className="text-xl text-black font-light ">
        I am Darko Mihajlovski, a creative developer and designer based out of
        Kumanovo, North Macedonia. I help companies and brands create beautiful
        and timeless expressions for the web while pushing for ever increasing
        quality of work.
      </p>
      <p className="text-xl text-black font-light ">
        I build websites and web apps that focus on clean and minimalistic
        design. My focus is on clean and minimalistic design with focus on well
        placed animations, transitions as well as interaction.
      </p>
      <p className="text-xl text-black font-light ">
        From marketing websites that inspire, to e-commerce that convinces and
        web apps that are truly beneficial. All while focusing on clean and
        minimalistic design to deliver use friendly designs for the web.
      </p>
      <p className="text-xl text-black font-light ">
        With my knowledge as a digital designer, I make sure that a visual
        identity can be used throughout all digital touchpoints in an accessible
        and user-friendly way. I build scalable websites from scratch that fit
        seamlessly with design. My focus is on clean and minimalistic design
        with carefully placed animations as well as transitions
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
      <div className="max-w-screen-md mx-auto w-full h-full relative py-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl py-10">Disciplines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl text-primary_customGray-900">
          <p>Front-End</p>
          <p>Web Design</p>
          <p>User Experience Design</p>
          <p>End-to-end Product Design</p>
          <p>Interaction Design</p>
          <p>Motion Design</p>
          <p>Interface Design</p>
          <p>Design Systems</p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
