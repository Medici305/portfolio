import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  links: {
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    // Responsive
    "@media (max-width: 992px)": {
      flexDirection: "column",
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // Responsive
    "@media (max-width: 992px)": {
      justifyContent: "center",
    },
  },
}));

const FooterSection = () => {
  const classes = useStyles();
  return (
    <Footer>
      <Grid container className={classes.box}>
        <Grid item className={classes.links} xs={12} md={8} lg={6}>
          <FontAwesomeIcon size="3x" icon={faCode} />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="portfolio">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact-me">Contact Me</Link>
            </li>
          </ul>
        </Grid>
        <Grid item className={classes.icon} xs={12} md={4} lg={6}>
          <FontAwesomeIcon size="2x" icon={faGithub} />
          <FontAwesomeIcon size="2x" icon={faTwitter} />
          <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </Grid>
      </Grid>
    </Footer>
  );
};

// Styled Component
const Footer = styled.div`
  background: rgb(51, 50, 61);
  padding: 2rem 8rem;
  a {
    color: #fff;
    margin-left: 2rem;
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  svg {
    color: #fff;
    margin-left: 2rem;
  }
  ul {
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem 0;
      .portfolio {
        padding: 1rem 0;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export default FooterSection;
