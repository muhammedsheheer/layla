import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  { image: "/images/home/story/1.jpg" },
  { image: "/images/home/story/2.jpg" },
  { image: "/images/home/story/3.jpg" },
  { image: "/images/home/story/4.jpg" },
];

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#000] px-4 pb-20 pt-40 md:px-10 md:pb-56 md:pt-72">
      <div className="absolute -top-40 right-0 z-0 md:top-0">
        <Image
          src={"/images/home/story/bgr.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute left-1/2 top-10 -translate-x-1/2 md:top-28">
        <h1 className="text-center font-oswald text-4xl font-[300] tracking-[5px] text-[#fff] md:text-5xl">
          LAYLA SPECIALS
        </h1>
      </div>
      <div className="absolute left-0 top-64 z-0 md:top-96">
        <Image
          src={"/images/home/story/bgl.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-full w-full object-cover md:h-[850px]"
        />
      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center gap-4 md:gap-6 ${
              idx % 2 == 0 ? "mt-6 md:mt-20" : ""
            }`}
          >
            <Link href={"/menu"} target="_blank">
              <motion.img
                src={item.image}
                alt={"image"}
                className="relative z-10 h-full w-full border border-[#b49f02] object-cover p-1 md:h-[600px]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Story;
