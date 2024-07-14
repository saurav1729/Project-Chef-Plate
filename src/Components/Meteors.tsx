import React from "react";
import { cn } from "../Utils/cn";
import clsx from "clsx";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  const screenWidth = window.innerWidth; // Get screen width
  const screenHeight = window.innerHeight; // Get screen height

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: Math.random() * screenHeight + "px", // Randomize top position within screen height
            left: Math.random() * screenWidth + "px", // Randomize left position within screen width
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (50 - 4) + 4) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
