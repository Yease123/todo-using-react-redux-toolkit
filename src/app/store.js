import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSclice"
const store=configureStore({
reducer:todoReducer
})
export default store