import React from "react";
import { motion } from "framer-motion";
import reuseImage from "../assets/images/returnuse.png";

const JoinGreenMovement = () => {
  return (
    <section className="bg-[#f9c978] px-4 sm:px-6 md:px-10 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <div className="w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-8 border-[#c07a2b] shadow-lg mx-auto lg:mx-0">
            <img
              src={reuseImage}
              alt="Return for reuse"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-snug">
            Join the <span className="text-green-700">Green</span> Movement!
          </h2>

          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-medium leading-relaxed">
            Every returned bottle tells a story of care.  
            Join hands with us to support farmers and nurture a cleaner, greener tomorrow.
          </p>

          <button className="mt-5 sm:mt-7 md:mt-8 bg-green-800 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3.5 md:py-4 rounded-full shadow-lg hover:bg-green-900 transition duration-300">
            Become a Green Milcko Member
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinGreenMovement;
