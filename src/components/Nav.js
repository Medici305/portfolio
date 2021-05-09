import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { Link } from "react-scroll";
import Container from "@material-ui/core/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ aboutRef, portfolioRef }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Container>
        <NavStyle>
          {/* 1. Logo */}
          <Logo>
            <FontAwesomeIcon size="3x" icon={faCode} />
          </Logo>
          {/* 2. Nav links */}
          <ul>
            <li>
              <Link to="about" smooth="true" duration={200}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth="true" duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="contact-me" smooth="true" duration={500}>
                Contact Me
              </Link>
            </li>
          </ul>
          {/* 3. Hamburger */}
          <FontAwesomeIcon
            onClick={() => setToggle(!toggle)}
            size="2x"
            icon={toggle ? faTimes : faBars}
          />
          {toggle && <Dropdown toggle={toggle} setToggle={setToggle} />}
        </NavStyle>
      </Container>
    </>
  );
};

// Styled components
const NavStyle = styled.nav`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    flex: 0.4;
    justify-content: space-between;
    // Responsive
    @media (max-width: 768px) {
      flex: 0.5;
    }
    @media (max-width: 578px) {
      display: none;
    }
    a {
      transition: all 0.5s ease-in-out;
      color: rgb(51, 50, 61);
      font-weight: 600;
      cursor: pointer;
      &:hover {
        color: #5fb4a8;
      }
    }
  }
  svg {
    color: rgb(51, 50, 61);
    z-index: 3000;
  }
  hr {
    width: 80%;
    border-radius: 4rem;
  }
  .highlight {
    color: #5fb4a2;
  }
`;

const Logo = styled.div`
  flex: 0.3;
`;

export default Nav;
