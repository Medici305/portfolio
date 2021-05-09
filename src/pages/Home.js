import React from "react";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import GetInTouch from "../components/GetInTouch";
import SendEmail from "../components/SendEmail";
import Portfolio from "../components/Portfolio";
import Container from "@material-ui/core/Container";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import ScrollTop from "../components/ScrollTop";

const Home = ({ siteInfo, setSiteInfo }) => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <IntroSection />
      <AboutSection />
      <Portfolio siteInfo={siteInfo} setSiteInfo={setSiteInfo} />
      <Container>
        <GetInTouch />
        <SendEmail />
      </Container>
    </motion.div>
  );
};

export default Home;
