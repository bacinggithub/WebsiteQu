import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
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
    fontSize: 14,
    marginBottom: "0.2em",
    textAlign: "center",
    fontWeight: "bold",
  },
}));
export default function Form2() {
  const classes = useStyles();
  const user = React.useContext(UserContext);
  return (
    <React.Fragment>
      <form className={classes.root}>
        <div>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            onChange={() => user.setPilihan({ kelabu: false, fee: 5900 })}
          />
          <Typography className={classes.overline}>
            Sand as Dropshipper
          </Typography>
          <input
            disabled={user.pilihan.kelabu}
            type="text"
            required
            content="✖"
            id="DropshipperName"
            placeholder="Dropshipper Name"
          />
          <span className="validity"></span>
          <input
            disabled={user.pilihan.kelabu}
            required
            content="✖"
            pattern="[0-9, +--, `,` ]{6,20}"
            maxLength="20"
            minLength="6"
            type="text"
            id="DropshipperPhoneNumber"
            placeholder="Dropshipper Phone Number"
          />
          <span className="validity"></span>
        </div>
      </form>
      <style jsx>{`
        input {
          padding: 10px;
          line-height: 1.5;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 90%;
          margin-top: 10px;
        }
        label,
        input {
          font-size: 0.8rem;
          letter-spacing: 1px;
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
