import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import InputForm from "../InputForm/InputForm";
import GuessContainer from "../GuessContainer/GuessContainer";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(0);

  const handleSubmit = (guess) => {
    const result = checkGuess(guess, answer);
    const nextGuesses = [...guesses, result];
    setGuesses(nextGuesses);

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(-1);
      return;
    }
    if (guess === answer) {
      setGameStatus(1);
    }
  };

  return (
    <>
      <GuessContainer guesses={guesses} />
      <InputForm
        disabled={gameStatus === 1 || gameStatus === -1}
        handleSubmit={handleSubmit}
      />
      {gameStatus === 1 && <WonBanner numGuesses={guesses.length} />}
      {gameStatus === -1 && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
