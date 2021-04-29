import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {},
  boxes: {
    marginTop: "4rem",
    marginBottom: "4rem",

    justifyContent: "space-between",
    "@media (max-width: 992px)": {
      marginTop: "2rem",
    },
  },
  box: {
    //border: "2px solid yellow",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  button: {
    marginTop: "2rem",
    padding: ".75rem 2rem",
    borderRadius: ".1rem",
    background: "rgb(51, 50, 61)",
    color: "#fff",
    fontFamily: "Public Sans",
    boxShadow: "none",
    "@media (max-width: 992px)": {
      marginTop: "2rem",
    },
  },
}));

const SendEmail = () => {
  const classes = useStyles();
  return (
    <Contact>
      <Grid container className={classes.boxes}>
        <div className="line"></div>
        <Grid item className={classes.box} sm={12} md={4}>
          <h2>Contact Me</h2>
        </Grid>
        <Grid item className={classes.box} sm={12} md={6}>
          <form className={classes.form}>
            {/* 1. Name */}
            <TextField
              required
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
            />
            {/* 2. Email Address */}
            <TextField
              required
              id="outlined-basic"
              label="Email"
              type="email"
              className="email"
              autoComplete="email"
              name="email"
              variant="outlined"
            />
            {/* 3. Message */}
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              multiline
              name="message"
              rows={4}
              variant="outlined"
            />
            <Button variant="contained" className={classes.button}>
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
    </Contact>
  );
};

// Styled Components
const Contact = styled.div`
  h2 {
    text-align: left;
    @media (max-width: 992px) {
      margin-bottom: 3rem;
    }
  }
  .email {
    margin: 2rem 0;
  }
  button {
    &:hover {
      border: 1px solid rgb(51, 50, 61);
      background: transparent;
      color: rgb(51, 50, 61);
    }
  }
  .line {
    margin-bottom: 3rem;
  }
`;

export default SendEmail;
