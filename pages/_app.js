import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  const [icon, setIcon] = React.useState('/assets/icon-rd.png');
  const [themeSet, setTheme] = React.useState('#2a327d');
  return (
    <>
      <Head>
        <title>Spiderman | Alura Quiz</title>
        <meta name="title" content="Spiderman | Alura Quiz" />
        <meta name="description" content="Quiz feito com muito carinho durante a Imersão React+Nextjs da Alura. Apresentado pelo incrível time: Mario Souto, Juliana Amoasei e Paulo Silveira." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spiderman-quiz.renatobmps.vercel.app/" />
        <meta property="og:title" content="Spiderman | Alura Quiz" />
        <meta property="og:description" content="Quiz feito com muito carinho durante a Imersão React+Nextjs da Alura. Apresentado pelo incrível time: Mario Souto, Juliana Amoasei e Paulo Silveira." />
        <meta property="og:image" content="/assets/icon-rd.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://spiderman-quiz.renatobmps.vercel.app/" />
        <meta property="twitter:title" content="Spiderman | Alura Quiz" />
        <meta property="twitter:description" content="Quiz feito com muito carinho durante a Imersão React+Nextjs da Alura. Apresentado pelo incrível time: Mario Souto, Juliana Amoasei e Paulo Silveira." />
        <meta property="twitter:image" content="/assets/icon-rd.png" />
        <link rel="icon" href={icon} />
        <meta name="theme-color" content={themeSet} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component
          setIcon={setIcon}
          theme={themeSet}
          setTheme={setTheme}
          {...pageProps}
        />
      </ThemeProvider>
    </>
  );
}
