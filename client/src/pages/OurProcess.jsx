import React from "react";
import processImage from "../assets/images/Steps.png";
import ExperienceMilcko from "../components/ExperienceMilcko";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // ✅ Import your Navbar

const OurProcess = () => {
  return (
    <section
      className="w-full bg-[#FFFBF3] mt-5 py-0 px-0 min-h-screen overflow-x-hidden"
      id="our-process"
    >
      {/* ✅ Main Content */}
      <div className="max-w-6xl mx-auto text-center px-2 xs:px-4 sm:px-6 flex flex-col items-center">
        {/* Heading + Subheading */}
        <div className="w-full mb-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Crafting Purity:{" "}
            <span className="text-orange-500">Our Process</span>,{" "}
            <span className="text-green-600">Your Trust</span>
          </h2>
          <p className="text-gray-800 font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
            Follow our journey from nurturing cows to delivering pure happiness
            at your doorstep.
          </p>
        </div>

        {/* ✅ Image Centered & Responsive */}
        <div className="w-full flex justify-center">
          <img
            src={processImage}
            alt="Our Process"
            className="rounded-lg w-full max-w-[95vw] xs:max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl object-contain"
          />
        </div>
      </div>

      {/* ✅ Extra Sections */}
      <ExperienceMilcko />
      <Footer />
    </section>
  );
};

export default OurProcess;
