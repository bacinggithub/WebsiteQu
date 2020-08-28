import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Router from "next/router";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      marginLeft: theme.spacing(3),
    },
  },
}));
export default function SosialMedia() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton>
        <EmailIcon color="secondary" />
      </IconButton>
      <IconButton
        href="https://www.facebook.com/ibrahim.baim.58910"
        target="_blank"
      >
        <FacebookIcon color="secondary" />
      </IconButton>
      <IconButton href="https://twitter.com/Bacing88" target="_blank">
        <TwitterIcon color="secondary" />
      </IconButton>
      <IconButton href="https://www.instagram.com/bacing_88/" target="_blank">
        <InstagramIcon color="secondary" />
      </IconButton>
      <IconButton href="https://github.com/bacinggithub" target="_blank">
        <GitHubIcon color="secondary" />
      </IconButton>
    </div>
  );
}
