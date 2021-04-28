import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const Portfolio = () => {
  return (
    <StyledPortfolio
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      Portfolio
       sdfc
    </StyledPortfolio>
  );
};

// Styled components
const StyledPortfolio = styled(motion.div)`
  color: black;
`;

export default Portfolio;
