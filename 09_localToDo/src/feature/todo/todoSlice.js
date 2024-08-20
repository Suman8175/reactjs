import { createSlice } from '@reduxjs/toolkit'

const initialState={
    todos:[
        {
            id:1,
            title:'Title1'
        }
        ]
}



export const todoSlice=createSlice({
    name:'todoNew',
    initialState,
    reducers:{
        addToDo:(state,action)=>{
            const todo={
                id:Date.now(),
                title:action.payload
            }
            state.todos.push(todo);
        },
        removeToDo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
            //simple remove logic where state.todos is override by taking all values except the one in which id matches
        },
        updateToDo:(state,action)=>{
            //perform logic here match id and if match change its title to action.payload
        }
    }
})


export const {addToDo,removeToDo,updateToDo}=todoSlice.actions

export default todoSlice.reducer 