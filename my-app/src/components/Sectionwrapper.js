import React from "react";
import { motion } from "framer-motion";
import { styles } from "./styles"; // Ensure styles.js is in the same directory
import { staggerContainer } from "./motion"; // Ensure motion.js is in the same directory

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Correctly referencing styles.padding
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

