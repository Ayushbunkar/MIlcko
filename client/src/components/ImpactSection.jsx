import React from "react";
import { motion } from "framer-motion";

import glassBottleIcon from "../assets/images/icon1.png";
import reusedBottleIcon from "../assets/images/icon2.png";
import organicFeedIcon from "../assets/images/icon3.png";
import plasticAvoidedIcon from "../assets/images/icon4.png";

const stats = [
  {
    icon: glassBottleIcon,
    title: "87% Deliveries in Glass Bottles",
    desc: "Reducing waste, one bottle at a time — our customers choose sustainability every day.",
  },
  {
    icon: reusedBottleIcon,
    title: "15,000+ Bottles Reused",
    desc: "Each reused bottle is a step toward a cleaner, circular system.",
  },
  {
    icon: organicFeedIcon,
    title: "98% Farms Use Organic Feed",
    desc: "We work with farmers committed to purity, nutrition, and environmental harmony.",
  },
  {
    icon: plasticAvoidedIcon,
    title: "4,000+ Plastic Bottles Avoided Monthly",
    desc: "That’s thousands of single-use plastics kept out of landfills — every month.",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-[#d9d3c8] px-3 sm:px-6 md:px-10 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          Our <span className="text-yellow-600">Impact</span> in Numbers.
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed">
          A quick look at how your choices fuel real-world change.
        </p>

        {/* Cards */}
        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white shadow-md rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-4 hover:shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt="Impact icon"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
              />
              <div className="text-center sm:text-left lg:text-center">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
