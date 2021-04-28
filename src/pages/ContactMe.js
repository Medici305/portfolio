import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import GetInTouch from "../components/GetInTouch";

const ContactMe = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <GetInTouch />
    </StyledContact>
  );
};

// Styled Component
const StyledContact = styled(motion.div)`
  color: black;
`;

export default ContactMe;
