import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increaseNumber = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const decreaseNumber = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

  return (
    <>
        <h3>Count: {count}</h3>
        <button onClick={increaseNumber}>Increase</button><br/>
        <button onClick={decreaseNumber}>Decrease</button><br/>
    </>
  )
}

export default Counter