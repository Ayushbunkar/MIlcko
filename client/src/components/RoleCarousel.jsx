import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import role1 from "../assets/images/Card1.png";
import role2 from "../assets/images/Card2.png";
import role3 from "../assets/images/Card3.png";
import role4 from "../assets/images/Card4.png";
import role5 from "../assets/images/Card5.png";

const roleImages = [role1, role2, role3, role4, role5];

const RoleCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#FFFBF3] px py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 sm:mb-10 px-4 leading-snug">
        Beyond <span className="text-yellow-500">Roles</span>, Towards{" "}
        <span className="text-green-700">Change</span>.
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          className="w-full"
        >
          {roleImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-[40vh] sm:h-[60vh] lg:h-[80vh] w-full flex justify-center items-center">
                <img
                  src={image}
                  alt={`Role ${index + 1}`}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Prev Button */}
        <button
          ref={prevRef}
          className="absolute left-4 sm:left-10 md:left-20 lg:left-3 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-yellow-100 transition duration-300 z-10"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Custom Next Button */}
        <button
          ref={nextRef}
          className="absolute right-4 sm:right-10 md:right-20 lg:right-3 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-yellow-100 transition duration-300 z-10"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default RoleCarousel;
