import React from "react";
import sustainabilityImage from "../assets/images/sustainability.png";
import PromiseTop from "../components/PromiseTop";
import JourneySection from "../components/JourneySection";
import ImpactSection from "../components/ImpactSection";
import JoinGreenMovement from "../components/JoinGreenMovement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SustainabilitySection = () => {
  return (
    <>
    
      {/* Hero Banner */}
      <div
        className="relative w-full  min-h-[70vh] sm:min-h-[80vh] md:min-h-screen bg-[#FFFBF3] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${sustainabilityImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Banner Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full max-w-5xl mx-auto text-center px-3 sm:px-6 md:px-8 text-white">
          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight mb-3 sm:mb-5">
            <span className="text-orange-400">Sustainability</span> is Not a
            Choice.
            <br className="hidden sm:block" />
            It’s Our Way of Life.
          </h2>

          <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-5 sm:mb-7 max-w-3xl mx-auto leading-relaxed">
            At Milcko, sustainability is at the heart of everything we do — from
            the care of our cows to eco-friendly packaging. Every step of our
            process is designed to protect the planet. By choosing Milcko,
            you're supporting a greener future, one drop at a time.
          </p>

          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition text-lg sm:text-xl md:text-2xl">
              &#8595;
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <PromiseTop />
      <JourneySection />
      <ImpactSection />
      <JoinGreenMovement />
      <Footer />
    </>
  );
};

export default SustainabilitySection;
