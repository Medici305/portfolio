import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
//import { makeStyles } from "@material-ui/core/styles";
//import LinearProgress from "@material-ui/core/LinearProgress";
import ScrollTop from "../components/ScrollTop";
//import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import CircularProgress from "@material-ui/core/CircularProgress";

//const useStyles = makeStyles((theme) => ({}));

const Blog = () => {
  //const classes = useStyles();
  return (
    <StyleBlog
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <FontAwesomeIcon className="icon" size="3x" icon={faTools} />
      <h1>Page Under Construction</h1>
      <CircularProgress />
    </StyleBlog>
  );
};

// styled components
const StyleBlog = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    margin: 1rem 0 2rem 0;
  }
`;

export default Blog;
