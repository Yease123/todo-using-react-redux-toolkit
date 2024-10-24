import { createSlice, nanoid } from "@reduxjs/toolkit";
const loadtods=()=>
{
    const savedTodos = localStorage.getItem("todos");
  
    return savedTodos ? JSON.parse(savedTodos) : [];
}
const initialState = {
    todos: loadtods(),


}

const todoSclice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description,
                completed: false

            }
            
            state.todos.push(todo)
            const alltodos=JSON.stringify(state.todos)
            localStorage.setItem("todos",alltodos)
            
           
        },
        completedtodo: (state, action) => {
            const item = state.todos.find(todo => todo.id === action.payload)

            if (item) {
                item.completed = !item.completed
            }

        },
        edittodo: (state, action) => {
            const item = state.todos.find(todo => todo.id === action.payload.editid)
            if (item) {
                console.log(action.payload.des)
                item.description = action.payload.des
            }
            const alltodos=JSON.stringify(state.todos)
            localStorage.setItem("todos",alltodos)
        },
        deletetodo:(state,action)=>
        {
const items=state.todos.filter(item=>item.id!==action.payload.id)
if(items)
{
    state.todos=items
}
const alltodos=JSON.stringify(state.todos)
            localStorage.setItem("todos",alltodos)
}



    }
})
export const { addtodo, completedtodo, edittodo,deletetodo } = todoSclice.actions
export default todoSclice.reducer