import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { UserContext } from "../usecontext/usecontext";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "50px",
    marginBottom: "50px",
  },
  overline: {
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: 18,
    marginBottom: "0.2em",
    fontWeight: "bold",
    textAlign: "left",
  },
  content: {
    fontSize: 14,
    marginBottom: "1em",
    textAlign: "left",
  },
  contentgreen: {
    fontSize: 14,
    marginBottom: "1em",
    textAlign: "left",
    color: "#79d70f",
  },
  content2: {
    fontSize: 14,
    marginBottom: "0.2em",
    textAlign: "left",
  },
  content3: {
    fontSize: 14,
    marginBottom: "0.2em",
    textAlign: "right",
    fontWeight: "bold",
  },
  button: {
    backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
    boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
    borderRadius: 100,
    paddingLeft: 24,
    paddingRight: 24,
    color: "#ffffff",
  },
  greenButton: {
    backgroundColor: "#fd9a02",
    color: "#FFF",
    fontSize: 18,
    width: "100%",
    "&:hover": {
      backgroundColor: "#ff7622",
      color: "#FF0",
    },
  },
});
export default function Form3() {
  const classes = useStyles();
  const user = React.useContext(UserContext);
  return (
    <div className={classes.body}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <Typography className={classes.overline}>Summary</Typography>
            <Typography className={classes.content}>
              10 item purchased
            </Typography>
            <Typography className={classes.overline}>
              Delivery Estimation
            </Typography>
            <Typography className={classes.contentgreen}>
              {user.gojek.message}
            </Typography>
            <Typography className={classes.overline}>Payment Method</Typography>
            <Typography className={classes.contentgreen}>
              {user.payment}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0}>
            <Typography className={classes.content2}>Cast of Goods</Typography>
            <Typography className={classes.content2}>
              Dropshipping Fee
            </Typography>
            <Typography className={classes.content2}>
              {user.gojek.jasa} Shipment
            </Typography>
            <Typography className={classes.content2}>Total</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0}>
            <Typography className={classes.content3}>500000</Typography>
            <Typography className={classes.content3}>
              {user.pilihan.fee}
            </Typography>
            <Typography className={classes.content3}>
              {user.gojek.rp}
            </Typography>
            <Typography className={classes.content3}>
              {500000 + user.gojek.rp + user.pilihan.fee}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <Button className={classes.greenButton}>
              Pay with {user.payment}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
