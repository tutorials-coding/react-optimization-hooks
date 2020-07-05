import React, { memo, useContext } from 'react'

import { TodoList } from './TodoList'
import { TodoContext } from '../../state'

function TodoListContainerInner() {
  const todoState = useContext(TodoContext)

  return <TodoList items={todoState} />
}

export const TodoListContainer = memo(TodoListContainerInner)
