import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
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
      justifyContent: "space-evenly",
    },
  },
}));

const FooterSection = () => {
  const classes = useStyles();
  return (
    <Footer>
      <Container>
        <Grid container className={classes.box}>
          <Grid item className={classes.links} xs={12} md={8} lg={6}>
            <FontAwesomeIcon size="3x" icon={faCode} />
            <p>&copy; 2021 Julien Osman</p>
          </Grid>
          <Grid item className={classes.icon} xs={12} md={4} lg={6}>
            <a
              href="https://github.com/Medici305"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="icon" size="3x" icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/ProgrammingThug"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="icon" size="3x" icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/julien-o-841570190/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="icon" size="3x" icon={faLinkedin} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Footer>
  );
};

// Styled Component
const Footer = styled.div`
  background: rgb(51, 50, 61);
  padding: 2rem 0;
  a {
    color: #fff;
    margin-left: 2rem;
    cursor: pointer;
    @media (max-width: 992px) {
      text-align: center;
      margin: 0;
    }
  }
  p {
    padding: 2rem 0;
    color: #fff;
    margin-left: 2rem;
    @media (max-width: 992px) {
      margin-left: 0;
    }
  }
  svg {
    color: #fff;
    &:hover {
      color: #5fb4a2;
    }
  }
  .icon {
    margin-left: 2rem;
    @media (max-width: 992px) {
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export default FooterSection;
