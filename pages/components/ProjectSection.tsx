import Image from "next/image";
import picture1 from "../../public/images/furniturewebsite-featured-pic(optimized)-2.4.jpg";
import picture2 from "../../public/images/travel-landing-page-featured-pic-(optimized)-2.1.jpg";
import picture3 from "../../public/images/sneaker-head-featured-pic-(optimized)-2.5.jpg";
import picture4 from "../../public/images/food-web-app-featured-pic-(optimized)-2.0.jpg";
import picture5 from "../../public/images/sneaker-head-featured-pic-(optimized)-2.5.jpg";
import React from "react";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-4 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24">
        {/* Project 1 */}
        <div className="flex flex-col justify-center items-center gap-4 mb-40">
          <Link
            href="/projects/furnico"
            className="relative w-full h-[420px] md:h-[720px]"
          >
            <Image
              priority={true}
              src={picture1}
              alt="project image 1"
              className="w-full h-full object-cover rounded-3xl hover:scale-90"
            />
          </Link>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col justify-center items-center gap-4"></div>
      </div>
    </section>
  );
};

export default ProjectSection;
