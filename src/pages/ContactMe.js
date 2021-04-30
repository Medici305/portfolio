import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import GetInTouch from "../components/GetInTouch";
import SendEmail from "../components/SendEmail";
import ScrollTop from "../components/ScrollTop";

const ContactMe = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <GetInTouch />
      <SendEmail />
    </StyledContact>
  );
};

// Styled Component
const StyledContact = styled(motion.div)``;

export default ContactMe;
