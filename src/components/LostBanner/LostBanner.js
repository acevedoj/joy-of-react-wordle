import React from "react";
import Banner from "../Banner/Banner";

const LostBanner = ({ answer }) => {
  return (
    <Banner status="sad">
      <p>You lost!</p>
      <p>The answer was {answer}</p>
    </Banner>
  );
};

export default LostBanner;
