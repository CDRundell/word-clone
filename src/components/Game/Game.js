import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput  from '../GuessInput'
import GuessResults from '../GuessResults'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleGuess (guess) {
    const guessObject = {word: guess, id: crypto.randomUUID()}
    const newGuessList = [...guessList]
    newGuessList.push(guessObject)
    setGuessList(newGuessList)
  }

  return <>
          <GuessResults guessList={guessList}/>
          <GuessInput handleGuess={handleGuess} />
        </>;
}

export default Game;
