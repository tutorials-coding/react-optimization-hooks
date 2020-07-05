import React, { useCallback, memo, useContext, useEffect } from 'react'

import { TodoForm } from './TodoForm'
import { TodoDispatchContext } from '../../state'

function TodoFormContainerInner() {
  useEffect(() => {
    console.log('TodoFormContainerInner rendered')
  })

  const dispatchTodo = useContext(TodoDispatchContext)

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
