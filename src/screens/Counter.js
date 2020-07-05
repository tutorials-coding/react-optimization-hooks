import React, { useReducer } from 'react'
import Button from 'react-bootstrap/Button'

import './Counter.css'

function initState(initialCount) {
  return {
    count: initialCount,
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initState(action.payload)
    default:
      throw new Error('Unknown action')
  }
}

export function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, initState)
  // or useReducer(reducer, { count: initialCount })

  function increment() {
    dispatch({ type: 'increment' })
  }

  function decrement() {
    dispatch({ type: 'decrement' })
  }

  function reset() {
    dispatch({ type: 'reset', payload: initialCount })
  }

  return (
    <div className="counter__main-container">
      <span className="counter__counter-value">{state.count}</span>
      <div className="d-flex flex-column counter__buttons-container">
        <Button variant="primary" onClick={increment}>
          Increment
        </Button>
        <Button variant="primary" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="primary" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  )
}
