import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todosData from '../redusers/reduser'
const rootReduser = combineReducers({
  todosData,
})
export const store = configureStore({
  reducer: rootReduser,
})
