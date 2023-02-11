import React from "react";

function GuessResults({guessList}) {
  console.log(guessList)
  return (
    <div className="guess-results">
      {
        guessList.map((guess) => <p key={guess.id}>{guess.word}</p>)
      }
    </div>
  );
}

export default GuessResults;
