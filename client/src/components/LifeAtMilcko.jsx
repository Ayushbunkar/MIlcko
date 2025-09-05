import React from "react";
import scrapbookImage from "../assets/images/scrapbook.png"; // regular image to show below

const LifeAtMilcko = () => {
  return (
    <section className="bg-[#FFFBF3] px-4 sm:px-6 md:px-10 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto text-center text-black">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-snug">
          Life At <span className="text-yellow-600">Milcko</span>.
        </h2>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
          We’re more than a workplace — we’re a team driven by purpose, passion,
          and people. From rural mornings to tech brainstorms, Milcko is where
          real impact begins.
        </p>

        {/* Image */}
        <img
          src={scrapbookImage}
          alt="Life at Milcko Scrapbook"
          className="mx-auto rounded-xl shadow-lg w-full max-w-6xl h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default LifeAtMilcko;
