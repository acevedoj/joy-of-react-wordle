import React from "react";
import { range } from "../../utils";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";

const Guess = ({ userGuess }) => {
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_ALLOWED).map((_, index) => {
        return (
          <span
            key={index}
            className={`cell ${userGuess ? userGuess[index].status : ""}`}
          >
            {userGuess ? userGuess[index].letter : ""}
          </span>
        );
      })}
    </p>
  );
};

export default Guess;
