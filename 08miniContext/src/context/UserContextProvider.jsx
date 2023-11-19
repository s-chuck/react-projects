import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
    // "user" is a piece of data that represents the user, initially set to null.
    // "setUser" is a function that allows us to update the "user" data.
    const [user, setUser] = React.useState(null);
  
    // The UserContext.Provider is like a box that holds our "user" and "setUser" values.
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {/* 
          "children" here are the components that are wrapped by UserContextProvider.
          They will have access to the "user" and "setUser" values.
        */}
        {children}
      </UserContext.Provider>
    );
  };
  

export default UserContextProvider;