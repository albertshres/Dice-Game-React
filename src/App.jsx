import React, { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
};
export default App;
