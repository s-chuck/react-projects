import React from 'react'
import {Link} from 'react-router-dom'
export default function Signup() {
    return (
        <>
            <h1 style={{ backgroundColor: 'green' }}>hey folks you are in singup page</h1>
            <Link to='/'>Go back to the home page.</Link>
        </>
    )
}