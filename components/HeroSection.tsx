"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import mahadi from "../assist/mahadi.jpeg";
import bgImage from "../assist/heroImage.png";
export default function HeroSection() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative text-white overflow-hidden bg-cover bg-center pb-16 mb-20"
    style={{
     backgroundImage: `url(${bgImage.src})`
    }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col items-center gap-6">
        {/* Drag-Enabled Image */}
        <motion.div
          ref={constraintsRef}
          animate={{ scale: 1, opacity: 1 }}
          className="w-[100px] h-[100px] rounded-md overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            drag
            className="w-full h-full"
            dragConstraints={constraintsRef}
            dragElastic={0.2}
          >
            <Image
              alt="Hero Image"
              className="object-contain rounded-md"
              height={100}
              src={mahadi}
              width={100}
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          className="text-center space-y-4"
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold">B2B Lead Generation Services</h1>
          <p className="text-lg md:text-2 font-semibold">
            We will try to deliver quickly. If delivery is delayed, contact us
            at +8801861565500 (WhatsApp)
          </p>
        </motion.div>

        {/* Animated Button */}
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link href="#">
            <motion.button
              className="bg-[#DAE7FF] text-[#2C3F60] font-semibold px-6 py-3 rounded-full"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.3,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#C50101",
                color: "#FFFFFF",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex gap-2">
                <span>
                  {" "}
                  <BsCartPlusFill className="text-xl" />{" "}
                </span>{" "}
                <span>Order Now</span>
              </div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
