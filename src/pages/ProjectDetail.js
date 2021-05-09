import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ScrollTop from "../components/ScrollTop";
import CollabSection from "../components/CollabSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
  },
  image: {
    margin: "4rem 0",
  },
  background: {
    marginTop: "5rem",
    "@media (max-width: 992px)": {
      marginTop: "2rem",
    },
    "@media (max-width: 768px)": {
      textAlign: "center",
    },
  },
  carousel: {
    border: "2px solid #e2e2e2",
    margin: "2rem 0",
    padding: "2rem 1rem",
    cursor: "pointer",
    "&:hover": {
      background: "#5fb4a8",
      color: "white",
      transition: "all .5s ease-in-out",
    },
    "@media (max-width: 768px)": {
      padding: "1rem 0",
    },
  },
  line: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: ".75rem 2rem",
    borderRadius: ".1rem",
    background: "transparent",
    border: "1px solid rgb(51, 50, 61)",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "Public Sans",
    boxShadow: "none",
    marginBottom: "2rem",
    "&:hover": {
      background: "rgb(51, 50, 61)",
      color: "#fff",
    },
    "@media (max-width: 768px)": {
      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      width: "75%",
      margin: "0 auto",
      marginBottom: "2rem",
    },
  },
  returnBtn: {
    padding: ".75rem 2rem",
    borderRadius: ".1rem",
    background: "transparent",
    "&:hover": {
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
  },
}));

const ProjectDetail = ({ siteInfo, setSiteInfo }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const pageInfo = siteInfo.filter((site) => site.link === pathname)[0];
  // State
  let currentIndex = siteInfo.findIndex((site) => site === pageInfo);
  // Next Page functionality
  const nextPage = siteInfo[(currentIndex + 1) % siteInfo.length];
  // prev page functionality
  const prevPage =
    (currentIndex - 1) % siteInfo.length === -1
      ? siteInfo[siteInfo.length - 1]
      : siteInfo[(currentIndex - 1) % siteInfo.length];

  return (
    <Detail variant={pageAnimation} exit="exit" initial="hidden" animate="show">
      <ScrollTop />
      <Grid container className={classes.container}>
        {/* 1. Tech stack */}
        <Grid
          item
          xs={10}
          style={{ width: "50%", textAlign: "left" }}
          className={classes.background}
        >
          <Button href="./" className={classes.returnBtn}>
            <FontAwesomeIcon
              className="icon"
              size="1x"
              style={{ marginRight: "2rem" }}
              icon={faChevronLeft}
            />
            Home
          </Button>
        </Grid>
        <Grid item md={4} className={classes.background}>
          <div className="line"></div>
          <h2>{pageInfo.name}</h2>
          <p>{pageInfo.description}</p>
          {/* tech stack */}
          <h4>{pageInfo.techStack}</h4>
          <Button
            href={pageInfo.liveSite}
            target="_blank"
            className={classes.button}
            style={{ textAlign: "center" }}
          >
            Live Site
          </Button>
          <Button
            href={pageInfo.source}
            target="_blank"
            className={classes.button}
          >
            Github Code
          </Button>
          <div className="line"></div>
        </Grid>
        {/* 2. Project Bacbkground */}
        <Grid item md={7} className={classes.background}>
          <h3>Project Background</h3>
          <p>{pageInfo.detail}</p>
        </Grid>
        {/* 3. Static Preview */}
        <Grid item xs={12} className={classes.image}>
          <img src={pageInfo.image} alt={pageInfo.name} />
        </Grid>
        {/* 4. Carousel next/prev */}
        {/* 4.1 Previous Project */}
        <Grid container>
          <Grid item xs={5} className={classes.carousel}>
            <AlteredLink to={`${prevPage.link}`}>
              <Prev>
                <h3>{prevPage.name}</h3>
                <p>Prev Project</p>
              </Prev>
              <FontAwesomeIcon
                className="icon"
                size="3x"
                icon={faChevronLeft}
              />
            </AlteredLink>
          </Grid>
          <Grid item xs={2} className={classes.line}>
            <hr />
          </Grid>
          {/* 4.2 Next Project  */}
          <Grid
            item
            xs={5}
            className={classes.carousel}
            style={{ textAlign: "right" }}
          >
            <LinkAltered
              to={`${nextPage.link}`}
              className={classes.carouselItem}
            >
              <Next>
                <h3>{nextPage.name}</h3>
                <p>Next Project</p>
              </Next>
              <FontAwesomeIcon
                className="icon"
                size="3x"
                icon={faChevronRight}
              />
            </LinkAltered>
          </Grid>
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
    margin-top: 2rem;
    text-align: left;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  h3 {
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  p {
    margin: 1rem 0;
    @media (max-width: 768px) {
      //text-align: justify;
    }
  }
  hr {
    transform: rotate(90deg);
    width: 75%;
  }
`;

const LinkAltered = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 578px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    svg {
      display: none;
    }
  }
`;

const AlteredLink = styled(LinkAltered)`
  flex-direction: row-reverse;
  @media (max-width: 578px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    svg {
      margin-left: 2rem;
    }
  }
`;

const Next = styled.div`
  margin-right: 2rem;
  h3 {
    text-align: right;
    font-weight: 700;
    font-size: 1.5rem;
    //margin: 0;
    @media (max-width: 578px) {
      font-size: 1rem;
    }
  }
  p {
    margin: 0;
    @media (max-width: 578px) {
      font-size: 0.9rem;
    }
  }
`;

const Prev = styled(Next)`
  margin: 0rem 0rem 0rem 2rem;
  h3 {
    text-align: left;
    margin: 0;
  }
`;

export default ProjectDetail;
