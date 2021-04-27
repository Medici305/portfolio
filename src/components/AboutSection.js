import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Julien from "../img/pexels-thyrone-paas-1722198.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "5rem",
  },
  box: {
    //border: "2px solid green",
  },
  image: {
    // // Labtop screen
    // "@media (max-width: 992px)": {
    //   flex: ".2",
    // },
  },
  text: {
    padding: "0 7rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // tablet screen
    "@media (max-width: 768px)": {
      //border: "2px solid yellow",
      padding: "0",
    },
  },
  button: {
    width: "50%",
    padding: ".75rem 2rem",
    borderRadius: ".1rem",
    fontWeight: "bold",
    background: "transparent",
    border: "2px solid #33323d",
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
    text-align: left;
    @media (max-width: 768px) {
      font-size: 3.5rem;
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
      //border: 2px solid green;
    }
  }
  hr {
    width: 100%;
  }
  button {
    color: #33323d;
    &:hover {
      background: #33323d;
      color: #fff;
    }
    @media (max-width: 768px) {
      margin: 1rem 0;
    }
  }
`;

export default AboutSection;
