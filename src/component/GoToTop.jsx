import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const heightToVisible = 200;

    if (scrollY > heightToVisible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4">
          <div
            className="bg-[#8bc34a] rounded-full w-9 h-9 px-1 py-1 cursor-pointer"
            onClick={goToTop}
          >
            <FaArrowUp className="text-white animate-bounce text-xl mx-1 my-2" />
          </div>
        </div>
      )}
    </>
  );
};

export default GoToTop;
