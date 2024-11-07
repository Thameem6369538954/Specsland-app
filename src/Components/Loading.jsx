import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loading = () => {
  const lettersRef = useRef([]);

  useEffect(() => {
    lettersRef.current.forEach((letter, index) => {
      gsap.fromTo(
        letter,
        { y: 0, opacity: 0 },
        {
          y: -15, // Smaller jump for smoother animation
          opacity: 1,
          duration: 0.8, // Slower animation speed
          ease: "power3.inOut", // Smooth easing for gentler motion
          delay: index * 0.15, // Delay for each letter for sequential effect
          repeat: -1, // Infinite loop
          yoyo: true, // Back-and-forth motion
        }
      );
    });
  }, []);

  const letters = "Specsland....".split("");

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Blur */}
      <div className="absolute inset-0 backdrop-blur-md"></div>

      {/* Specsland Animation */}
      <div className="relative flex items-center ">
        {letters.map((letter, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            className="text-secondary lg:text-7xl md:text-5xl text-[9px] font-copydesk shadow-md px-4 py-2 rounded-full"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
