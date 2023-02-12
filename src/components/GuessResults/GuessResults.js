import React from "react";
import Guess from "../Guess"
import EmptyGuess from "../EmptyGuess"

import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessResults({guessList, answer}) {
  const grid = range(0, NUM_OF_GUESSES_ALLOWED)

  return (
    <div className="guess-results">
      {grid.map((item, index) => {
        return (
          guessList[index]
          ?
          <Guess word={guessList[index].word} key={guessList[index].id} answer={answer} /> : <EmptyGuess stringArray={Array(5).fill("")} key={crypto.randomUUID()} />
        )
      })}
    </div>
  );
}

export default GuessResults;
