import React from "react";

function Banner({status, guessCount, answer}) {


  const bannerText = status === 'happy'
  ?
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong> {guessCount === 1 ? '1 guess': `${guessCount} guesses`}</strong>.
  </p>
  :
  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>

  return (
    <div className={`${status} banner`}>
      {bannerText}
    </div>
  )
}

export default Banner;
