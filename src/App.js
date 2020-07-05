import React, { useReducer } from 'react'

import { Home, Counter } from './screens'
import { TodoProvider, todoReducer } from './state'

export default function App() {
  const [todoState, dispatchTodo] = useReducer(todoReducer, [
    {
      id: '1',
      text: 'Learn React',
    },
    {
      id: '2',
      text: 'Learn hooks',
    },
  ])

  return (
    <>
      {/* <TodoProvider state={todoState} dispatch={dispatchTodo}>
        <Home />
      </TodoProvider> */}
      <Counter />
    </>
  )
}
