import { v4 as uuid } from 'uuid'

export function todoReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { text } = action.payload
      return [
        ...state,
        {
          id: uuid(),
          text,
          isComplete: false,
        },
      ]
    }
    case 'delete': {
      const { id } = action.payload
      return state.filter((todo) => todo.id !== id)
    }
    case 'updateText': {
      const { id, text } = action.payload
      return state.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    }
    case 'updateIsComplete': {
      const { id, isComplete } = action.payload
      return state.map((todo) =>
        todo.id === id ? { ...todo, isComplete } : todo
      )
    }
    default:
      throw new Error('Unknown action')
  }
}
