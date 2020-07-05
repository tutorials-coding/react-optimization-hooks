import React, { createContext } from 'react'

export const TodoContext = createContext()
export const TodoDispatchContext = createContext()

export const TodoProvider = ({ children, state, dispatch }) => (
  <TodoContext.Provider value={state}>
    <TodoDispatchContext.Provider value={dispatch}>
      {children}
    </TodoDispatchContext.Provider>
  </TodoContext.Provider>
)
