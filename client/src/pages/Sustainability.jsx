import React from "react";
import sustainabilityImage from "../assets/images/sustainability.png";
import PromiseTop from "../components/PromiseTop";
import JourneySection from "../components/JourneySection";
import ImpactSection from "../components/ImpactSection";
import JoinGreenMovement from "../components/JoinGreenMovement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // ✅ Import Navbar

const SustainabilitySection = () => {
  return (
    <>
      <Navbar />

     <div
  className="relative w-full mt-20 h-screen bg-[#FFFBF3] bg-cover bg-center flex items-center justify-center overflow-x-hidden"
  style={{ backgroundImage: `url(${sustainabilityImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 z-0" />

  {/* Banner Content */}
  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8 text-white">
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight mb-6">
      <span className="text-orange-400">Sustainability</span> is Not a Choice.
      <br />
      It’s Our Way of Life.
    </h2>
    <p className="text-gray-200 text-xs sm:text-base md:text-lg lg:text-xl mb-8 max-w-xl mx-auto">
      At Milcko, sustainability is at the heart of everything we do — from the care of our cows to eco-friendly packaging. Every step of our process is designed to protect the planet. By choosing Milcko, you're supporting a greener future, one drop at a time.
    </p>
    <div className="flex justify-center">
      <button className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition text-2xl">
        &#8595;
      </button>
    </div>
  </div>
</div>


            
      <PromiseTop />
      <JourneySection />
      <ImpactSection />
      <JoinGreenMovement />
      <Footer />
    </>
  );
};

export default SustainabilitySection;

