import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Code from "../img/pexels-kevin-ku-577585.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    //padding: "5rem",
    border: "2px solid #fff",
    position: "relative",
    marginBottom: "5rem",
    // mobile Screen and below
    [theme.breakpoints.down("s")]: {},
    // Tablet Screen and above
    [theme.breakpoints.up("m")]: {},
    // Desktop Screen
    [theme.breakpoints.down("xs")]: {},
  },
  image: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  text: {
    position: "absolute",
    bottom: "0",
    left: "0",
    background: "#fff",
    color: "#33323D",
  },
}));

const IntroSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item className={classes.image} xs={12}>
          <img src={Code} alt="code" />
        </Grid>
        <Grid item className={classes.text} xs={12}>
          <h2>
            Hey, I'm Abubaker Osman and I love building beautiful websites
          </h2>
          <Button>About Me</Button>
        </Grid>
      </Grid>
    </div>
  );
};

// styled components

export default IntroSection;
