import type { AppProps } from "next/app";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { coniTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={coniTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
