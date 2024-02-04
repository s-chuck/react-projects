import React from 'react'
import {Link} from 'react-router-dom'
export default function NotFound(){
    return (
        <>
            <h1>404 Error.</h1>
            <p>we don't have this shit.</p>
            <p>Go back to the home you fucker.</p>
            <Link to='/'>Home button.</Link>
        </>
    )
}