import React from "react";

function Guess({wordArray}) {

  return <p className="guess">
          {wordArray.map(letter => <span className="cell">{letter}</span>)}
        </p>;
}

export default Guess;
