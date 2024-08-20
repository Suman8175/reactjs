import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../feature/todo/todoSlice'
import authReducer from '../feature/auth/authSlice'


export const store=configureStore({
    reducer:{
        auth:authReducer,
        todo:todoReducer
    }
})