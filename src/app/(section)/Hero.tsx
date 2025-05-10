"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [showText, setShowText] = useState(true);
  const text = "Layla";
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
        poster="https://d8q1b3smcycac.cloudfront.net/bradshaw/bradshaw-thumbnail.png"
      >
        <source
          src="https://d8q1b3smcycac.cloudfront.net/bradshaw/bradshaw-web.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mt-16 flex h-full flex-col items-center justify-center gap-3 md:ml-16">
        <h1
          className="text-center font-times_new_roman text-9xl font-[400] md:text-[250px] md:tracking-[-3px]"
          style={{
            background: "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {inView &&
            [...text].map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
