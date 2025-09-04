import React from 'react';
import { motion } from 'framer-motion';
import farmerImage from '../assets/images/farmerlist.png';
import greenbg from '../assets/images/greenbg.jpg';
import AppSupportSection from '../components/AppSupportSection'; 
import FarmerOnboarding from '../components/FarmerOnboarding';
import FarmerPhotoWall from '../components/FarmerPhotoWall';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const OurFarmers = () => {
  const farmers = [
    {
      name: "The Thompson Family",
      location: "Rolling Hills Farm, Wisconsin",
      since: "1962",
      description:
        "Four generations of dairy excellence. The Thompsons specialize in Jersey cows known for producing milk with high butterfat content.",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Maria & John Martinez",
      location: "Sunrise Valley Dairy, California",
      since: "1998",
      description:
        "First-generation farmers committed to sustainable practices. Their farm uses rotational grazing and solar power.",
      image:
        "https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "The Williams Brothers",
      location: "Green Pastures Farm, Vermont",
      since: "1978",
      description:
        "Certified organic dairy with a focus on heritage breed preservation. Their herd includes rare Ayrshire and Guernsey cows.",
      image:
        "https://images.unsplash.com/photo-1570019450902-9a678f18d4d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Sarah Johnson",
      location: "Misty Morning Dairy, Oregon",
      since: "2010",
      description:
        "Former food scientist turned dairy farmer. Sarah's scientific approach ensures exceptional milk quality and animal welfare.",
      image:
        "https://images.unsplash.com/photo-1594761051559-fad174365bca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <>
      {/* ✅ Navbar at top */}
      <Navbar />

      <section
        id="our-farmers"
        className="w-full min-h-screen bg-cover bg-[#FAF3E8] bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-16">
          
          {/* Left Text Content */}
          <div className="w-full md:w-3/5 text-center mt-40 md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900  leading-snug mb-6">
              Our <span className="text-green-700">Farmers</span>,{" "}
              <span className="text-orange-500">Our Strength.</span>
            </h2>
            <p className="text-gray-900 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
              Every farmer on our platform is verified through a farm check,
              trained on hygiene, and supported through our app. We don’t just
              collect milk — we partner with those who believe in purity, care,
              and ethical dairy practices.
            </p>
          </div>

          {/* Right Image Content */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center">
            <img
              src={farmerImage}
              alt="Farmer"
              className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Extra Sections */}
        <AppSupportSection />
        <FarmerOnboarding />
        <FarmerPhotoWall />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default OurFarmers;
