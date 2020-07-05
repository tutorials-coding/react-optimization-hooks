import React, { useMemo, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { v4 as uuid } from 'uuid'

import './Counter.css'

function checkIsPrime(n) {
  console.log('n', n)
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return n > 1
}

function IsPrimeChecker({ num }) {
  const isPrime = useMemo(() => checkIsPrime(num), [num])
  // const isPrime = checkIsPrime(num) // compare with it
  return <span>{`${num} is ${isPrime ? 'prime' : 'not prime'}`}</span>
}

export function Counter() {
  const [counter, setCounter] = useState(0)
  const [guid, setGuid] = useState(uuid())

  function generateGuid() {
    setGuid(uuid())
  }

  return (
    <div className="counter__main-container">
      <span className="counter__counter-value">Counter 1 Value: {counter}</span>
      <div className="counter__prime-checker-container">
        <IsPrimeChecker num={counter} />
      </div>
      <div className="d-flex flex-column counter__buttons-container">
        <Button
          variant="primary"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          Increment
        </Button>
        <Button
          variant="primary"
          onClick={() => setCounter((prev) => prev - 1)}
        >
          Decrement
        </Button>
        <Button variant="primary" onClick={generateGuid}>
          {guid}
        </Button>
      </div>
    </div>
  )
}
