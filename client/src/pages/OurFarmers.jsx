import React from 'react';
import farmerImage from '../assets/images/farmerlist.png';
import greenbg from '../assets/images/greenbg.jpg';
import AppSupportSection from '../components/AppSupportSection'; 
import FarmerOnboarding from '../components/FarmerOnboarding';
import FarmerPhotoWall from '../components/FarmerPhotoWall';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const OurFarmers = () => {
  return (
    <div className="w-full overflow-x-hidden"> 
      
      <section
        id="our-farmers"
        className="w-full min-h-screen bg-cover bg-[#FAF3E8] bg-center bg-no-repeat overflow-x-hidden"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        {/* ✅ Responsive Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* ✅ Left Text Content */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-snug mb-4">
              Our <span className="text-green-700">Farmers</span>,{" "}
              <span className="text-orange-500">Our Strength.</span>
            </h2>
            <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
              Every farmer on our platform is verified through a farm check,
              trained on hygiene, and supported through our app. We don’t just
              collect milk — we partner with those who believe in purity, care,
              and ethical dairy practices.
            </p>
          </div>

          {/* ✅ Right Image Content */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center">
            <img
              src={farmerImage}
              alt="Farmer"
              className="max-w-full h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* ✅ Extra Sections */}
        <AppSupportSection />
        <FarmerOnboarding />
        <FarmerPhotoWall />
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default OurFarmers;
