import React from "react";
import { useNavigate, Link } from "react-router-dom";
import AboutTimeline from "../components/AboutTimeline";
import PremiumOfferings from "../components/PremiumOfferings";
import FreshnessTimeline from "../components/FreshnessTimeline";
import SubscribeSave from "../components/SubscribeSave";

import bgImage from "../assets/images/milckoway.png";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className=" bg-[#ffe089] h-screen">
        {"  "}
        <div
          className="w-full md:min-h-screen h-[30%] [ flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 relative md:bg-center bg-cover"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Text Content */}
            <h1 className="text-2xl pt-80 sm:text-3xl md:block hidden  md:text-5xl font-extrabold text-gray-900">
              Milk, the <span className="text-yellow-500">MILCKO</span> Way.
            </h1>

            <p className="mt-2 max-w-xl sm:max-w-2xl md:max-w-4xl md:block hidden lg:max-w-5xl text-xs sm:text-sm md:text-lg lg:text-md font-medium text-gray-900 leading-relaxed">
              We’re not just another dairy brand. At MILCKO, we deliver fresh A2
              Cow and Buffalo milk within an hour of milking — directly from our
              farms to your doorstep. Our milk comes bottled in eco-friendly
              glass, never plastic, and without a single additive. It’s a
              promise of purity, speed, and sustainability.
            </p>

            {/* Button */}
            <Link to="/trial-pack">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold 
            px-5 sm:px-7 md:px-10 py-2 sm:py-3 md:py-2 rounded-full shadow-md 
            text-xs sm:text-sm md:text-base lg:text-lg transition  md:block hidden"
              >
                Claim Your Trial Pack
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="p-5 flex-col items-baseline justify-baseline text-center space-y-10">
          {" "} 
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900">
            Milk, the <span className="text-yellow-500">MILCKO</span> Way.
          </h1>
          <p className="mt-2 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-xs sm:text-sm md:text-lg lg:text-md font-medium text-gray-900 leading-relaxed">
            We’re not just another dairy brand. At MILCKO, we deliver fresh A2
            Cow and Buffalo milk within an hour of milking — directly from our
            farms to your doorstep. Our milk comes bottled in eco-friendly
            glass, never plastic, and without a single additive. It’s a promise
            of purity, speed, and sustainability.
          </p>
          {/* Button */}
          <Link to="/trial-pack">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold 
            px-5 sm:px-7 md:px-10 py-2 sm:py-3 md:py-2 rounded-full shadow-md 
            text-xs sm:text-sm md:text-base lg:text-lg transition   "
            >
              Claim Your Trial Pack
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Other Sections */}
      <div className="w-full">
        <AboutTimeline />
        <PremiumOfferings />
        <FreshnessTimeline />
        <SubscribeSave />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
