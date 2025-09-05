import React from "react";
import { motion } from "framer-motion";
import icon1 from "../assets/images/purposeicon1.png";
import icon2 from "../assets/images/purposeicon2.png";
import icon3 from "../assets/images/purposeicon3.png";
import icon4 from "../assets/images/purposeicon4.png";

// Card content
const cardData = [
  {
    icon: icon1,
    title: "Purpose-Driven Culture",
    text: "At Milcko, everything you do directly impacts the lives of farmers and helps reduce waste. Every task contributes to a more sustainable future, and you’ll see the difference your work makes in real-time.",
  },
  {
    icon: icon2,
    title: "Startup Energy, Big Impact",
    text: "Join our fast-growing, passionate team where every day is an opportunity to make a big difference. At Milcko, we move quickly, innovate boldly, and create real change that matters.",
  },
  {
    icon: icon3,
    title: "Your Work, Your Way",
    text: "We believe in empowering our team with the freedom to work from anywhere. Whether at home or on-site, we focus on your results, creativity, and collaboration rather than where you work.",
  },
  {
    icon: icon4,
    title: "Learning & Growth",
    text: "Step into a world of hands-on learning with plenty of opportunities to grow. At Milcko, you’ll gain experience in various areas, develop new skills, and build a solid foundation for your career.",
  },
];

const PurposeCards = () => {
  return (
    <section className="bg-[#FFFBF3] w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-700">Purpose</span> at the{" "}
          <span className="text-yellow-600">Core</span>.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-gray-700 font-medium text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Milcko, every task you do fuels a bigger mission — fair pay, zero waste, and a fresher planet. Your work truly means something.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white rounded-xl shadow-md pt-16 sm:pt-20 pb-6 px-5 sm:px-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
            >
              {/* Floating Icon */}
              <div className="absolute -top-10 sm:-top-14 bg-[#fff6e5] p-3 sm:p-4 rounded-full shadow-md">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 mt-6">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeCards;
