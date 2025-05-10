import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#000] px-4 pb-6 pt-10 md:px-20 md:pb-10 md:pt-20">
      <div className="absolute right-0 z-0 md:hidden">
        <Image
          src={"/images/home/about/bg.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute right-0 top-0 z-0 hidden md:block">
        <Image
          src={"/images/home/about/bg.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[550px] w-full object-cover"
        />
      </div>
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        <motion.h1
          className="text-start font-oswald text-2xl font-[400] tracking-[3px] md:ml-[10%] md:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            background: "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Us
        </motion.h1>
        <motion.h1
          className="z-40 text-start font-times_new_roman text-7xl font-[400] tracking-[3px] md:text-[250px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            background: "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Layla
        </motion.h1>
        <motion.div
          className="z-40 flex flex-col gap-5 md:flex-row"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="z-40 max-w-[400px] font-inter text-sm font-[400] text-[#7E6C53] md:text-base">
            At Layla, our menu is a heartfelt tribute to the rich culinary
            heritage of Syria. Every dish is thoughtfully prepared with
            authenticity, care, and a deep love for traditional Syrian flavors.
            Our talented chefs carry forward generations of Syrian cooking,
            using the freshest local ingredients to craft meals that are both
            vibrant and soulful. We invite you to experience the warmth,
            hospitality, and unforgettable tastes of Layla — where every plate
            tells a story of Syria’s culture, love, and timeless tradition.
          </p>
          <div className="flex flex-col gap-3">
            <p className="max-w-[400px] font-inter text-sm font-[400] text-[#7E6C53] md:text-base">
              From aromatic spices to timeless recipes, every bite captures the
              spirit of our homeland. Come, savor the journey with us at Layla,
              where tradition and flavor come together in every dish.
            </p>
            <div>
              <Link href={"/table-booking"}>
                <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#CDAE64] px-6 py-6 font-manrope text-sm font-[600] uppercase text-black hover:bg-[#c3a96c] md:px-5 md:py-6">
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
