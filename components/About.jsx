"use client";

import Image from "next/image";
import { inView, motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Stats from "./Stats";

const About = () => {

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

    const [ref, inView] = useInView({
        threshold: !isMobile ? 0.5 : null,
    });

    // console.log(isMobile);

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 relative"
          >
            <Image
              src={"/about/img2.png"}
              width={559}
              height={721}
              alt="about_image"
            />
          </motion.div>
          {/* Text */}
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="xl:max-w-[470px]"
          >
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              quo nobis, corporis magnam quis esse magni voluptatibus? Officiis,
              corrupti culpa? Voluptatum, at fuga? Deserunt ut quibusdam quae
              totam cum praesentium.
            </p>
            {/* Stats */}
            <div className="my-5 xl:my-10 min-h-[35px]">
                {
                    inView && <Stats />
                }
            </div>
            <p>
              lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
              incidunt rerum! Omnis nulla eius nihil esse tenetur! Temporibus,
              tenetur possimus.
            </p>
            <Button variant="accent">Explore More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
