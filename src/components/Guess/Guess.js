import React from "react";

import { checkGuess } from '../../game-helpers'

function Guess({word, answer}) {
  const checkedWord = checkGuess(word, answer)

  return <p className="guess">
          {checkedWord.map((item, index) => <span className={`cell ${item.status}`} key={index}>{item.letter}</span>)}
        </p>
}

export default Guess;
