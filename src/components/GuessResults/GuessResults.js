import React from "react";
import { range } from "../../utils"
import Guess from "../Guess"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"


function GuessResults({guessList}) {
  const grid = range(0, NUM_OF_GUESSES_ALLOWED)

  return (
    <div className="guess-results">
      {grid.map((item, index) => {
        return (
          guessList[index]
          ?
          <Guess wordArray={guessList[index].word.split("")} key={guessList[index].id} /> : <Guess wordArray={Array(5).fill("")} key={crypto.randomUUID()} />
        )
      })}
    </div>
  );
}

export default GuessResults;
