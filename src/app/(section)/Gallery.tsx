import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Gallery: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 py-8 md:px-20 md:py-14">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="flex flex-col gap-10 md:gap-20">
        <div>
          <h1 className="text-center font-times_new_roman text-7xl font-[400] tracking-[3px] text-[#fff] md:text-[200px]">
            Layla
          </h1>
        </div>
        {/* big screen */}
        <div className="relative z-10 hidden w-full flex-col gap-8 md:flex">
          {/* <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src={"/images/home/story/bg2.jpg"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-full w-full object-cover"
            />
          </div> */}
          <div className="z-10 flex w-full flex-row gap-6">
            <div className="w-full md:w-[25%]">
              <motion.img
                src="/images/home/gallery/1.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[50%]">
              <motion.img
                src="/images/home/gallery/2.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              <motion.img
                src="/images/home/gallery/3.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="z-10 flex w-full flex-row gap-6">
            <div className="w-full md:w-[25%]">
              <motion.img
                src="/images/home/gallery/4.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[50%]">
              <motion.img
                src="/images/home/gallery/5.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              <motion.img
                src="/images/home/gallery/6.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
        {/*mobile screen */}
        <div className="relative z-10 flex w-full flex-col gap-4 md:hidden">
          {/* <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src={"/images/home/story/bg2.jpg"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-full w-full object-cover"
            />
          </div> */}
          <div className="z-10 flex w-full flex-row gap-4">
            <div className="w-full md:w-[25%]">
              <motion.img
                src="/images/home/gallery/1.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[50%]">
              <motion.img
                src="/images/home/gallery/2.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="z-10 flex w-full flex-row gap-4">
            <div className="w-full md:w-[25%]">
              <motion.img
                src="/images/home/gallery/4.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[50%]">
              <motion.img
                src="/images/home/gallery/5.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="z-10 flex w-full flex-row gap-4">
            <div className="w-full md:w-[50%]">
              <motion.img
                src="/images/home/gallery/6.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              <motion.img
                src="/images/home/gallery/3.jpg"
                alt="1"
                className="z-50 h-[200px] w-full object-cover md:h-[400px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
