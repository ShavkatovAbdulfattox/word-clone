import React from 'react'

function Banner({ type = "lost", count, answer }) {

    const winnerText = <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{count} guesses</strong>.
    </p>

    const failText = <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    return (
        <div className={`${type === "won" ? "happy" : "sad"} banner`}>
            {type === "won" ? winnerText : failText}
        </div>
    )
}

export default Banner