import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";

const InputForm = ({ handleSubmit, disabled }) => {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      autoComplete="off"
      onSubmit={(event) => {
        event.preventDefault();

        handleSubmit(guess);
        setGuess("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter your guess:</label>
      <input
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        disabled={disabled}
        autoComplete="off"
        required
        minLength={NUM_OF_LETTERS_ALLOWED}
        maxLength={NUM_OF_LETTERS_ALLOWED}
        pattern="[A-Za-z]{5}"
        title="Guess should be 5 letters"
        id="guess-input"
        type="text"
      />
    </form>
  );
};

export default InputForm;
