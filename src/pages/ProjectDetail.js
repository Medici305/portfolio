import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ScrollTop from "../components/ScrollTop";
import CollabSection from "../components/CollabSection";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    justifyContent: "space-between",
  },
  image: {
    //border: "2px solid black",
    marginBottom: "5rem",
  },
  text: {
    //border: "2px solid black",
  },
  background: {
    "@media (max-width: 992px)": {
      marginTop: "2rem",
    },
  },
  leftCarousel: {
    textAlign: "left",
    cursor: "pointer",
    border: "2px solid #e2e2e2",
    borderLeft: "none",
    margin: "2rem 0",
    padding: "4rem 0",
  },
  rightCarousel: {
    textAlign: "right",
    cursor: "pointer",
    border: "2px solid #e2e2e2",
    borderRight: "none",
    margin: "2rem 0",
    padding: "4rem 0",
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
    marginBottom: "2rem",
    "&:hover": {
      background: "rgb(51, 50, 61)",
      color: "#fff",
    },
  },
}));

const ProjectDetail = ({ siteInfo, setSiteInfo }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  console.log(pathname);
  const pageInfo = siteInfo.filter((site) => site.link === pathname)[0];
  //onst url = pageInfo.link;
  // Functions
  //   const currentIndex = pageInfo.position;
  //   console.log(currentIndex);
  return (
    <Detail>
      <ScrollTop />
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
          <h4>HTML / CSS / JS</h4>
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
        <Grid item md={7} className={classes.background}>
          <h3>Project Background</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            eaque dolorum tenetur nobis rerum nihil illo incidunt quidem debitis
            possimus facere nemo? Quia, accusantium asperiores ipsam provident
            eligendi nam ducimus excepturi fugiat vitae vel ad suscipit beatae
            quaerat officia sapiente.
          </p>
        </Grid>
        {/* 4. Carousel next/prev */}
        <Grid item xs={6} className={classes.leftCarousel}>
          <p>Previous Project</p>
        </Grid>
        <Grid item xs={6} className={classes.rightCarousel}>
          <p>Next Project</p>
        </Grid>
        <Grid item xs={12}>
          <CollabSection />
        </Grid>
      </Grid>
    </Detail>
  );
};

const Detail = styled.div`
  h2 {
    text-align: left;
    margin-top: 2rem;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  h4 {
    margin: 1rem 0;
    color: #5fb4a8;
  }
  p {
    margin: 1rem 0;
  }
`;

export default ProjectDetail;
