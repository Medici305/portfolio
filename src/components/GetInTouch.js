import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  boxes: {
    marginTop: "4rem",
    justifyContent: "space-between",
    "@media (max-width: 768px)": {
      marginTop: "2rem",
    },
  },
  box: {
    marginTop: "3rem",
  },
}));

const GetInTouch = () => {
  const classes = useStyles();
  return (
    <StyleGreet id="contact-me">
      <h1>Contact Me</h1>
      {/* 1. Get in touch */}
      <Grid container className={classes.boxes}>
        <div className="line"></div>
        <Grid item className={classes.box} md={4}>
          <h2>Get in touch</h2>
        </Grid>
        <Grid item className={classes.box} md={6}>
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
        </Grid>
      </Grid>
    </StyleGreet>
  );
};

const StyleGreet = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 7.5rem;
  }
  h2 {
    text-align: left;
  }
  p {
    text-align: justify;
  }
  path {
    color: rgb(51, 50, 61);
    &:hover {
      color: #5fb4a2;
    }
  }
  .icon {
    margin: 2rem 2rem 2rem 0;
  }
`;
export default GetInTouch;
