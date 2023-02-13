import React from "react";

function GuessInput({handleGuess, disabled}) {
  const [wordGuess, setWordGuess] = React.useState("");

  function handleSubmit (event) {
    event.preventDefault()
    wordGuess.length === 5 && handleGuess(wordGuess)
    setWordGuess("")
  }

  return (
    <form className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input"
        type="text"
        value={wordGuess}
        required
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          const word = event.target.value
          setWordGuess(word.toUpperCase())
        }}
        disabled={disabled}
      />
    </form>
  )
}

export default GuessInput;
