import React, { useState, useContext } from 'react'
// everywhere we are importing UserContext.js file why's that? so let me give you the answer because the UserContext file creates a special container to store and share certain information across different parts in our application. But the actual container that we are going to store all the information is UserContextProvider.jsx this component wraps it's children with UserContext.Provider that makes the content available to anyone so that's why we import UserContext.js because at the end all the data is stored in this UserContext and the second file is like a actual container.
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //we use React.createContext() to create a container and we use this useContext hook to destructure or access the various stored values form this container.
    const { setUser } = useContext(UserContext)


    const handleSubmit = (e) => {
        // preventDefault is use to prevent the browser from doing the normal thing that it does and we can add customized instruction in it.We are doing this because whenever we submit the value goes somewhere using post method.
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
            {" "}
            <input type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login