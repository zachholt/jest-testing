'use client'

import { useEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }

  function decreaseCounter() {
    //if (count > 0) {
        setCount(count - 1);
    //}
  }

  useEffect(() => {
    console.log(`Count value is: ${count}`);
  }, [count]);

  return (
    <>
    <h1>  
        {count}
      </h1>
      <button onClick={increaseCounter}>
        Increase
      </button>
      <button onClick={decreaseCounter}>
        Decrease
      </button>
    </>
  );
}