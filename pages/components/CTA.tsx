import React from "react";

const CTA = () => {
  return (
    <section className="max-w-screen-md mx-auto w-full h-4/5 relative px-6 py-4 lg:py-24">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
        Contact Me
      </h2>
      {/* Text + Link */}
      <div className="flex flex-col justify-between items-start gap-10 py-12">
        <p className="text-2xl text-primary_customGray-900">
          Feel free to reach out for projects, collaborations, or just to say
          hello! Currently seeking new opportunities.
        </p>
        <div className="flex flex-col justify-start items-start gap-2">
          <a
            href="/"
            onClick={() =>
              (window.location.href = "mailto:darko.mihajlovski96@gmail.com")
            }
            className="text-black font-medium text-xl"
          >
            darko.mihajlovski96@gmail.com
          </a>
          <a href="/">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
