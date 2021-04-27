import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <NavStyle>
      {/* 1. Logo */}
      <Logo>
        <Link to="/">
          <FontAwesomeIcon size="3x" icon={faCode} />
        </Link>
      </Logo>
      {/* 2. Nav links */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact-me">Contact Me</Link>
        </li>
      </ul>
      {/* 3. Hamburger */}
      <FontAwesomeIcon
        onClick={() => setToggle(!toggle)}
        size="2x"
        icon={toggle ? faTimes : faBars}
      />
      {toggle && <Dropdown />}
    </NavStyle>
  );
};

// Styled components
const NavStyle = styled.nav`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: sticky;
  top: 0;
  z-index: 10; */
  border: 2px solid blue;
  background: #fff;
  ul {
    flex: 0.5;
    // Responsive
    @media (max-width: 578px) {
      display: none;
    }
    a {
      transition: all 0.5s ease-in-out;
      color: #33323d;
      font-weight: 600;
      &:hover {
        color: #5fb4a8;
      }
    }
  }
`;

const Logo = styled.div`
  flex: 0.3;
`;

export default Nav;
