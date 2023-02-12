import React from "react";

function EmptyGuess({stringArray}) {
  return <p className="guess">
    {stringArray.map((letter, index) => <span className="cell" key={index}>{letter}</span>)}
  </p>
}

export default EmptyGuess;
