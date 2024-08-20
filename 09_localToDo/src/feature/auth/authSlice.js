import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isAuth: false
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuth = true
        },
        logout: (state, action) => {
            state.user = null
            state.isAuth = false
        }
    }
})


export const {setUser,logout}=authSlice.actions

export default authSlice.reducer 