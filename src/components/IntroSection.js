import React from "react";
import ParticlesBg from "particles-bg";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import "react-lazy-load-image-component/src/effects/blur.css";
import Grid from "@material-ui/core/Grid";
//import Button from "@material-ui/core/Button";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faBriefcase,
  faInbox,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "10rem",
    justifyContent: "center",
    //border: "5px solid red",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "100vh",
  },
  text: {
    color: "#fff",
    padding: "2rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    //border: "5px solid blue",

    // Tablet screen
    "@media (max-width: 786px)": {
      padding: "3rem",
    },
    // mobile Screen and below
    "@media (max-width: 578px)": {
      position: "static",
      padding: "1rem 2rem",
      textAlign: "center",
    },
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "2rem",
  },
  button: {
    width: "30%",
    padding: ".75rem 2rem",
    borderRadius: ".1rem",
    background: "transparent",
    border: "1px solid rgb(51, 50, 61)",
    color: "rgb(51,50,61)",
    fontFamily: "Public Sans",
    boxShadow: "none",
    marginTop: "2rem",
    "&:hover": {
      background: "rgb(51, 50, 61)",
      color: "#fff",
    },
    "@media (max-width: 992px)": {
      margin: "2rem 0",
    },
    "@media (max-width: 578px)": {
      width: "75%",
    },
  },
  avatar: {
    backgroundColor: "inherit",
  },
  speedDial: {
    color: "rgb(51,50,61)",
  },
  particle: {
    border: "5px solid blue",
  },
}));

const IntroSection = ({
  toggle,
  setToggle,
  homeRef,
  aboutRef,
  portfolioRef,
  contactRef,
}) => {
  const classes = useStyles();
  const executeScroll = (element) => element.current.scrollIntoView();
  const actions = [
    {
      icon: (
        <FontAwesomeIcon
          className="icon"
          icon={faInbox}
          style={{ color: "rgb(51,50,61)" }}
        />
      ),
      name: "contact",
      scroll: contactRef,
    },
    {
      icon: (
        <FontAwesomeIcon
          className="icon"
          icon={faBriefcase}
          style={{ color: "rgb(51,50,61)" }}
        />
      ),
      name: "portfolio",
      scroll: portfolioRef,
    },
    {
      icon: (
        <FontAwesomeIcon
          className="icon"
          icon={faUser}
          style={{ color: "rgb(51,50,61)" }}
        />
      ),
      name: "about",
      scroll: aboutRef,
    },
    {
      icon: (
        <FontAwesomeIcon
          className="icon"
          icon={faHome}
          style={{ color: "rgb(51,50,61)" }}
        />
      ),
      name: "home",
      scroll: homeRef,
    },
  ];
  return (
    <Intro className={classes.root} ref={homeRef}>
      {/* <Nav toggle={toggle} setToggle={setToggle} /> */}
      <Grid container className={classes.container}>
        <Grid item className={classes.text} lg={8}>
          <h1>
            Hi, I'm <span>Julien</span>!
          </h1>
          <Grid item className={classes.socials}>
            <Avatar className={classes.avatar}>
              {" "}
              <a
                target="_blank"
                href="https://github.com/Medici305"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="icon hvr-grow"
                  size="2x"
                  icon={faGithub}
                  style={{ color: "rgb(51,50,61)" }}
                />
              </a>
            </Avatar>
            <Avatar className={classes.avatar}>
              <a
                target="_blank"
                href="https://twitter.com/ProgrammingThug"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="icon"
                  size="2x"
                  icon={faTwitter}
                  style={{ color: "rgb(51,50,61)" }}
                />
              </a>
            </Avatar>
            <Avatar className={classes.avatar}>
              {" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/julien-o-841570190/"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="icon"
                  size="2x"
                  icon={faLinkedin}
                  style={{ color: "rgb(51,50,61)" }}
                />
              </a>
            </Avatar>
          </Grid>
        </Grid>
      </Grid>
      <SpeedDial
        ariaLabel="SpeedDial"
        className={classes.speedDial}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          color: "rgb(51,50,61)",
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => executeScroll(action.scroll)}
          />
        ))}
      </SpeedDial>
      <ParticlesBg type="polygon" bg={true} />
    </Intro>
  );
};

// styled components
const Intro = styled.div`
  min-height: 100vh;
  @media (max-width: 578px) {
    background-position: 25% 70%;
    min-height: 110vh;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    // Responsive
    @media (max-width: 578px) {
      height: 60vh;
    }
  }
  .MuiSpeedDial-fab {
    //color: white !important;
    background-color: rgb(51, 50, 61) !important;
    path {
      color: white;
    }
    &:hover {
      background-color: white;
      path {
        color: rgb(51, 50, 61);
      }
    }
  }
`;

export default IntroSection;
