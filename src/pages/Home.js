import React, { useRef } from "react";
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
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <IntroSection
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        homeRef={homeRef}
      />
      <AboutSection aboutRef={aboutRef} />
      <Portfolio
        siteInfo={siteInfo}
        setSiteInfo={setSiteInfo}
        portfolioRef={portfolioRef}
      />
      <Container ref={contactRef}>
        <GetInTouch />
        <SendEmail />
      </Container>
    </motion.div>
  );
};

export default Home;
