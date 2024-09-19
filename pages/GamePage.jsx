import React from 'react'
import { useState } from 'react'

function Game() {

  const [number, setNumber] = useState(0);

  function increase(){
    setNumber(number+1);
  }
  
  function decrease(){
    setNumber(number-1);
  }

  return (
    <div>
      <div>NUMBER GAMMMEEEEEE</div>
      <div>Second header hereee!!!!</div>
      <div>{number}</div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <div><a href="/gambling">Go to gamling page</a></div>
    </div>
  )
}

export default Game