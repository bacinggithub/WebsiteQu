import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { UserContext } from "../usecontext/usecontext";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  overline: {
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: 18,
    marginBottom: "0.2em",
    fontWeight: "bold",
    textAlign: "left",
  },
  overline1: {
    fontSize: 18,
    marginBottom: "2em",
    fontWeight: "bold",
    textAlign: "left",
  },
}));
export default function Form4() {
  const classes = useStyles();
  const user = useContext(UserContext);
  return (
    <React.Fragment>
      <Typography className={classes.overline}>Shipment</Typography>
      <div className={classes.overline1}>
        <Button
          className={classes.button}
          color="secondary"
          variant="outlined"
          onClick={() =>
            user.setGojek({
              message: "today by GO-SEND",
              jasa: "GO-SEND",
              rp: 15000,
            })
          }
        >
          Go Send
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() =>
            user.setGojek({ message: "2 days by JNE", jasa: "JNE", rp: 9000 })
          }
        >
          JNE
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() =>
            user.setGojek({
              message: "1 days by Personal",
              jasa: "Personal",
              rp: 29000,
            })
          }
        >
          Personal Courier
        </Button>
      </div>
      <Typography className={classes.overline}>Payment</Typography>
      <div className={classes.overline1}>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => user.setPayment("E_Walet")}
        >
          E_Walet
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => user.setPayment("Bank Transfer")}
        >
          Bank Transfer
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => user.setPayment("Virtual Account")}
        >
          Virtual Account
        </Button>
      </div>
    </React.Fragment>
  );
}
