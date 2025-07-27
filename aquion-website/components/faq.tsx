"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@/icons/arrow-right";

const FAQs = [
  {
    question: "How does atmospheric water generation work?",
    answer:
      "Aquion hydropanels use a dual-cycle approach: at night, radiative cooling condenses moisture from air as dew. During the day, solar heating extracts water from desiccant materials. Both processes produce clean, potable water.",
  },
  {
    question: "How much water can one hydropanel produce?",
    answer:
      "Each 1m² hydropanel can produce 15-20 liters of clean water daily under optimal conditions (>40% humidity). Multiple panels can be connected to increase output for larger households or communities.",
  },
  {
    question: "What maintenance does the hydropanel require?",
    answer:
      "Minimal maintenance is required: monthly surface cleaning, desiccant brick replacement every 6 months, and filter changes every 3 months. All maintenance can be performed by trained community members.",
  },
  {
    question: "How much does a hydropanel cost?",
    answer:
      "Our target cost is $130 per unit for a 10-unit pilot batch, with costs decreasing through local manufacturing. 90% of materials can be sourced locally, reducing transportation costs.",
  },
  {
    question: "Is the design really open source?",
    answer:
      "Yes! All hardware designs are released under Creative Commons BY-SA 4.0 license. CAD files, construction manuals, and bill of materials are freely available for replication and modification.",
  },
  {
    question: "Where are hydropanels being tested?",
    answer:
      "Current pilot deployments are in Cape Coast and Ho, Ghana. We're working with local communities and universities to validate performance and refine the design for African conditions.",
  },
];
export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto my-10 md:my-20 py-10 md:py-20 px-4 md:px-8 bg-white">
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center">
        <h2
          className={cn(
            "inline-block text-3xl md:text-5xl font-bold",
            "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          )}
        >
          Frequently Asked Questions
        </h2>
      </div>
      <p className="max-w-2xl text-base text-center mx-auto mt-4 text-gray-600 px-4 md:px-0">
        Everything you need to know about atmospheric water generation technology and the Aquion hydropanel system.
      </p>
      <div className="mt-10 md:mt-20 max-w-4xl mx-auto divide-y divide-gray-200">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <motion.div
      className="cursor-pointer py-4 md:py-6"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start justify-between">
        <div className="pr-8 md:pr-12">
          <h3 className="text-base md:text-lg font-medium text-gray-900">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-sm md:text-base text-gray-600 mt-2"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative mr-2 md:mr-4 mt-1 h-5 w-5 md:h-6 md:w-6 flex-shrink-0">
          <motion.div
            animate={{
              scale: isOpen ? [0, 1] : [1, 0, 1],
              rotate: isOpen ? 90 : 0,
              marginLeft: isOpen ? "1.5rem" : "0rem",
            }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconArrowRight className="absolute inset-0 h-5 w-5 md:h-6 md:w-6 transform text-blue-600" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
