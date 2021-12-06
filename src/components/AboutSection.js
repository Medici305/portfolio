import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
//import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Julien from "../img/anime.png";
//import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "10rem",
    "@media (max-width: 992px)": {
      marginBottom: "5rem",
    },
  },
  // image: {
  //   border: "2px solid black",

  //   "@media (max-width: 992px)": {
  //     marginBottom: "2rem",
  //   },
  // },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space",
    alignItems: "center",
    "@media (max-width: 992px)": {
      flexDirection: "column",
    },
    //border: "2px solid black",
  },
  // text: {
  //   padding: "0 6rem",
  //   display: "flex",
  //   alignItems: "center",
  //   border: "2px solid black",

  //   // tablet screen
  //   "@media (max-width: 992px)": {
  //     textAlign: "center",
  //     padding: "0",
  //   },
  // },
  // button: {
  //   width: "100%",
  //   padding: ".75rem 2rem",
  //   borderRadius: ".1rem",
  //   background: "transparent",
  //   border: "1px solid rgb(51, 50, 61)",
  //   fontFamily: "Public Sans",
  //   boxShadow: "none",
  //   "&:hover": {
  //     background: "rgb(51, 50, 61)",
  //     color: "#fff",
  //   },
  //   "@media (max-width: 992px)": {
  //     margin: "2rem 0",
  //   },
  // },
}));

const AboutSection = ({ aboutRef }) => {
  const classes = useStyles();
  return (
    <Container>
      <About className={classes.root} ref={aboutRef} id="about">
        <h2>About Me</h2>
        <Grid className={classes.box}>
          <img src={Julien} alt="Julien" />
          {/* <div className="line"></div> */}
          <p>
            I'm a London based Front-End Developer focused on crafting clean and
            user-friendly experience. I'm extremely passionate about web
            development. Coding for me is more than knowledge, it helps me to
            express my creativity and potential. I truly love what I do, as
            every day there is something new and exciting to learn.
          </p>
          {/* <Link to="portfolio" smooth="true" duration={200}>
              <Button variant="contained" className={classes.button}>
                Go To Portfolio
              </Button>
            </Link> */}
          {/* <div className="line"></div> */}
        </Grid>
        <h2>Skills</h2>
        <Grid container className={classes.box}></Grid>
      </About>
    </Container>
  );
};

// Styled Component
const About = styled.div`
  h2 {
    margin: 2rem 0;
    @media (min-width: 992px) {
      text-align: left;
    }
    @media (max-width: 992px) {
      margin: 1rem 0;
    }
  }
  p {
    padding: 0 6rem;
    // Responsive
    @media (max-width: 578px) {
      padding: 0 2rem;
    }
  }
  img {
    max-width: 20%;
    height: auto;
    margin: 0 2rem;
    // Responsive
    @media (max-width: 992px) {
      max-width: 50%;
      margin: 2rem 0;
    }
  }
`;

export default AboutSection;
