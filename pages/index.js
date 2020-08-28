import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SosialMedia from "../src/sosialmed";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundImage: `url(${"static/images/Background.jpeg"})`,
  },
  main: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  footer: {
    padding: theme.spacing(3, 2),
    background: "rgba(76, 175, 80, 0)",
  },
  button: {
    marginTop: theme.spacing(5),
    width: "250px",
  },
  textheader: {
    marginTop: "70px",
  },
  textbatas: {
    maxWidth: "250px",
    color: "#e8e4e1",
  },
  medsos: {
    justifyContent: "flex-end",
  },
}));
const handleEmail = () => {
  window.location.href = "mailto:bacing88@gmail.com";
};
export default function StickyFooter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.main} maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          className={classes.textheader}
        >
          Hello.. My Name is
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"IBRAHIM"}
          <br />
          {"UI/UX Designer Website"}
        </Typography>
        <Typography variant="body1" className={classes.textbatas}>
          "there are three responses to a piece of design - yes, no and WOW! Wow
          is one to i am for"
          <br />
          <br />
          MILTON GLASER
        </Typography>
        <Typography variant="body1" color="secondary">
          || Next Js || React Js || Material UI ||
        </Typography>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          className={classes.button}
          startIcon={<MailOutlineIcon />}
          onClick={handleEmail}
        >
          Email
        </Button>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                Websitequ Copyright © 2020
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} className={classes.medsos}>
              <Box display="flex" justifyContent="flex-end">
                <SosialMedia />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}
