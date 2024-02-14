1. let's Start with what is this application?
-> so in simple language i wanna test or try how this useContext hook works and how to use it in our application. Now i have completed this im gonna make this understand to everyone.

First create a storage where all your data is to be stored which is to be used across all the children without the need of prop drilling.

<!-- import React, { createContext, useState } from 'react';
here we have used createContext() to make the storage 
const RandomContext = createContext(null);
export default RandomContext;

the contextProvider is used to tell which of the components can access this data using the RandomContext.Provider .
export const ContextProvider = (props) => {
    const [count,setCount] = useState(0);
    return (
        <>
        
            <RandomContext.Provider value={{count,setCount}}>
                {props.children}
            </RandomContext.Provider>
        </>
    );
} -->


How to access those things in our components.
<!-- import {useContext} from 'react';
import RandomContext from '../context/random';
const data = useContext(RandomContext); -->

this is how we can use this to make changes in the data that is passed as values.
<!-- export default function() {
    const data = useContext(RandomContext);
    
    return (
        <>
            
            <button onClick={() => data.setCount(data.count+1)}>Increase</button>
            <button onClick={() => data.setCount(data.count-1)}>Decrease</button>
        </>
    );
} -->
