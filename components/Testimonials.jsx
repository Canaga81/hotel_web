"use client";

//! Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

//! Swiper Modules
import { Pagination } from "swiper/modules";

//! Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

//! Components
import Image from "next/image";

//! Motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const testimonialData = [
  {
    img: "/testimonials/img-1.png",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat facere voluptatum repudiandae, architecto non saepe laudantium totam ea! Quae eum doloremque nobis aliquam cumque dignissimos quibusdam! Dolores veritatis beatae asperiores nostrum accusantium illo rerum incidunt sit non! Odio quam obcaecati, voluptates itaque eaque quis amet et a?",
    personName: "Güllü Erhan",
    location: "Bakı",
  },
  {
    img: "/testimonials/img-2.png",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat facere voluptatum repudiandae, architecto non saepe laudantium totam ea! Quae eum doloremque nobis aliquam cumque dignissimos quibusdam! Dolores veritatis beatae asperiores nostrum accusantium illo rerum incidunt sit non! Odio quam obcaecati, voluptates itaque eaque quis amet et a?",
    personName: "İskender Büyük",
    location: "İstanbul",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="bg-soft_green xl:h-[880px]"
    >
      <div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="container mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                <Image
                  alt="testimonial_img"
                  src={slide.img}
                  width={470}
                  height={470}
                  quality={100}
                  className="hidden xl:flex"
                />
                <div className="flex-1 bg-white/20 text-white p-12">
                  <p className="text-lg leading-9 mb-8">{slide.message}</p>
                  <p className="text-xl font-bold">{slide.personName}</p>
                  <p className="">{slide.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonials;
