import React, { useContext } from 'react'

import { TodoList } from './TodoList'
import { TodoContext } from '../../state'

export function TodoListContainer() {
  const { todoState } = useContext(TodoContext)

  return <TodoList items={todoState} />
}
