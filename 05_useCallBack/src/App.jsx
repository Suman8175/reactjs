
import React, { useState } from 'react';
import Child from './Child';
import { useCallback } from 'react';

function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  }

  const incrementCounterTwo = useCallback( () => {
    setCounterTwo(counterTwo + 2);
  },[counterTwo])

  return (
    <>
    <button onClick={incrementCounterOne}>Increment</button>
    <button onClick={incrementCounterTwo}>Increment 2</button>
    <p>Counter One: {counterOne}</p>
    <p>Counter Two: {counterTwo}</p>
    <Child value={counterTwo} increment={incrementCounterTwo}/>
    </>
  )
}

export default  App
