import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Code from "../img/pexels-negative-space-169573.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    //border: "2px solid black",
    marginBottom: "5rem",
    justifyContent: "center",
    // mobile Screen and below
    "@media (max-width: 578px)": {
      position: "static",
    },
    // Tablet Screen and above
    "@media (min-width: 578px)": {
      position: "relative",
    },
  },
  image: {
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: "2rem",
    width: "50%",
    padding: "1rem 2rem",
    background: "#203A4C",
  },
  text: {
    position: "absolute",
    bottom: "0",
    left: "0",
    background: "#fff",
    color: "#33323D",
    //border: "2px solid red",
    padding: "4rem",
    textAlign: "center",
    // Tablet screen
    "@media (max-width: 786px)": {
      padding: "3rem",
    },
    // mobile Screen and below
    "@media (max-width: 578px)": {
      position: "static",
      margin: "0 auto",
      padding: "0rem",
    },
  },
}));

const IntroSection = () => {
  const classes = useStyles();

  return (
    <Intro className={classes.root}>
      <Grid container className={classes.box}>
        <Grid item className={classes.image} xs={12}>
          <img src={Code} alt="code" />
        </Grid>
        <Grid item className={classes.text} sm={8} lg={5}>
          <h2>Hey, I'm Julien Osman and I love building beautiful websites.</h2>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<ExpandMoreIcon />}
          >
            About Me
          </Button>
        </Grid>
      </Grid>
    </Intro>
  );
};

// styled components
const Intro = styled.div`
  h2 {
    font-size: 2rem;
    line-height: 3rem;
    // Responsive
    @media (max-width: 578px) {
      font-size: 3rem;
      line-height: 3.5rem;
      margin-top: 1rem;
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
  button {
    text-align: center;
    svg {
      color: #fff;
    }
  }
`;

export default IntroSection;
