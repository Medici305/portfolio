import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ContactMe = () => {
  const classes = useStyles();
  return (
    <StyledContact>
      {/* 1. Get in touch */}
      <Grid container>
        <Grid item>
          Slipping
        </Grid>
        <Grid item>
          Falling
        </Grid>
      </Grid>
      {/* 2. Contact me */}
    </StyledContact>
  );
};

// Styled Component
const StyledContact = styled.div`
  color: black;
`;

export default ContactMe;
