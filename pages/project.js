import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Stepone from "../src/stepone";
import Steptwo from "../src/steptwo";
import Stepthree from "../src/stepthree";
import Steporder from "../src/steporder";
import { UserProvider } from "../src/usecontext/usecontext";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "../src/link";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  rootstep: {
    flexGrow: 1,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  buton: {
    color: "#9e9e9e",
    letterSpacing: "2px",
    fontSize: 14,
    marginTop: 12,
  },
}));
function getSteps() {
  return ["Delivery", "Payment", "Finish"];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Stepone />;
    case 1:
      return <Steptwo />;
    case 2:
      return <Stepthree />;
    default:
      return "Unknown step";
  }
}
export default function Project() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <UserProvider>
      <div className={classes.root}>
        <Container className={classes.main} maxWidth="xl">
          <Grid container>
            <Grid item xs={12} sm={8}>
              <div>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                          <div>
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleNext}
                              className={classes.button}
                            >
                              {activeStep === steps.length - 1
                                ? "Finish"
                                : "Next"}
                            </Button>
                          </div>
                        </div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper
                    square
                    elevation={0}
                    className={classes.resetContainer}
                  >
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      naked
                      href="/"
                    >
                      Reset
                    </Button>
                  </Paper>
                )}
              </div>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.gridorder}>
              <Steporder />
            </Grid>
          </Grid>
        </Container>
      </div>
    </UserProvider>
  );
}
