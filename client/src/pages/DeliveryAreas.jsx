import React, { useState } from "react";
import Footer from "../components/Footer";
import mapImage from "../assets/images/map.png";
import bottomWave from "../assets/images/bottomwave.png";
import BhopalMilkService from "../components/BhopalMilkService";
import ComingSoonBanner from "../components/ComingSoonBanner";
import RequestMilkoBanner from "../components/RequestMilkoBanner";
import Navbar from "../components/Navbar";

const DeliveryAreas = () => {
  const [zipCode, setZipCode] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const deliveryRegions = [
    {
      name: "Bhopal",
      areas: ["Kolar", "Arera Colony", "MP Nagar", "New Market", "Shahpura"],
      zipCodes: ["462001", "462002", "462003", "462016", "462039"],
    },
    {
      name: "Indore",
      areas: [
        "Vijay Nagar",
        "Palasia",
        "Sudama Nagar",
        "Scheme 54",
        "Bhawarkuan",
      ],
      zipCodes: ["452001", "452005", "452009", "452010", "452014"],
    },
    {
      name: "Jabalpur",
      areas: [
        "Napier Town",
        "Wright Town",
        "Ganjipura",
        "Madan Mahal",
        "Adhartal",
      ],
      zipCodes: ["482001", "482002", "482004", "482008", "482036"],
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    for (const region of deliveryRegions) {
      if (region.zipCodes.includes(zipCode)) {
        setSearchResult({ found: true, region: region.name });
        return;
      }
    }
    setSearchResult({ found: false });
  };

  return (
    <div className="bg-[#FFFBEF] min-h-screen font-sans relative antialiased pt-24 flex flex-col">
  {/* Hero Section */}
  <div className="relative w-full max-w-8xl mx-auto px-4 pt-15 sm:px-8 lg:px-16 py-0 flex-1 flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center w-full relative z-10">
      {/* Left Side: India Map */}
      <div className="flex justify-center items-center h-[320px] sm:h-[400px] lg:h-[480px] relative">
        <img
          src={mapImage}
          alt="Map of India with Bhopal highlighted"
          className="w-full max-w-md h-full object-contain drop-shadow-lg relative z-10"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="flex flex-col justify-center items-center lg:items-start px-2 py-8 lg:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] leading-tight text-center lg:text-left">
          We're <span className="text-[#F9A826]">Growing</span>,<br />
          One City at a Time.
        </h1>
        <p className="mt-6 text-base md:text-lg text-[#222] max-w-md text-center lg:text-left font-medium">
          Milcko’s farm-fresh milk reaches homes in Bhopal with speed,
          hygiene, and consistency.
          <br />
          We’re committed to delivering quality and care with every bottle,
          and we’re just getting started.
        </p>
        <button className="mt-8 px-7 py-3 bg-[#256D4A] text-white font-semibold rounded-full shadow-lg hover:bg-[#1e573a] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#256D4A] focus:ring-offset-[#FFFBEF]">
          Sign Up for Fresh Deliveries
        </button>
      </div>
    </div>

    {/* Bottom Wave */}
    <img
      src={bottomWave}
      alt="Decorative Wave"
      className="absolute bottom-0 left-0 w-full object-cover z-0"
    />
  </div>


      {/* Banners and Footer */}
      <BhopalMilkService />
      <ComingSoonBanner />
      <RequestMilkoBanner />
      <Footer />
    </div>
    
  );
};

export default DeliveryAreas;
