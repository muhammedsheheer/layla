"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="h-full w-full bg-[#ede8e8] px-4 py-8 md:px-60 md:py-20 2xl:px-80">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="mb-6 flex flex-col items-center justify-center gap-2 md:mb-8">
          <motion.h1
            className="text-center font-times_new_roman text-4xl font-[400] capitalize tracking-[3px] md:text-7xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Layla Takeout Menu
          </motion.h1>
          <Link href={"/pdf/Takeout_Menu.pdf"} target="_blank">
            <Button
              variant={"imageoutline"}
              className="hero-button flex items-center justify-center gap-3 px-8 py-7 uppercase text-[#000]"
            >
              Download Menu
            </Button>
          </Link>
        </div>
        <Image
          src={"/images/menu/takeout/1.jpg"}
          width={2480}
          height={1740}
          alt="logo"
          className="h-full w-full object-cover"
        />
        <Image
          src={"/images/menu/takeout/2.jpg"}
          width={2480}
          height={1740}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Page;
