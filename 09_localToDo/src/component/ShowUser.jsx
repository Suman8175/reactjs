import React from 'react'
import { useSelector } from 'react-redux'

function ShowUser() {
    const user = useSelector((state) => state.auth.user);
    return (
        <>
            <h1>{user && user.userName ? user.userName : "No data"}  </h1>
            <h2>{user && user.password ? user.password : "No password"}</h2>
        </>
    )
}

export default ShowUser