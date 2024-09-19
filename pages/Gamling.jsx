import React from 'react'
import {guessNumber } from '../src/number'
import { useState } from 'react'

function Gamling() {

    const [result, setResult] = useState("");

    function handleChange(e){
        const guess = e.target.value;
        guessNumber(guess) === true ? setResult(<div>Correct, Good Guess tho!</div>) : setResult(<div>Wrong, again. Last Guess!</div>)
    }

  return (
    <div>
        <input type="text" onChange={handleChange}/>
        <div>Result: {result}</div>
    </div>
  )
}

export default Gamling