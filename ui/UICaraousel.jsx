import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const UICaraousel = ({ children }) => {
  const [width, setWidth] = useState(0);

  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);

    return () => setWidth(0);
  }, []);

  return (
    <motion.div
      className="carousel"
      ref={carouselRef}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel flex  gap-4 p-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default UICaraousel;
