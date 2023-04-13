import React, { useState } from 'react'
import { range } from '../../utils'
import { checkGuess } from './../../game-helpers';
import Banner from '../Banner/Banner';


function Cell({ letter, status }) {
  return <span className={`cell ${status ?? ""}`}>{letter}</span>
}


function GuessCell({ result, answer }) {

  const res = checkGuess(result, answer)

  return (
    <>
      <p className="guess">
        {range(5).map((num) => {
          return <Cell key={num} letter={res ? res[num].letter : undefined} status={res ? res[num].status : undefined}></Cell>
        })}
      </p>
    </>
  )


}

export default GuessCell