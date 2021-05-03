import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ScrollTop from "../components/ScrollTop";
import CollabSection from "../components/CollabSection";
import { motion } from "framer-motion";
import { slideProject } from "../Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
  carousel: {
    border: "2px solid #e2e2e2",
    borderLeft: "none",
    borderRight: "none",
    margin: "2rem 0",
    //padding: "2rem 0",
    display: "flex",
    justifyContent: "space-between",
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
  const pageInfo = siteInfo.filter((site) => site.link === pathname)[0];
  // State
  let currentIndex = siteInfo.findIndex((site) => site.link === pathname);
  const [currentObj, setCurrentObj] = useState(pageInfo);
  const [nextObj, setNextObj] = useState(siteInfo[currentIndex + 1]);
  console.log(nextObj);
  // Functions
  const skipHandler = (direction) => {
    console.log(currentIndex);

    if (direction === "next") {
      console.log("increment");
      currentIndex++;
      setCurrentObj(siteInfo[currentIndex % siteInfo.length]);
    }
  };
  //console.log(currentObj);

  return (
    <Detail variant={slideProject} exit="exit" initial="hidden" animate="show">
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
        <Grid
          item
          xs={6}
          className={classes.carousel}
          onClick={() => skipHandler("prev")}
        >
          <Link to={`${currentObj.link}`}>
            <Prev>
              <h3>{nextObj.name}</h3>
              <p>Previous Project</p>
            </Prev>
            <FontAwesomeIcon className="icon" size="2x" icon={faArrowLeft} />
          </Link>
        </Grid>
        <Grid
          item
          xs={6}
          className={classes.carousel}
          onClick={() => skipHandler("next")}
        >
          <Link to={`${currentObj.link}`}>
            <Next>
              <h3 style={{ textAlign: "right" }}>{nextObj.name}</h3>
              <p>Next Project</p>
            </Next>
            <FontAwesomeIcon className="icon" size="2x" icon={faArrowRight} />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <CollabSection />
        </Grid>
      </Grid>
    </Detail>
  );
};

const Detail = styled(motion.div)`
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

const Next = styled.div`
  text-align: right;
`;

const Prev = styled.div``;

export default ProjectDetail;
