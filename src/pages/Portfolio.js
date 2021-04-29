import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
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
  image: {
    "@media (max-width: 992px)": {
      //marginBottom: "2rem",
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
    },
  },
  button: {
    width: "50%",
    padding: ".75rem 2rem",
    borderRadius: ".1rem",
    background: "transparent",
    border: "1px solid rgb(51, 50, 61)",
    fontFamily: "Public Sans",
    boxShadow: "none",
  },
}));

const Portfolio = ({ siteInfo, setSiteInfo }) => {
  const classes = useStyles();
  console.log(siteInfo);
  return (
    <StyledPortfolio
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      {siteInfo.map((site) => (
        <Grid container spacing={10}>
          <Grid item className={classes.image} xs={12} md={4} lg={6}>
            <img src={site.image} alt="" />
          </Grid>
          <Grid item className={classes.text} xs={12} md={8} lg={6}>
            <div className="line"></div>
            <h2>{site.name}</h2>
            <p>{site.description}</p>
            <Button
              href={site.liveSite}
              variant="contained"
              className={classes.button}
            >
              view Project
            </Button>
            <div className="line"></div>
          </Grid>
        </Grid>
      ))}
    </StyledPortfolio>
  );
};

// Styled components
const StyledPortfolio = styled(motion.div)`
  color: black;
  margin: 5rem 0;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
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
      margin: 2rem 0;
    }
  }
`;

export default Portfolio;
