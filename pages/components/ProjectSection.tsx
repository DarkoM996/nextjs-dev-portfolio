import Image from "next/image";
import picture1 from "../../public/images/furniturewebsite-featured-pic(optimized)-2.4.jpg";
import picture2 from "../../public/images/travel-landing-page-featured-pic-(optimized)-2.1.jpg";
import picture3 from "../../public/images/sneaker-head-featured-pic-(optimized)-2.5.jpg";
import picture4 from "../../public/images/coffee-bar-concept-version-2.0-volume-2.3.jpg";
import picture5 from "../../public/images/mockup-for-food-app-4.jpg";
import React from "react";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto w-full min-h-screen relative px-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-24">
        {/* Project 1 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-40">
          <Link
            href="/projects/furnico"
            className="relative w-full h-[420px] md:h-[720px]"
          >
            <Image
              priority={true}
              src={picture1}
              alt="project image 1"
              className="w-full h-full object-cover rounded-3xl hover:scale-90 duration-500 transition-transform "
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-950 dark:text-primary_backgroundLighterColor-500">
              Furnico
            </h4>
            <p className="text-xl font-light text-primary_customGray-400">
              Ecommerce Full Stack Web App
            </p>
          </div>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col justify-center items-center gap-4">
          <Link
            href="/projects/travellife"
            className="relative w-full h-[420px] md:h-[720px]"
          >
            <Image
              priority={true}
              src={picture2}
              alt="project image 2"
              className="w-full h-full object-cover rounded-3xl hover:scale-90 duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-950 dark:text-primary_backgroundLighterColor-500">
              TravelLife
            </h4>
            <p className="text-xl font-light text-primary_customGray-400">
              Travel Website Landing Page
            </p>
          </div>
        </div>
        {/* Project 3 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-36">
          <Link
            href="/projects/sneakerhead"
            className="relative w-full h-[420px] md:h-[720px]"
          >
            <Image
              priority={true}
              src={picture3}
              alt="project image 3"
              className="w-full h-full object-cover rounded-3xl hover:scale-90 duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-950 dark:text-primary_backgroundLighterColor-500">
              SneakerHead
            </h4>
            <p className="text-xl font-light text-primary_customGray-400">
              Travel Website Landing Page
            </p>
          </div>
        </div>
        {/* Project 4 */}
        <div className="flex flex-col justify-center items-center gap-4 md:mb-10">
          <Link
            href="/projects/coffeebar"
            className="w-full h-[420px] md:h-[720px]"
          >
            <Image
              priority={true}
              src={picture4}
              alt="project image 4"
              className="w-full h-full object-cover rounded-3xl hover:scale-90 duration-500 transition-transform"
            />
          </Link>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-950 dark:text-primary_backgroundLighterColor-500">
              The Tomato
            </h4>
            <p className="text-xl font-light text-primary_customGray-400">
              Food Web App
            </p>
          </div>
        </div>
        {/* Project 5 */}
        <div className="flex flex-col justify-center items-center gap-4 mb-40">
          <Link
            href="/projects/thetomato"
            className="relative w-full h-[420px] md:h-[720px]"
          >
            <Image
              priority={true}
              src={picture5}
              alt="project image 5"
              className="w-full h-full object-cover rounded-3xl hover:scale-90 duration-500 transition-transform "
            />
          </Link>
          <div className="flex flex-col justify-center items-center p-4 gap-2">
            <h4 className="text-2xl font-semibold text-primary_backgroundDarkerColor-950 dark:text-primary_backgroundLighterColor-500">
              The Tomato
            </h4>
            <p className="text-xl font-light text-primary_customGray-400">
              Food Web App
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
