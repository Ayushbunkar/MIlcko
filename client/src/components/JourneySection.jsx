import React from 'react';
import journeyImage from '../assets/images/ourjourney.png'; // Full journey image

const JourneySection = () => {
  return (
    <section className="bg-[#f0f4ec] py-10 sm:py-14 md:py-16 px-3 sm:px-6 md:px-12 overflow-hidden">
      <div className="w-full bg-[#e8f5e9] py-6 sm:py-8 md:py-10 px-3 sm:px-5 md:px-8 rounded-2xl shadow-lg">
        <div className="max-w-7xl mx-auto">
          <img
            src={journeyImage}
            alt="Journey to a Greener Tomorrow"
            className="w-full max-w-full h-auto object-contain rounded-xl sm:rounded-2xl md:rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
