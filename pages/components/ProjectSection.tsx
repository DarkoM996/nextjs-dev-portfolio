import Image from "next/image";
import picture1 from "../../public/images/furniturewebsite-featured-pic(optimized)-2.4.jpg";
import picture2 from "../../public/images/travel-landing-page-featured-pic-(optimized)-2.1.jpg";
import picture3 from "../../public/images/sneaker-head-featured-pic-(optimized)-2.5.jpg";
import picture4 from "../../public/images/food-web-app-featured-pic-(optimized)-2.0.jpg";
import picture5 from "../../public/images/sneaker-head-featured-pic-(optimized)-2.5.jpg";
import React from "react";

const ProjectSection = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-screen px-6 py-4 lg:px-32">
      {/* Image 1 */}
      <div className="relative w-full h-[520px] md:h-[720px] py-12">
        <Image
          priority={true}
          src={picture1}
          alt="project image"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
    </section>
  );
};

export default ProjectSection;
