import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Animation
import { motion } from "framer-motion";
import { dropdown } from "../Animation";

const Dropdown = () => {
  return (
    <StyleDropdown variants={dropdown} initial="hidden" animate="show">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <hr />
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <hr />
        <li>
          <Link to="/contact-me">Contact Me</Link>
        </li>
      </ul>
    </StyleDropdown>
  );
};

// Style components
const StyleDropdown = styled(motion.div)`
  position: absolute;
  left: 3%;
  top: 15%;
  width: 94%;
  height: 45vh;
  background: #fff;
  border: 2px solid #5fb4a8;
  border-radius: 0.2rem;
  z-index: 200;
  @media (min-width: 578px) {
    display: none;
  }
  ul {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // Responsive
    @media (max-width: 578px) {
      display: flex !important;
    }
    li {
      margin: 2.5rem 0;
      a {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Dropdown;
