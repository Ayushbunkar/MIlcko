import React from 'react';
import fairPayImg from '../assets/images/cards.png'; 

const AppSupportSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
      {/* ✅ Heading & Paragraph */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
          One <span className="text-green-600">App</span>. Endless{" "}
          <span className="text-orange-500">Support</span>.
        </h2>
        <p className="mt-3 sm:mt-4 md:mt-5 text-gray-900 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Our app helps you track milk, receive direct payments, and manage your
          dairy journey — all from your phone, with ease.
        </p>
      </div>

      {/* ✅ Fully Responsive Image */}
      <div className="flex justify-center">
        <img
          src={fairPayImg}
          alt="App Support"
          className="w-full max-w-[1100px] h-auto object-contain drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default AppSupportSection;
