import React from 'react'

function Guess({ guess, setGuess, addToList, status }) {
    return (
        <form className="guess-input-wrapper" onSubmit={(e) => {
            e.preventDefault()
            setGuess("")
            addToList()
        }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" value={guess} required
                disabled={status === "won" || status === "lost"}
                minLength={5}
                maxLength={5}
                pattern='[a-zA-Z]{5}'
                onChange={(e) => {
                    setGuess(e.target.value.toUpperCase())
                }} />
        </form>
    )
}

export default Guess