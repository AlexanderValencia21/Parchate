"use client"
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ScrollIndicator = () =>  {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 block md:hidden">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-white text-2xl"
      >
        <FontAwesomeIcon icon={faChevronDown} className="text-white text-2xl" />
      </motion.div>
    </div>
  );
}
export default ScrollIndicator