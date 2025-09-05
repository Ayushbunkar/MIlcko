import React from "react";
import { motion } from "framer-motion";
import careersImage from "../assets/images/careers.png";
import PurposeCards from "../components/PurposeCards";
import RoleCarousel from "../components/RoleCarousel";
import LifeAtMilcko from "../components/LifeAtMilcko";
import WelcomeBanner from "../components/WelcomeBanner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import topwave from "../assets/images/topwave.png";
import bottomw from "../assets/images/bottomw.png";
import bgwave from "../assets/images/bgwave.png";

const CareersSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full -mt-7 h-screen bg-no-repeat bg-center bg-contain overflow-hidden"
        style={{
          backgroundImage: `url(${bgwave})`,
          backgroundSize: "1540px 694px", // 👈 custom bg size
        }}
      >
        {/* Cream background behind content but above bgwave */}
        <div className="absolute inset-0  opacity-90 z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-12 h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={careersImage}
              alt="Milcko Careers"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left w-full lg:w-1/2 max-w-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-snug mb-4 sm:mb-6">
              Work That <span className="text-green-700">Nourishes</span> Lives.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-5 sm:mb-6">
              We're not just delivering milk — we're delivering fairness,
              sustainability, and change. <br />
              Join a purpose-led team working at the intersection of tech,
              farms, and people.
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-800 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3.5 md:py-4 rounded-full shadow-lg hover:bg-green-900 transition-all duration-300"
            >
              View Open Roles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sub-sections */}
      <div className="bg-[#fff9ef] overflow-hidden relative z-10">
        <PurposeCards />
        <RoleCarousel />
        <LifeAtMilcko />
        <WelcomeBanner />
        <Footer />
      </div>
    </>
  );
};

export default CareersSection;
