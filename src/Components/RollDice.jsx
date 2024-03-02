import React from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice">
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
          onClick={roleDice}
        />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
