import React, { useCallback, memo, useContext } from 'react'

import { TodoItem } from './TodoItem'
import { TodoDispatchContext } from '../../state'

function TodoItemContainerInner({ item }) {
  const dispatchTodo = useContext(TodoDispatchContext)

  const editTodoItemText = useCallback(
    (value) => {
      dispatchTodo({
        type: 'updateText',
        payload: { id: item.id, text: value },
      })
    },
    [item, dispatchTodo]
  )

  const toggleItemCheck = useCallback(() => {
    dispatchTodo({
      type: 'updateIsComplete',
      payload: {
        id: item.id,
        isComplete: !item.isComplete,
      },
    })
  }, [item, dispatchTodo])

  const deleteItem = useCallback(() => {
    dispatchTodo({
      type: 'delete',
      payload: {
        id: item.id,
      },
    })
  }, [item, dispatchTodo])

  return (
    <TodoItem
      text={item.text}
      isComplete={item.isComplete}
      onToggleCheck={toggleItemCheck}
      onDeleteClick={deleteItem}
      onTextUpdate={editTodoItemText}
    />
  )
}

export const TodoItemContainer = memo(TodoItemContainerInner)
