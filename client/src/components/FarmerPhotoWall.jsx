import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import photoWallImage from '../assets/images/Photowall.png';

const FarmerPhotoWall = () => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = 5200;
      const duration = 1500;
      const increment = end / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(counter);
    }
  }, [inView]);

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* LEFT TEXT SECTION */}
        <motion.div
          ref={ref}
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-snug">
            <span className="text-green-600">{count.toLocaleString()}+</span> Farmers Strong!
          </h2>
          <p className="text-gray-700 font-semibold text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
            Milcko has created a trusted community of farmers by focusing on fairness and transparency in every step of the process.
            From quick and secure payments to real-time tracking, Milcko is here to empower farmers to succeed while valuing their
            hard work and dedication.
          </p>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
            Join us and experience a platform that treats you like a true partner.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full shadow-md transition duration-300 text-sm sm:text-base lg:text-lg"
          >
            Join Us and Grow
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE WALL */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <img
            src={photoWallImage}
            alt="Farmer Photo Wall"
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-xl object-contain md:object-cover shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FarmerPhotoWall;
