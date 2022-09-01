import { createTheme } from "@mui/material/styles";

export const coniTheme = createTheme({
  palette: {
    primary: {
      main: "#f6c3a7",
    },
    secondary: {
      main: "#8fc4c8",
    },
    info: {
      main: "#fff",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: "fixed",
      },
      styleOverrides: {
        root: {
          backgroundColor: "white",
          height: 60,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600,
        },
        h2: {
          fontSize: 20,
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "small",
        disableElevation: false,
        // color: "info",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: 10,
          color: "white",
          ":hover": {
            backgroundColor: "rgba(143,196,200,1)",
            color: "#f6c3a7",
            transition: "all 0.3s ease-in-out",
          },
        },
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "0px 5px 5px rgba(0,0,0,0.05)",
          borderRadius: "10px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        inputProps: {
          borderColor: "#8fc4c8",
        },
      },
      styleOverrides: {
        root: {
          borderColor: "#8fc4c8",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          color: "#f6c3a7",
          bgcolor: "#f6c3a7",
        },
      },
    },
  },
});
