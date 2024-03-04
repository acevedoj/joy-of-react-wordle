import React from "react";
import Banner from "../Banner/Banner";

const WonBanner = ({ numGuesses }) => {
  return (
    <Banner status="happy">
      <p>Congratulations!</p>
      <p>
        You won the game in{" "}
        {numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}!
      </p>
    </Banner>
  );
};

export default WonBanner;
