import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../usecontext/usecontext";
const useStyles = makeStyles((theme) => ({
  overline: {
    display: "block",
    textAlign: "center",
    color: "#9e9e9e",
    letterSpacing: "2px",
    fontSize: 14,
    marginTop: 12,
  },
  heading: {
    textAlign: "center",
    fontSize: 32,
    lineHeight: 2,
    fontWeight: "bold",
    fontFamily:
      // eslint-disable-next-line max-len
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    marginBottom: "0.72em",
    "&:after": {
      content: '""',
      width: 24,
      height: 2,
      backgroundColor: "#ddd",
      display: "block",
      margin: "8px auto",
      borderRadius: 2,
    },
  },
  body: {
    textAlign: "center",
    fontSize: 14,
    color: "#222",
    lineHeight: 1.75,
    width: "88%",
    margin: "0 auto",
  },
}));
export default function Form5() {
  const classes = useStyles();
  const user = React.useContext(UserContext);
  return (
    <React.Fragment>
      <div className={classes.body}></div>
      <Typography className={classes.heading} color="primery">
        Thank You
      </Typography>
      <Typography className={classes.overline}>Order Id :3</Typography>
      <Typography className={classes.overline}>
        Your order will be delivery {user.gojek.message}
      </Typography>
    </React.Fragment>
  );
}
