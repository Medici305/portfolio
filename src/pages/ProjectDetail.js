import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    justifyContent: "space-between",
  },
  image: { border: "2px solid black", marginBottom: "5rem" },
  text: {
    border: "2px solid black",
  },
  button: {
    width: "50%",
    padding: ".75rem 2rem",
    borderRadius: ".1rem",
    background: "transparent",
    border: "1px solid rgb(51, 50, 61)",
    fontFamily: "Public Sans",
    boxShadow: "none",
    display: "block",
    "&:hover": {
      background: "rgb(51, 50, 61)",
      color: "#fff",
    },
  },
}));

const ProjectDetail = ({ siteInfo, setSiteInfo }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const pageInfo = siteInfo.filter((site) => site.link === pathname)[0];
  const url = pageInfo.link;
  console.log(url);
  return (
    <Detail>
      <Grid container className={classes.container}>
        {/* 1. Static Preview */}
        <Grid item xs={12} className={classes.image}>
          <img src={pageInfo.image} alt={pageInfo.name} />
        </Grid>
        {/* 2. Tech stack */}
        <Grid item md={4} className={classes.text}>
          <div className="line"></div>
          <h2>{pageInfo.name}</h2>
          <p>{pageInfo.description}</p>
          {/* tech stack */}
          <span>HTML / CSS / JS</span>
          <Button
            href={pageInfo.liveSite}
            target="_blank"
            className={classes.button}
          >
            Visit Website
          </Button>
          <div className="line"></div>
        </Grid>
        {/* 3. Project Bacbkground */}
        <Grid item md={4} className={classes.text}>
          <h3>Project Background</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
            harum voluptatem soluta sunt id sapiente! Excepturi eaque facilis
            totam porro?
          </p>
        </Grid>
        {/* 4. Carousel next/prev */}
        <Grid item></Grid>
      </Grid>
    </Detail>
  );
};

const Detail = styled.div`
  h2 {
    font-size: 2rem;
    text-align: left;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default ProjectDetail;
