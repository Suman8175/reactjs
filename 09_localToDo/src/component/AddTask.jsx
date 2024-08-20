import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addToDo} from '../feature/todo/todoSlice'
function AddTask() {

    const [title,setTitle]=useState('')
    const dispatch=useDispatch();
    const save = (e) => {
        e.preventDefault() 
        dispatch(addToDo(title))
    }

    return (
        <>
        <input type="text" name="title" id="title"  onChange={(e)=>{setTitle(e.target.value)}} />
        <button type="button" className='bg-blue-400 border border-gray-700' onClick={save} >Save</button>
        </>
    )
}

export default AddTask