import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

import Guess from "../Guess/Guess";

import { range } from "../../utils";

const GuessContainer = ({ guesses }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        return <Guess userGuess={guesses[index]} key={index} />;
      })}
    </div>
  );
};

export default GuessContainer;
