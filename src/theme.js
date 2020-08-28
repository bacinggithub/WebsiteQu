import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: {
      paper: "rgba(246, 234, 234, 0.1)",
      default: "rgba(246, 234, 234, 1)",
    },
    primary: {
      light: "rgba(234, 98, 39, 0.81)",
      main: "rgba(234, 98, 39, 1)",
      dark: "rgba(211, 116, 74, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(61, 199, 90, 1)",
      main: "rgba(26, 165, 56, 1)",
      dark: "rgba(20, 131, 44, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(234, 98, 39, 1)",
      secondary: "rgba(65, 4, 4, 0.54)",
      disabled: "rgba(158, 16, 16, 0.38)",
      hint: "rgba(59, 51, 51, 0.38)",
    },
  },
});
export default theme;
