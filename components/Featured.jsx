'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import {fadeIn} from '../variants';

const Featured = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      className="bg-soft_green-secondary xl:h-[240px] max-w-[1305px] ml-auto xl:-top-[120px] relative rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[60px]"
    >
      <div className="flex flex-col xl:flex-row items-center h-full gap-x-[30px] text-center xl:text-left">
        <Image
          src={"/featured/icon.svg"}
          width={73}
          height={84}
          alt="featured_image"
          className="xl:mr-[50px]"
        />
        <h2 className="h2 flex-1 text-soft_green leading-relaxed">
          Book an awesome room in less then 1 minute.
        </h2>
        <p className="flex-1 text-soft_green leading-loose">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nam
          impedit voluptatum fugit necessitatibus nobis porro dolor enim iste,
          nihil sapiente optio exercitationem sunt ducimus sequi.
        </p>
      </div>
    </motion.section>
  );
};

export default Featured;
