import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "10rem",
    "@media (max-width: 992px)": {
      marginBottom: "5rem",
    },
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //border: "2px solid green",
  },
  text: {},
  button: {
    padding: ".75rem 2rem",
    borderRadius: ".1rem",
    background: "transparent",
    border: "1px solid rgb(51, 50, 61)",
    fontFamily: "Public Sans",
    boxShadow: "none",
    "&:hover": {
      background: "rgb(51, 50, 61)",
      color: "#fff",
    },
    "@media (max-width: 992px)": {
      marginTop: "2rem",
    },
  },
}));

const CollabSection = () => {
  const classes = useStyles();
  return (
    <Collaborate className={classes.root}>
      <Grid container className={classes.box}>
        <Grid item className={classes.text} xs={12} md={4}>
          <h2>Interested in doing a project together?</h2>
        </Grid>
        <Grid
          item
          className={classes.box}
          md={6}
          display={{ xs: "none", lg: "block", xl: "none" }}
        >
          <div className="line"></div>
        </Grid>
        <Grid item className={classes.box} xs={12} md={2}>
          <Link to="/contact-me">
            <Button
              variant="contained"
              className={classes.button}
            >
              Contact Me
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Collaborate>
  );
};

const Collaborate = styled.div`
  button {
    color: rgb(51, 50, 61);
    &:hover {
      background: rgb(51, 50, 61);
      color: #fff;
    }
    @media (max-width: 992px) {
      width: 50%;
    }
  }
`;

export default CollabSection;
