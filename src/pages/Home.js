import React, { useRef } from "react";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import CollabSection from "../components/CollabSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import ScrollTop from "../components/ScrollTop";

const Home = () => {
  const myRef = useRef(null);
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <IntroSection myRef={myRef} />
      <AboutSection myRef={myRef} />
      <CollabSection />
    </motion.div>
  );
};

export default Home;
