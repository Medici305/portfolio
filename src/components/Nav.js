import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { Link, useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ toggle, setToggle }) => {
  const { pathname } = useLocation();
  return (
    <Container>
      <NavStyle>
        {/* 1. Logo */}
        <Logo>
          <Link to="/">
            <FontAwesomeIcon size="4x" icon={faCode} />
          </Link>
        </Logo>
        {/* 2. Nav links */}
        <ul>
          <li>
            <Link className={pathname === "/" ? "highlight" : ""} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/portfolio" ? "highlight" : ""}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/contact-me" ? "highlight" : ""}
              to="/contact-me"
            >
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
  );
};

// Styled components
const NavStyle = styled.nav`
  min-height: 15vh;
  //padding: 0 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: sticky;
  top: 0;
  z-index: 10; */
  //border: 2px solid blue;
  background: #fff;
  ul {
    flex: 0.4;
    justify-content: space-between; // Responsive
    @media (max-width: 578px) {
      display: none;
    }
    a {
      transition: all 0.5s ease-in-out;
      color: rgb(51, 50, 61);
      font-weight: 600;
      &:hover {
        color: #5fb4a8;
      }
    }
  }
  svg {
    color: rgb(51, 50, 61);
  }
  hr {
    width: 80%;
    border-radius: 4rem;
  }
  @media (max-width: 992px) {
    //padding: 0 2rem;
  }
  .highlight {
    color: #5fb4a2;
  }
`;

const Logo = styled.div`
  flex: 0.3;
`;

export default Nav;
