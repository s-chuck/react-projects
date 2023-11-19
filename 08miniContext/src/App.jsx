import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'


function App() {
  return (
    // The login and profile component are the children of UserContextProvider and so it can access the value of user and setUser through this but still we have to use usecontext() and explicitly import UserContext.js to change or modify the values of user and setUser
    <UserContextProvider>
      <h1>Project</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    
  )
}

export default App
