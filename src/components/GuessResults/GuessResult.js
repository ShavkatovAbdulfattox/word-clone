import React from 'react'
import GuessCell from '../GuessCell/GuessCell'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from './../../constants';
import Banner from '../Banner/Banner';

function GuessResult({ result, answer, gameStatus, count }) {

    console.log(gameStatus);
    return (
        <>
            <div className="guess-results">
                {range(NUM_OF_GUESSES_ALLOWED).map((num, i) => {
                    return <GuessCell key={num} result={result[num]} answer={answer} />
                })}

            </div >
            {
                gameStatus === "won" ? <Banner type={gameStatus} count={count} /> : gameStatus === "lost" ? <Banner type={gameStatus} count={count} answer={answer} /> : undefined
            }

        </>
    )
}

export default GuessResult