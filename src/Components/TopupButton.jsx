import React, { useState, useEffect } from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const TopUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button only when the user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className=" z-20 fixed bottom-4 right-4 bg-secondary text-white py-4 px-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110 hover:bg-primary"
      >
        <RiArrowUpDoubleLine className="text-4xl animate-bounce" />
      </button>
    )
  );
};

export default TopUpButton;
