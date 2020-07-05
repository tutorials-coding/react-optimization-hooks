import React, { useContext } from 'react'

import { TodoItem } from './TodoItem'
import { TodoContext } from '../../state'

export function TodoItemContainer({ item }) {
  const { dispatchTodo } = useContext(TodoContext)

  const editTodoItemText = (value) => {
    dispatchTodo({ type: 'updateText', payload: { id: item.id, text: value } })
  }

  const toggleItemCheck = () => {
    dispatchTodo({
      type: 'updateIsComplete',
      payload: {
        id: item.id,
        isComplete: !item.isComplete,
      },
    })
  }

  const deleteItem = () => {
    dispatchTodo({ type: 'delete', payload: { id: item.id } })
  }

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
