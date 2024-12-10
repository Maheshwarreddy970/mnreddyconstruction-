"use client"; // @NOTE: add in case you are using Next.js

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

type CardHoverEffectProps = {
  containerClassName?: string;
  itemClassName?: string;
  hoveredItemClassName?: string;
};

export function CardHoverEffect({
  containerClassName,
  itemClassName,
  hoveredItemClassName,
}: CardHoverEffectProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);


  return (
    <div className={cn("grid md:grid-cols-3 gap-5", containerClassName)}>
      <div
        rel="noopener noreferrer"
        className={cn("relative flex flex-col gap-3 p-3", itemClassName)}
        onMouseEnter={() => setHoveredIdx(1)}
        onMouseLeave={() => setHoveredIdx(null)}
      >
        <AnimatePresence>
          {hoveredIdx === 1 && (
            <motion.span
              className={cn(
                "absolute inset-0 z-0 block h-full w-full rounded-xl border border-black bg-white shadow-lg ",
                hoveredItemClassName,
              )}
              layoutId="cardHoverEffect"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <div className="z-[1] h-full   bg-black text-white shadow-lg rounded-xl p-4">
          <CircleCheck className=" bg-white rounded-full text-black" />
          <h1 className=" font-bold mt-12 text-lg  ">Expert Manpower </h1>
          <p className="">Our team consists of highly skilled and experienced professionals, ensuring efficient and precise execution of every project.
          </p>
        </div>
      </div>
      <div
        rel="noopener noreferrer"
        className={cn("relative flex flex-col gap-3 p-3", itemClassName)}
        onMouseEnter={() => setHoveredIdx(2)}
        onMouseLeave={() => setHoveredIdx(null)}
      >
        <AnimatePresence>
          {hoveredIdx === 2 && (
            <motion.span
              className={cn(
                "absolute inset-0 z-0 block h-full w-full rounded-xl border border-black bg-white shadow-lg ",
                hoveredItemClassName,
              )}
              layoutId="cardHoverEffect"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <div className="z-[1] h-full   bg-black text-white shadow-lg rounded-xl p-4">
          <CircleCheck className=" bg-white rounded-full text-black" />
          <h1 className=" font-bold mt-12 text-lg  ">Premium Materials</h1>
          <p className="">We source high-quality, durable construction materials to deliver robust and lasting structures.
          </p>
        </div>
      </div>
      <div
        rel="noopener noreferrer"
        className={cn("relative flex flex-col gap-3 p-3", itemClassName)}
        onMouseEnter={() => setHoveredIdx(3)}
        onMouseLeave={() => setHoveredIdx(null)}
      >
        <AnimatePresence>
          {hoveredIdx === 3 && (
            <motion.span
              className={cn(
                "absolute inset-0 z-0 block h-full w-full rounded-xl border border-black bg-white shadow-lg ",
                hoveredItemClassName,
              )}
              layoutId="cardHoverEffect"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <div className="z-[1] h-full  bg-black text-white shadow-lg rounded-xl p-4">
          <CircleCheck className=" bg-white rounded-full text-black" />
          <h1 className=" font-bold mt-12 text-lg  ">Advanced Machinery</h1>
          <p className="">Equipped with cutting-edge machinery, we guarantee seamless and timely completion of projects with optimal efficiency.
          </p>
        </div>
      </div>

    </div>
  );
}
