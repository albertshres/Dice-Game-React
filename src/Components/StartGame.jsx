import React from "react";
import styled from "styled-components";
import Button from "../style/Button";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="images/dices.png" alt="dice image" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 1180px;
  display: flex;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
