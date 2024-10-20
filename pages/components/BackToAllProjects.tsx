import React from "react";
import Link from "next/link";

const BackToAllProjects = () => {
  return (
    <section className="">
      {" "}
      {/* Back To All Projects */}
      <div className="flex flex-col justify-center items-center w-full h-[600px]">
        <Link
          href="/"
          prefetch={false}
          className="text-3xl md:text-4xl  font-semibold hover:underline"
        >
          Back To Projects
        </Link>
      </div>
    </section>
  );
};

export default BackToAllProjects;
