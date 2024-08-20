import React from 'react'
import { useSelector } from 'react-redux'

function ListTask() {
    const user = useSelector((state) => state.todo.todos);
    return (
        <div>
            <ul>
                {user.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListTask