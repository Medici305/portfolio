import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Julien from "../img/anime.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "10rem",
    "@media (max-width: 992px)": {
      marginBottom: "5rem",
    },
  },
  image: {
    "@media (max-width: 992px)": {
      marginBottom: "2rem",
    },
  },
  text: {
    padding: "0 6rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // tablet screen
    "@media (max-width: 992px)": {
      textAlign: "center",
      padding: "0",
    },
  },
  button: {
    width: "50%",
    padding: ".75rem 2rem",
    borderRadius: ".1rem",
    background: "transparent",
    border: "1px solid rgb(51, 50, 61)",
    fontFamily: "Public Sans",
    boxShadow: "none",
  },
}));

const AboutSection = () => {
  const classes = useStyles();
  return (
    <About className={classes.root}>
      <Grid container className={classes.box}>
        <Grid item className={classes.image} xs={12} md={4} lg={6}>
          <img src={Julien} alt="Julien" />
        </Grid>
        <Grid item className={classes.text} xs={12} md={8} lg={6}>
          <hr />
          <h2>About Me</h2>
          <p>
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <Button variant="contained" className={classes.button}>
            Go To Portfolio
          </Button>
          <hr />
        </Grid>
      </Grid>
    </About>
  );
};

// Styled Component
const About = styled.div`
  h2 {
    @media (min-width: 992px) {
      text-align: left;
    }
    @media (max-width: 992px) {
      margin: 1rem 0;
    }
  }
  img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
    // Responsive
    @media (max-width: 578px) {
      height: 40vh;
    }
  }
  hr {
    width: 100%;
  }
  button {
    color: rgb(51, 50, 61);
    &:hover {
      background: rgb(51, 50, 61);
      color: #fff;
    }
    @media (max-width: 992px) {
      margin: 2rem 0;
    }
  }
`;

export default AboutSection;
