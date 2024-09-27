"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://img.freepik.com/free-photo/soldiers-celebrating-indian-republic-day_23-2151142566.jpg?size=626&ext=jpg",
    "https://images.unsplash.com/photo-1586083944757-6fa33fdfd9c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img.freepik.com/free-photo/military-man-walking-park-with-his-wife-children-kids-parents-holding-hands-full-length-back-view-family-reunion-military-father-concept_74855-12927.jpg?t=st=1727462729~exp=1727466329~hmac=4b149fda8261790cab412eddd7f6d10098366aeff9b41235cffff196f94027b8&w=900",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        
        
      </motion.div>
    </ImagesSlider>
  );
}
