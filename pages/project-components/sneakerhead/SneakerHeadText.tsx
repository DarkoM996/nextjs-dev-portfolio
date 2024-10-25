import React from "react";

const SneakerHeadText = () => {
  return (
    <section className="max-w-screen-md mx-auto w-full h-full flex flex-col justify-center items-start gap-6 relative px-6 py-4">
      <p className="text-xl leading-normal text-primary_customGray-900  dark:text-primary_customGray-500">
        SneakerHead is an ecommerce web app that aims to bring high quality
        sneaker collections to its users. The web app was designed with a brown
        color palette and an open source sans serif typeface to create a high
        end web app that is visually stunning and easy to use.
      </p>
      <p className="text-xl leading-normal text-primary_customGray-900  dark:text-primary_customGray-500">
        The design process was executed in Figma with the mockups that you are
        seeing below done in Photoshop. The goals of this design are to stand
        out from the competition with a visually stunning web app that is easy
        to use.
      </p>
      <p className="text-xl leading-normal text-primary_customGray-900  dark:text-primary_customGray-500">
        The development process to bring this to the web will be likely done in
        React with either Tailwind CSS or SCSS, Node.Js, Express etc in the near
        future. For now, you can check out the designs below.
      </p>
    </section>
  );
};

export default SneakerHeadText;
