import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ScrollTop from "../components/ScrollTop";
import CollabSection from "../components/CollabSection";
import { motion } from "framer-motion";
import { slideProject } from "../Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    justifyContent: "space-between",
  },
  image: {
    margin: "5rem 0",
  },
  text: {},
  background: {
    "@media (max-width: 992px)": {
      marginTop: "2rem",
    },
  },
  carousel: {
    border: "2px solid #e2e2e2",
    margin: "2rem 0",
    padding: "2rem 1rem",
    cursor: "pointer",
    "&:hover": {
      background: "rgb(51, 50, 61)",
      color: "#fff",
      transition: "all .5s ease-in-out",
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            perferendis labore odit. Voluptates, dolores at? Nulla odio error
            beatae dicta harum quos doloremque voluptate, architecto dolore
            aliquid ipsam id facere dolorem nobis provident repellat corporis
            omnis nesciunt deserunt quae magni sit? Corporis ea labore suscipit
            dolorem ipsam tempore ullam quaerat sit fugit laborum libero nihil
            similique officia nulla tempora eligendi, id sed totam? Eum quae
            pariatur aperiam voluptatem sunt molestiae omnis dolores natus. Iure
            placeat maxime eius eos! Beatae assumenda unde quidem reprehenderit
            praesentium illum nemo ab ratione quos. Quibusdam iure rerum eveniet
            voluptatibus consequuntur praesentium nihil molestiae temporibus ut.
            Obcaecati alias nostrum laborum dolorem rem culpa reprehenderit modi
            veniam minima sapiente iusto autem, eaque perspiciatis quidem
            praesentium error iure accusantium id quasi dolores! Mollitia
            veritatis quidem illum vel nihil minima odio earum amet rem error
            officiis quam corporis, neque temporibus deserunt distinctio animi
            dolore eius, eum, porro magni fuga.
          </p>
        </Grid>
        {/* 4. Carousel next/prev */}
        {/* 4.1 Previous Project */}
        <Grid container>
          <Grid
            item
            xs={5}
            className={classes.carousel}
            onClick={() => skipHandler("prev")}
          >
            <AlteredLink to={`${currentObj.link}`}>
              <Prev>
                <h3>{nextObj.name}</h3>
                <p>Previous Project</p>
              </Prev>
              <FontAwesomeIcon
                className="icon"
                size="4x"
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
            onClick={() => skipHandler("next")}
            style={{ textAlign: "right" }}
          >
            <LinkAltered
              to={`${currentObj.link}`}
              className={classes.carouselItem}
            >
              <Next>
                <h3>{nextObj.name}</h3>
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
  hr {
    transform: rotate(90deg);
    width: 75%;
  }
`;

const LinkAltered = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const AlteredLink = styled(LinkAltered)`
  flex-direction: row-reverse;
`;

const Next = styled.div`
  margin-right: 2rem;
  h3 {
    text-align: right;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
  }
`;

const Prev = styled(Next)`
  margin: 0rem 0rem 0rem 2rem;
  h3 {
    text-align: left;
  }
`;

export default ProjectDetail;
