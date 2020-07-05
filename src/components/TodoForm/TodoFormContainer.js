import React, { useCallback, memo, useContext } from 'react'

import { TodoForm } from './TodoForm'
import { TodoContext } from '../../state'

function TodoFormContainerInner() {
  const { dispatchTodo } = useContext(TodoContext)

  const handleSubmit = useCallback(
    (text) => {
      dispatchTodo({ type: 'add', payload: { text } })
    },
    [dispatchTodo]
  )

  return <TodoForm onSubmit={handleSubmit} />
}
TodoFormContainerInner.whyDidYouRender = true

export const TodoFormContainer = memo(TodoFormContainerInner)
