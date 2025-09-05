import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import imgManya from "../assets/images/Manya.png";
import imgSameer from "../assets/images/Sameer.png";
import imgMansi from "../assets/images/Mansi.png";
import imgAmit from "../assets/images/Leftfarmer.png";
import imgRajesh from "../assets/images/Rightfarmer.png";
import imgSuresh from "../assets/images/Centerfarmer.png";
import bgIllustration from "../assets/images/cows.png";

const customers = [imgManya, imgSameer, imgMansi];
const farmers = [imgAmit, imgRajesh, imgSuresh];

const FlashcardSlider = ({ images, autoDelay = 2500 }) => {
  const [active, setActive] = useState(0);

  // auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, autoDelay);
    return () => clearInterval(timer);
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  // find left + right indices
  const left = (active - 1 + images.length) % images.length;
  const right = (active + 1) % images.length;

  return (
    <div className="relative flex items-center justify-center w-full h-[400px]">
      {/* Left arrow */}
     

      <div className="relative w-full flex items-center justify-center">
        {/* Left card */}
        <motion.img
          key={left}
          src={images[left]}
          alt="left"
          className="absolute w-[220px] h-auto rounded-2xl shadow-xl"
          initial={{ x: -150, scale: 0.9, opacity: 0.6 }}
          animate={{ x: -150, scale: 0.9, opacity: 0.6, zIndex: 5 }}
          transition={{ duration: 0.6 }}
        />

        {/* Center (active) card */}
        <motion.img
          key={active}
          src={images[active]}
          alt="center"
          className="absolute w-[260px] h-auto rounded-2xl shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1, zIndex: 10 }}
          transition={{ duration: 0.6 }}
        />

        {/* Right card */}
        <motion.img
          key={right}
          src={images[right]}
          alt="right"
          className="absolute w-[220px] h-auto rounded-2xl shadow-xl"
          initial={{ x: 150, scale: 0.9, opacity: 0.6 }}
          animate={{ x: 150, scale: 0.9, opacity: 0.6, zIndex: 5 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
};

const ChevronLeft = (props) => (
  <svg width={28} height={28} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15 19l-7-7 7-7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ChevronRight = (props) => (
  <svg width={28} height={28} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FlashcardGallery = () => {
  return (
    <section className="relative bg-[#FFFBF3] overflow-hidden px-4 py-16">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-10 pointer-events-none">
        <img
          src={bgIllustration}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-6xl mx-auto mb-12 text-center">
        <motion.h2
          className="font-extrabold text-3xl md:text-4xl text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by{" "}
          <span className="text-green-600">Farmers</span>, Loved by{" "}
          <span className="text-orange-500">Customers</span>.
        </motion.h2>
        <p className="text-gray-600 text-base md:text-lg font-semibold max-w-3xl mx-auto mt-3">
          From the hands that care to the homes that share — our fresh dairy
          connects families and farmers in a bond of purity.
        </p>
      </div>

      {/* Sliders */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Customers */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-center text-orange-500">
            Customers
          </h3>
          <FlashcardSlider images={customers} autoDelay={3000} />
        </div>

        {/* Farmers */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-center text-green-600">
            Farmers
          </h3>
          <FlashcardSlider images={farmers} autoDelay={3000} />
        </div>
      </div>
    </section>
  );
};

export default FlashcardGallery;
