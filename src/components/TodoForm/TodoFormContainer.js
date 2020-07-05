import React, { useContext } from 'react'

import { TodoForm } from './TodoForm'
import { TodoContext } from '../../state'

export function TodoFormContainer() {
  const { dispatchTodo } = useContext(TodoContext)

  function handleSubmit(text) {
    dispatchTodo({ type: 'add', payload: { text } })
  }

  return <TodoForm onSubmit={handleSubmit} />
}
