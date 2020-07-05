import React, { useReducer } from 'react'

import { Home } from './screens'
import { TodoContext, todoReducer } from './state'

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
      <TodoContext.Provider value={{ todoState, dispatchTodo }}>
        <Home />
      </TodoContext.Provider>
    </>
  )
}
