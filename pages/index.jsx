import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

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

const BtnTheme = styled.button`
  max-width: 4em;
  max-height: 4em;
  display: flex;
  overflow: hidden;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding: .5em;
  transition: .3s;
  margin: 1em auto;
  &:focus{
    outline: none;
  }
  &:hover img {
    transform: scale(1.2);
    transition: .3s;
  }
  @media (max-width: 500px){
    position: fixed !important;
    bottom: 1em;
    right: 1em;
  }
`;

const ImgTheme = styled.img`
  width: 100%;
  transition: .3s;
`;

const Description = styled.p`
  font-weight: 900 !important;
  text-shadow: 1px 1px black;
`;

const Input = styled.input`
  width: 100%;
  padding: 1em;
`;

const Submit = styled.a`
  padding: .5em 1em;
  background: ${db.theme.colors.contrastText};
  width: 100%;
  margin: 1em 0;
  border-radius: ${db.theme.borderRadius};
  text-decoration: none;
  display: block;
  width: fit-content;
`;

export default function Home({ setIcon, theme, setTheme }) {
  const [iconButton, setIconButton] = useState('gray');
  const [background, setBackground] = useState(db.bg);
  const [user, setUser] = useState('');
  const handleTheme = () => {
    if (theme !== 'black') {
      setTheme('black');
      setIcon('/assets/icon-tr.png');
      setIconButton('red');
      setBackground('https://images4.alphacoders.com/977/977093.jpg');
    } else {
      setTheme('#2a327d');
      setIcon('/assets/icon-rd.png');
      setIconButton('gray');
      setBackground(db.bg);
    }
  };
  return (
    <QuizBackground backgroundImage={background}>
      <QuizContainer>
        <BtnTheme style={{ background: iconButton }} onClick={handleTheme}>
          <ImgTheme src="/assets/icon-tr.png" alt="Mudar tema" />
        </BtnTheme>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <Description>{db.description}</Description>
            <form onSubmit={(e) => {
              e.preventDefault();
            }}
            >
              <Input
                type="text"
                placeholder="Seu nome?"
                title="Entre com o seu nome para o score"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
              <Submit href={`quiz?n=${user}`} type="submit">{`Jogar como: ${user}`}</Submit>
            </form>
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
