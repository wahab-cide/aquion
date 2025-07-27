"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

export function Hero() {
  return (
    <div
      className="relative flex h-[80vh] flex-col items-center justify-center overflow-hidden px-4 pt-20 md:px-8 md:pt-40"
      style={{
        background: 'radial-gradient(circle at center, #dbeafe, #bfdbfe, #eff6ff)'
      }}
    >
      <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-4xl font-semibold tracking-tight md:text-7xl">
        <Balancer>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "inline-block bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900",
              "bg-clip-text text-transparent font-bold"
            )}
          >
            Harvesting Clean Water from Air
          </motion.h2>
        </Balancer>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="relative z-20 mx-auto mt-4 max-w-xl px-4 text-center text-base/6 text-gray-700 sm:text-lg"
      >
        Solar-powered hydropanels delivering 15-20L of clean drinking water daily
        with zero grid dependency. Transforming humidity into hope for rural communities.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.7 }}
        className="mb-8 mt-6 sm:mb-10 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:px-8 sm:flex-row md:mb-20"
      >
        <Link
          href="/#technology"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg w-full sm:w-auto justify-center"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  );
}
