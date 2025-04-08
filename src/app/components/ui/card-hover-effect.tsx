"use client";

import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; // Import Image from Next.js
import { useState } from "react";

// Define the HoverEffect component
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    src: string; // Image source URL
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.src}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Animate the background on hover */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
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

          {/* Card content */}
          <Card>
            {/* Use Next.js Image component */}
            <Image
              src={item.src}
              alt={item.title}
              width={1000} // Adjusted width for image optimization
              height={600} // Adjusted height
              className="rounded-2xl object-contain w-full h-full"
              priority={true} // You can add priority for performance optimization
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

// Card component
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black/50 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
