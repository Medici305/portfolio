import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
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
    <StyledPortfolio id="portfolio" ref={portfolioRef}>
      <Container>
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
                <Link to={site.link}>
                  <Button
                    href={site.link}
                    variant="contained"
                    className={classes.button}
                  >
                    view Project
                  </Button>
                </Link>

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
      </Container>
    </StyledPortfolio>
  );
};

// Styled components
const StyledPortfolio = styled.div`
  background: #fefbf6;
  color: black;
  margin: 5rem 0;
  h1 {
    margin: 5rem 0;
    text-align: center;
  }
  img {
    width: 100%;
    object-fit: cover;
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
