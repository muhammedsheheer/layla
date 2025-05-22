"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import { motion } from "framer-motion";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center overflow-hidden bg-[#111111] pt-12">
      {/* Animated Vertical Lines */}
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-36 top-28 hidden md:block">
        <h6 className="text-start font-times_new_roman text-4xl font-[400] uppercase text-[#fff] md:text-4xl">
          LAYLA <br />
          Signature <br />
          SPECIALS
        </h6>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-10 pt-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div className="relative flex w-full flex-col items-center justify-center gap-2">
              <motion.h6
                className="text-center font-times_new_roman text-4xl font-[400] uppercase text-[#fff] md:hidden md:text-5xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                LAYLA Signature SPECIALS
              </motion.h6>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
