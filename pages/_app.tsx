import type { AppProps } from "next/app";
import i18n from "i18next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { coniTheme } from "../themes";
import ContextProvider from "../context/ContextProvider";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // the translations
    // TODO: IMPOR THEM FROM A JSON FILE
    resources: {
      en: {
        translation: {
          Language: "Language",
          title: "Kindergarden educator",
        },
      },
      es: {
        translation: {
          Language: "Idioma",
          title: "Educadora de parvulos",
        },
      },
    },
    detection: {
      order: [],
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  }); // passes i18n down to react-i18next

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={coniTheme}>
      <ContextProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
