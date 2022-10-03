import Document, { Html, Head, Main, NextScript } from "next/document";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

const MyDocument = () => {
  const { selectedLanguage } = useContext(Context);

  let locale;
  useEffect(() => {
    locale = selectedLanguage;
  }, [selectedLanguage]);

  return (
    <Html lang={locale}>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
