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
  const aboutUs = useRef(null);
  const portfolio = useRef(null);
  const contactMe = useRef(null);
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <IntroSection aboutRef={aboutUs} portfolioRef={Portfolio} />
      <Container>
        <AboutSection aboutRef={aboutUs} portfolioRef={portfolio} />
        <Portfolio
          portfolioRef={portfolio}
          siteInfo={siteInfo}
          setSiteInfo={setSiteInfo}
        />
        <GetInTouch contactRef={contactMe} />
        <SendEmail />
      </Container>
    </motion.div>
  );
};

export default Home;
