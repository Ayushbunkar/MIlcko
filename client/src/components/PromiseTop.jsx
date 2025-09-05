import React from 'react';
import promiseIcon from '../assets/images/promisecards.png'; // Card image
import sectionBg from '../assets/images/promisebg.png'; // Background image

const PromiseTop = () => {
  return (
    <section
      className="w-full bg-[#FFFBF3] bg-cover bg-center bg-no-repeat py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: `url(${sectionBg})`,
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-black">
          Our <span className="text-orange-400">Promise</span> to{" "}
          <span className="text-green-600">Nature.</span>
        </h2>

        {/* Paragraph */}
        <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 font-medium max-w-3xl mx-auto leading-relaxed px-2">
          At Milcko, sustainability isn’t a trend — it’s the soul of everything
          we do. From farm to doorstep, we nurture nature with every step.
        </p>
      </div>

      {/* Big Card Image */}
      <div className="mt-8 sm:mt-10 w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={promiseIcon}
          alt="Our Promise Card"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default PromiseTop;
