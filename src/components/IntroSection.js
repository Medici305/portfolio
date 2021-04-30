import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ProgressiveImage from "react-progressive-image";
import Code from "../img/pexels-negative-space-169573.jpg";
import CompressedCode from "../img/compressed-intro.jpg";

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
    //padding: "1rem 2rem",
    padding: ".75rem 1rem",
    borderRadius: ".1rem",
    background: "rgb(51, 50, 61)",
    fontFamily: "Public Sans",
    boxShadow: "none",
  },
  text: {
    position: "absolute",
    bottom: "0",
    left: "0",
    background: "#fff",
    color: "rgb(51, 50, 61)",
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

const IntroSection = ({ myRef }) => {
  const classes = useStyles();
  // Function
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <Intro className={classes.root}>
      <Grid container className={classes.box}>
        <Grid item className={classes.image} xs={12}>
          <ProgressiveImage src={CompressedCode} placeholder="tiny-image.jpg">
            {(src, loading) => (
              <img style={{ opacity: .9 }} src={Code} alt="an image" />
            )}
          </ProgressiveImage>
        </Grid>
        <Grid item className={classes.text} sm={8} lg={5}>
          <h1>Hey, I'm Julien Osman and I love building beautiful websites.</h1>
          <Button
            variant="contained"
            color="secondary"
            onClick={executeScroll}
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
  h1 {
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
    width: 50%;
    &:hover {
      background: #5fb4a8;
    }
    svg {
      color: #fff;
      margin-right: 2rem;
      @media (max-width: 768px) {
        margin-right: 0rem;
      }
    }
    @media (max-width: 992px) {
      width: 75%;
    }
  }
`;

export default IntroSection;
