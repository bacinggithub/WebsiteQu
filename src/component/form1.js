import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LimitedTextarea from "./textarea";
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
}));
export default function Form1() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography className={classes.overline}>Delivery detail</Typography>
      <form className={classes.overline}>
        <div>
          <label>Email</label>
          <input
            id="outlineddor"
            label="Email"
            type="email"
            placeholder="Typing here ..."
            required
            content="✖"
          />
          <span className="validity"></span>
          <label>Phone Number</label>
          <input
            id="numberPhone"
            label="Phone Number"
            placeholder="Typing here ..."
            required
            content="✖"
            pattern="[0-9, +--, `,` ]{6,20}"
            maxLength="20"
            minLength="6"
            type="text"
          />
          <span className="validity"></span>
          <label>Adrress</label>
          <LimitedTextarea limit={120} value="Typing here ..." />
        </div>
      </form>
      <style jsx>{`
        label,
        input {
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        label,
        textarea {
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        textarea {
          padding: 10px;
          line-height: 1.5;
          border-radius: 5px;
          border: 1px solid #ccc;
          box-shadow: 1px 1px 1px #999;
        }
        input {
          padding: 10px;
          line-height: 1.5;
          border-radius: 5px;
          border: 1px solid #ccc;
          box-shadow: 1px 1px 1px #999;
          width: 80%;
        }
        label {
          display: block;
          margin-top: 10px;
          padding-left: 10px;
        }
        input:invalid + span:after {
          content: "✖";
          padding-left: 5px;
          color: orange;
        }
        input:valid + span:after {
          content: "✓";
          padding-left: 5px;
          color: green;
        }
      `}</style>
    </React.Fragment>
  );
}
