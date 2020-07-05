import React, { memo } from 'react'

import './TodoList.css'
import { TodoItemContainer } from '../TodoItem'

function TodoListInner({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="todo-list__item-container">
          <TodoItemContainer item={item} />
        </div>
      ))}
    </div>
  )
}

export const TodoList = memo(TodoListInner)
