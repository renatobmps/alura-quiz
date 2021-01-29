
import React, {useState} from 'react';
import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner';
import Head from 'next/head';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const [theme, setTheme] = useState('#2a327d');
  const [icon, setIcon] = useState('/assets/icon-rd.png');
  const [background, setBackground] = useState(db.bg);
  const handleTheme = () => {
    if(theme != 'black'){
      setTheme('black');
      setIcon('/assets/icon-tr.png');
      setBackground('https://images4.alphacoders.com/977/977093.jpg');
    }else{
      setTheme('#2a327d');
      setIcon('/assets/icon-rd.png');
      setBackground(db.bg);
    }
  }
  return (
    <QuizBackground backgroundImage={background}>
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
        <meta name="theme-color" content={theme} />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <QuizContainer>
        <button onClick={handleTheme}>Theme</button>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/renatobmps" />
    </QuizBackground>
  );
}