import { createSlice, current } from '@reduxjs/toolkit'
import { todos } from './data'
const initialState = { todos }
const todosData = createSlice({
  name: 'todosAction',
  initialState: initialState,
  reducers: {
    add(state, actions) {
      state.todos.push({ task: actions.payload, cheked: false })
    },
    del(state, actions) {
      state.todos = state.todos.filter((item, index) => {
        return item.id !== actions.payload
      })
    },
    edit(state, actions) {
      state.todos = state.todos.map((item, index) =>
        item.id === actions.payload ? { ...item, task: actions.payload } : item
      )
    },
    cheked(state, actions) {
      state.todos = state.todos.map((item, index) =>
        item.id === actions.payload ? { ...item, cheked: !item.cheked } : item
      )
      //
    },
  },
})

export default todosData.reducer
export const { add, del, edit, cheked } = todosData.actions
