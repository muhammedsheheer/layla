"use client";
import { motion } from "framer-motion";

import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#000] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#000]">
        <h2 className="text-center font-times_new_roman text-5xl text-[#CCAD64] md:left-[15%] md:text-8xl">
          The Layla
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#000] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <motion.img
              src="/images/about-us/3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-times_new_roman text-5xl text-[#CCAD64] md:text-start md:text-7xl">
              Where Passion <br /> Becomes Perfection
            </h1>
            <p className="max-w-[450px] text-center font-poppins font-light leading-[160%] text-[#CCAD64] md:text-start">
              What began as a vision to reimagine the dining experience has
              blossomed into <strong>Layla</strong> — a place where elegance
              meets vibrant flavour. Inspired by a deep-rooted passion for
              culinary artistry, Layla was founded to create experiences that
              linger far beyond the final bite.
              <br />
              From modest beginnings to becoming a beloved name among discerning
              food lovers, our journey has been shaped by a steadfast commitment
              to quality, innovation, and heartfelt hospitality. Each ingredient
              is carefully chosen, every dish prepared with finesse, and every
              bite tells a story of passion and precision.
              <br />
              At <strong>Layla</strong>, we don’t just serve meals — we craft
              moments. As we continue to grow, our purpose remains clear: to
              unite creativity and flavour in a way that creates lasting
              memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
