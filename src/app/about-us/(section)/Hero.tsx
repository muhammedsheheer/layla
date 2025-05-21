"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#000] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-times_new_roman text-5xl font-semibold text-[#CCAD64] md:leading-[66px] lg:text-6xl">
                Welcome to Layla
                <br /> A Symphony of Flavours
              </h1>
              <p className="font-poppins font-normal text-[#CCAD64]">
                At Layla, every plate tells a story of craftsmanship and care.
                From carefully sourced ingredients to thoughtfully refined
                recipes, we offer a dining experience where bold creativity
                meets elegant flavour. Whether you`re savouring a signature main
                or indulging in a decadent dessert, each bite reflects our
                steadfast commitment to quality, innovation, and culinary
                artistry.
              </p>
            </div>
          </div>
          <div className="flex w-full items-start justify-center gap-3 md:mt-16 lg:w-1/2">
            {/* <motion.img
              src="/images/about-us/about1.jpg"
              width={500}
              height={1000}
              alt="hero"
              className="h-full max-h-[600px] w-full object-contain"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            /> */}
            <motion.img
              src="/images/about-us/2.jpg"
              width={500}
              height={500}
              alt="hero"
              className="h-full max-h-[600px] w-full object-contain"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
