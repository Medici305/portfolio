import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageAnimation } from "../Animation";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ScrollTop from "../components/ScrollTop";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    marginBottom: "10rem",
    "@media (max-width: 992px)": {
      marginBottom: "5rem",
    },
    "@media (max-width: 578px)": {
      margin: "0rem",
    },
  },
  image: {
    "@media (max-width: 992px)": {
      order: 1,
    },
  },
  text: {
    padding: "0 6rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // tablet screen
    "@media (max-width: 992px)": {
      textAlign: "center",
      padding: "0",
      order: 2,
    },
  },
  title: {
    fontSize: "2rem",
    "@media (max-width: 992px)": {
      fontSize: "3rem",
    },
  },
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
  },
}));

const Portfolio = ({ siteInfo, setSiteInfo, portfolioRef }) => {
  const classes = useStyles();
  return (
    <StyledPortfolio
      ref={portfolioRef}
      id="portfolio"
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <h1>Portfolio</h1>
      {siteInfo.map((site) =>
        site.even ? (
          <Grid container key={site.id} className={classes.container}>
            <Grid item xs={12} md={4} lg={6}>
              <img src={site.image} alt={site.name} />
            </Grid>
            <Grid item className={classes.text} xs={12} md={8} lg={6}>
              <div className="line"></div>
              <h2 className={classes.title}>{site.name}</h2>
              <p>{site.description}</p>
              <Button
                href={site.link}
                variant="contained"
                className={classes.button}
              >
                view Project
              </Button>
              <div className="line"></div>
            </Grid>
          </Grid>
        ) : (
          <Grid container key={site.id} className={classes.container}>
            <Grid item className={classes.text} xs={12} md={8} lg={6}>
              <div className="line"></div>
              <h2 className={classes.title}>{site.name}</h2>
              <p>{site.description}</p>
              <Link to={site.link}>
                <Button variant="contained" className={classes.button}>
                  view Project
                </Button>
              </Link>
              <div className="line"></div>
            </Grid>
            <Grid item className={classes.image} xs={12} md={4} lg={6}>
              <img src={site.image} alt={site.name} />
            </Grid>
          </Grid>
        )
      )}
    </StyledPortfolio>
  );
};

// Styled components
const StyledPortfolio = styled(motion.div)`
  color: black;
  margin: 5rem 0;
  h1 {
    margin: 5rem 0;
    text-align: center;
  }
  img {
    width: 100%;
    //height: 50vh;
    object-fit: cover;
    //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 578px) {
      height: 40vh;
    }
  }
  p {
    margin: 2rem 0;
  }
  button {
    color: rgb(51, 50, 61);
    &:hover {
      background: rgb(51, 50, 61);
      color: #fff;
    }
    @media (max-width: 992px) {
      margin: 2rem 0;
    }
  }
  .line {
    @media (max-width: 992px) {
      margin: 4rem 0;
    }
  }
  @media (max-width: 992px) {
    margin: 1rem 0 10rem 0;
  }
  @media (max-width: 578px) {
    margin: 0;
  }
`;

export default Portfolio;