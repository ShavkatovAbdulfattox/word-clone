import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from './../GuessInput/Guess';
import GuessResult from '../GuessResults/GuessResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });

function Game() {
  const [guess, setGuess] = useState("")
  const [result, setResult] = useState([])
  const [gameStatus, setGameStatus] = useState("running")
  const [count, setCount] = useState(0)

  const addToList = () => {
    const nextGuess = [...result, guess]
    setResult(nextGuess)
    setCount(count + 1)
    if (answer === guess.toUpperCase()) {
      setGameStatus("won")
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }

  }
  return <>
    <GuessResult result={result} answer={answer} gameStatus={gameStatus} count={count} />
    <Guess guess={guess} setGuess={setGuess} addToList={addToList} status={gameStatus} />


  </>;
}

export default Game;
