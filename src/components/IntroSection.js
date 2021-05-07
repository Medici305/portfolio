import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { makeStyles } from "@material-ui/core/styles";
import "react-lazy-load-image-component/src/effects/blur.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Code from "../img/pexels-jayant-kulkarni-910213.jpg";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "10rem",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: "#fff",
    //border: "2px solid rgb(51, 50, 61)",
    padding: "2rem",
    textAlign: "right",
    // Tablet screen
    "@media (max-width: 786px)": {
      padding: "3rem",
      textAlign: "right",
    },
    // mobile Screen and below
    "@media (max-width: 578px)": {
      position: "static",
      padding: "1rem 2rem",
      textAlign: "center",
    },
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
}));

const IntroSection = ({ aboutRef, toggle, setToggle, portfolioRef }) => {
  const classes = useStyles();
  // Function
  const executeScroll = () => aboutRef.current.scrollIntoView();
  return (
    <Intro className={classes.root}>
      <Nav
        toggle={toggle}
        setToggle={setToggle}
        aboutRef={aboutRef}
        porfolioRef={portfolioRef}
      />
      <Grid container className={classes.container}>
        <Grid item className={classes.text} lg={8}>
          <h1>
            Hello, my name is Julien Osman and I love building beautiful
            websites.
          </h1>
          <Link to="about" spy={true} smooth={true} duration={200}>
            <Button
              variant="contained"
              color="secondary"
              onClick={executeScroll}
              className={classes.button}
            >
              About Me
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Intro>
  );
};

// styled components
const Intro = styled.div`
  background-image: url(${Code});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  @media (max-width: 578px) {
    background-position: 25% 70%;
    min-height: 110vh;
  }
  h1 {
    //color: #fff;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    // Responsive
    @media (max-width: 578px) {
      height: 60vh;
      //border: 2px solid green;
    }
  }
`;

export default IntroSection;
