"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button } from "./button";
import { AquionLogo } from "./aquion-logo";

interface NavbarProps {
  navItems: {
    name: string;
    link: string;
  }[];
  visible: boolean;
}

export const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "Technology",
      link: "/#technology",
    },
    {
      name: "Impact",
      link: "/#impact",
    },
    {
      name: "About",
      link: "/#about",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div ref={ref} className="w-full fixed top-2 inset-x-0 z-50">
      <DesktopNav visible={visible} navItems={navItems} />
      <MobileNav visible={visible} navItems={navItems} />
    </motion.div>
  );
};

const DesktopNav = ({ navItems, visible }: NavbarProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{
        backdropFilter: "blur(16px)",
        background: visible ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
        width: visible ? "38%" : "80%",
        height: visible ? "48px" : "64px",
        y: visible ? 8 : 0,
      }}
      initial={{
        width: "80%",
        height: "64px",
        background: "rgba(255, 255, 255, 0.8)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className={cn(
        "hidden lg:flex flex-row self-center items-center justify-between py-2 mx-auto px-6 rounded-full relative z-[60] backdrop-saturate-[1.8] shadow-lg border border-blue-100"
      )}
    >
      <AquionLogo />
      <motion.div
        className="lg:flex flex-row flex-1 items-center justify-center space-x-1 text-sm"
        animate={{
          scale: visible ? 0.9 : 1,
        }}
      >
        {navItems.map((navItem, idx) => (
          <motion.div
            key={`nav-item-${idx}`}
            onHoverStart={() => setHoveredIndex(idx)}
            className="relative"
          >
            <Link
              className="text-gray-700 hover:text-blue-600 relative px-3 py-1.5 transition-colors font-medium"
              href={navItem.link}
            >
              <span className="relative z-10">{navItem.name}</span>
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="menu-hover"
                  className="absolute inset-0 rounded-full bg-blue-50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1.1,
                    background:
                      "radial-gradient(circle at center, rgba(0,102,204,0.1) 0%, rgba(0,102,204,0.05) 50%, transparent 100%)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.4,
                  }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const MobileNav = ({ navItems, visible }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        animate={{
          backdropFilter: "blur(16px)",
          background: visible ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
          width: visible ? "80%" : "90%",
          y: visible ? 0 : 8,
          borderRadius: open ? "24px" : "full",
          padding: "8px 16px",
        }}
        initial={{
          width: "80%",
          background: "rgba(255, 255, 255, 0.8)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className={cn(
          "flex relative flex-col lg:hidden w-full justify-between items-center max-w-[calc(100vw-2rem)] mx-auto z-50 backdrop-saturate-[1.8] border border-solid border-blue-100 rounded-full shadow-lg"
        )}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <AquionLogo />
          {open ? (
            <IconX className="text-gray-700" onClick={() => setOpen(!open)} />
          ) : (
            <IconMenu2
              className="text-gray-700"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className="flex rounded-3xl absolute top-16 bg-white/95 backdrop-blur-xl backdrop-saturate-[1.8] inset-x-0 z-50 flex-col items-start justify-start gap-4 w-full px-6 py-8 shadow-xl border border-blue-100"
            >
              {navItems.map(
                (navItem: { link: string; name: string }, idx: number) => (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    <motion.span className="block">{navItem.name}</motion.span>
                  </Link>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
