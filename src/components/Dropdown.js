import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const Dropdown = ({ toggle, setToggle }) => {
  return (
    <StyleDropdown variants={pageAnimation} initial="hidden" animate="show">
      <ul>
        <li>
          <Link to="about" duration={200} onClick={() => setToggle(!toggle)}>
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            duration={500}
            onClick={() => setToggle(!toggle)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact-me"
            duration={500}
            onClick={() => setToggle(!toggle)}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </StyleDropdown>
  );
};

// Style components
const StyleDropdown = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d3d3d3;
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
