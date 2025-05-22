import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  { title: "DESSERTS", image: "/images/home/menu/1.jpg" },
  { title: "BREADS", image: "/images/home/menu/2.jpg" },
  { title: "lamb sizzler", image: "/images/home/menu/3.jpg" },
];

const Menu: React.FC = () => {
  return (
    <section className="relative w-full bg-black pb-40 pt-8 md:pb-64 md:pt-20">
      <div className="absolute right-0 z-0">
        <Image
          src={"/images/home/menu/bg1.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-full w-full object-cover md:h-[800px]"
        />
      </div>
      <div className="absolute -bottom-20 right-0 z-0 md:-bottom-28">
        <Image
          src={"/images/home/menu/bg.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-full w-full object-cover md:h-[600px]"
        />
      </div>
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex flex-col gap-16 px-4 md:px-0">
        {/* Title */}
        <h1 className="text-center font-oswald text-4xl font-[400] capitalize tracking-[3px] text-[#fff] md:text-5xl">
          explore our menu
        </h1>

        {/* Menu Grid */}
        <div className="z-40 grid grid-cols-3 gap-6 px-0 md:gap-12 md:px-28">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-4 md:gap-6"
            >
              <Link href={"/menu"} target="_blank">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="relative z-40 h-[130px] w-full object-cover md:h-[450px]"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
