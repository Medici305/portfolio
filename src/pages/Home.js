import React from "react";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import CollabSection from "../components/CollabSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <IntroSection />
      <AboutSection />
      <CollabSection />
    </motion.div>
  );
};

export default Home;
