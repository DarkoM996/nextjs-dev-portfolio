import React from "react";

const TravelLifeText = () => {
  return (
    // H-full aka height:100% gives the desired design effect here
    <section className="max-w-screen-md mx-auto w-full h-full relative flex flex-col justify-center items-start gap-6 px-6 py-4">
      <p className="text-xl leading-normal text-primary_customGray-900  dark:text-primary_customGray-500">
        TravelLife started as a simple design hero exploration exercise. Once I
        finished the initial hero section design, this inspired me to continue
        designing and create two full design case studies following this layout.
        In this case study, I will be speaking about the first design
        exploration and that is TravelLife.
      </p>
      <p className="text-xl leading-normal text-primary_customGray-900  dark:text-primary_customGray-500">
        My role here was to design a captivating travel website that is modern,
        easy to use and captures the attention of the use while showcasing the
        brand's goals. To do so, I relied on a simple black color palette with
        clean typography, clean layout and few but well placed animations to
        showcase some personality.
      </p>
      <p className="text-xl leading-normal text-primary_customGray-900  dark:text-primary_customGray-500">
        Seeing as how the design was great in Figma, I decided to continue the
        process and tuned in to Visual Studio for the next step. To bring the
        project to the web, I used React, Tailwind CSS and a little bit of
        Framer Motion. Tailwind allows for true web design and makes the process
        seamless. It shines so much that it offers advantages for futher design
        exploration that design tools like Figma can't do at the moment.
      </p>
      <p className="text-xl leading-normal text-primary_customGray-900  dark:text-primary_customGray-500">
        The front end was built with React. Routing was done with the React
        Router version 6.4. This project was additionally enhanced with some
        simple animations with Framer Motion, an animation library for React.
        Framer Motion makes adding animations simple and it definitely adds to
        the overall experience as long as they are carefully made and used. Feel
        free to check out the final landing page on the web on the link below
      </p>
      <p className="text-xl leading-normal text-primary_customGray-900  dark:text-primary_customGray-500">
        The landing page was a great project to enhance and develop web
        development as well web design skills in general. It showed me the power
        of Tailwind and JSX, which made building a prototype in React super easy
        yet so nice. Additionally, the usage of Framer Motion showed that
        animations don't have to be complicated nor overdone to be effective and
        to add to the landing page.
      </p>
      <p className="text-xl leading-normal text-primary_customGray-900  dark:text-primary_customGray-500">
        <a
          href="https://travel-life-web.netlify.app/"
          className="text-black hover:underline"
        >
          Travel Life Landing Page
        </a>
      </p>
    </section>
  );
};

export default TravelLifeText;
