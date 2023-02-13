import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput  from '../GuessInput'
import GuessResults from '../GuessResults'
import Banner from '../Banner'
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"



// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [win, setWin] = React.useState()


  function handleGuess (guess) {
    const guessObject = {word: guess, id: crypto.randomUUID()}
    const newGuessList = [...guessList]
    newGuessList.push(guessObject)
    setGuessList(newGuessList)

    newGuessList.length === NUM_OF_GUESSES_ALLOWED && setWin("lose")
    guess === answer && setWin("win")
  }

  return <>
          <GuessResults guessList={guessList} answer={answer}/>
          <GuessInput handleGuess={handleGuess} disabled={win}/>
          {win && <Banner status={win === "win" ? "happy" : "sad"} answer={answer} guessCount={guessList.length} />}
        </>;
}

export default Game;
