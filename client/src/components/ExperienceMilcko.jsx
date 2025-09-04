import React from 'react';
import { motion } from 'framer-motion';
import familyImage from '../assets/images/processphoto.png'; 
import milkTexture from '../assets/images/milktexture.png';  

const ExperienceMilcko = () => {
  return (
    <section
      className="py-12 px-4 sm:px-8 lg:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${milkTexture})` }}
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 rounded-2xl p-6 md:p-10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* ✅ Left Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <img
            src={familyImage}
            alt="Family enjoying milk"
            className="rounded-xl object-contain w-full max-w-sm sm:max-w-md md:max-w-lg h-auto"
          />
        </motion.div>

        {/* ✅ Right Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            <span className="text-green-600">Experience</span> Milcko Freshness Today!
          </h2>
          <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg mb-6">
            Farm-fresh, natural, and sustainable. Savor milk that’s fresh from farm to bottle.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 rounded-2xl text-white px-5 py-2 sm:px-6 sm:py-3 font-semibold hover:bg-orange-600 transition"
          >
            Order Now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceMilcko;
