import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full overflow-hidden bg-[#000] py-8 md:py-12">
      <div className="flex w-full flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <motion.img
            src={"/images/home/story/5.png"}
            alt={"image"}
            className="relative z-10 h-full w-full object-cover"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
        <motion.div
          className="flex w-full flex-col items-start justify-center gap-5 px-4 pt-6 md:w-1/2 md:px-20 md:pt-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1
            className="text-start font-oswald text-4xl font-[300] tracking-[5px] md:text-5xl"
            style={{
              background:
                "linear-gradient(180deg, #FFCA4E 29.5%, #191616 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            RESERVE TABLE
          </h1>
          <p className="max-w-[500px] font-manrope text-sm font-[300] text-[#C1B6A6] md:text-base">
            At Layla, our private and group dining options create an intimate
            setting perfect for any occasion, from joyous celebrations to
            meaningful business gatherings. Each space is thoughtfully designed
            to offer warmth, privacy, and comfort, allowing you and your guests
            to savor every moment. With personalized service and curated menus
            inspired by the rich flavors of Lebanon and Syria, we ensure a
            seamless and memorable dining experience for groups of all sizes.
          </p>
          <div>
            <Link href={"/table-booking"}>
              <Button className="relative z-40 flex flex-row items-center justify-center gap-1 rounded-none bg-transparent px-6 py-6 font-manrope text-sm font-[600] uppercase text-white ring-1 ring-[#D5A859] hover:bg-[#c3a96c] md:px-5 md:py-6">
                Book NOW <ArrowRight className="text-[#D5A859]" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reserve;
