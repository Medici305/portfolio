import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const useStyles = makeStyles((theme) => ({
  boxes: {
    marginTop: "4rem",
    marginBottom: "4rem",

    justifyContent: "space-between",
    "@media (max-width: 992px)": {
      marginTop: "2rem",
    },
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
  // State
  const [confirm, setConfirm] = useState(false);
  // Function

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eemftn6",
        "template_5gzyhrk",
        e.target,
        "user_Moi9wBEPsiw7ryv4JpuOm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setConfirm(!confirm);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    // setTimeout(() => {
    //   refreshPage();
    // }, 3000);
  }

  return (
    <Contact>
      <Grid container className={classes.boxes}>
        <div className="line"></div>
        <Grid item className={classes.box} xs={12} sm={12} md={4}>
          <h2>Contact Me</h2>
        </Grid>
        <Grid item className={classes.box} xs={12} sm={12} md={6}>
          <form onSubmit={sendEmail} className={classes.form}>
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
            {confirm && (
              <div className="confirmation">
                <p>Message sent successfully</p>
                <FontAwesomeIcon className="icon" icon={faThumbsUp} />
              </div>
            )}
            <Button
              variant="contained"
              type="submit"
              className={classes.button}
            >
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
  .confirmation {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.5rem;
      color: rgb(51, 50, 61);
    }
  }
`;

export default SendEmail;
