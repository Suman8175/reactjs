import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../feature/auth/authSlice'

function LoginUser() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const save = (e) => {
        e.preventDefault()
        dispatch(setUser({ userName, password }))
    }
    return (
        <>
            <input type="text" name="userName" id="uName" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            <input type="password" name="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <button type="button" className='bg-blue-400 border border-gray-700' onClick={save} >Save</button>
        </>
    )
}

export default LoginUser