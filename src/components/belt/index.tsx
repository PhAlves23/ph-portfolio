"use client";

import Image from "next/image";
import { motion, MotionProps } from "framer-motion";

export const Belt = () => {
  const beltItems = [
    {
      id: 1,
      label: "HTML5",
    },
    {
      id: 2,
      label: "CSS3",
    },
    {
      id: 3,
      label: "JAVASCRIPT",
    },
    {
      id: 4,
      label: "TYPESCRIPT",
    },
    {
      id: 5,
      label: "JAVA",
    },
    {
      id: 6,
      label: "SPRING BOOT",
    },
    {
      id: 7,
      label: "GIT",
    },
    {
      id: 8,
      label: "NODEJS",
    },
    {
      id: 9,
      label: "NESTJS",
    },
    {
      id: 10,
      label: "NEXTJS",
    },
    {
      id: 11,
      label: "SCRUM",
    },
    {
      id: 12,
      label: "REACTJS",
    },
    {
      id: 13,
      label: "TAILWINDCSS",
    },
    {
      id: 14,
      label: "SASS",
    },
    {
      id: 15,
      label: "FIGMA",
    },
    {
      id: 16,
      label: "ADOBEXD",
    },
    {
      id: 17,
      label: "LINUX",
    },
    {
      id: 18,
      label: "WINDOWS",
    },
    {
      id: 19,
      label: "STYLED COMPONENTS",
    },
  ];

  return (
    <div className="py-20 lg:pt-0">
      <div className="bg-yellow-400 overflow-x-hidden bg-gradient-to-r from-yellow-500 via-yellow-300 to-amber-400 h-20">
        <div className="bg-neutral-800 overflow-x-hidden absolute left-0 right-0 h-20 -rotate-3 flex justify-center items-center shadow-lg shadow-neutral-900">
          <motion.div
            // initial="hidden"
            animate={{
              x: [-400, 100],
            }}
            transition={{
              duration: 16,
              repeatType: "reverse",
              repeat: Infinity,
            }}
            className="flex whitespace-nowrap"
          >
            {beltItems.map(({ id, label }) => (
              <div
                key={id}
                className="flex justify-center items-center gap-5 pr-10"
              >
                <span
                  key={id}
                  className="text-xl lg:text-2xl font-medium block"
                >
                  {label}
                </span>
                <Image
                  src="/ray.svg"
                  width={30}
                  height={30}
                  alt="Banner image"
                  className="block"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
