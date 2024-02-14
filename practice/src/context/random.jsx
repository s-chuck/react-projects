
import React, { createContext, useState } from 'react';

const RandomContext = createContext(null);
export default RandomContext;


export const ContextProvider = (props) => {
    const [count,setCount] = useState(0);
    return (
        <>
        
            <RandomContext.Provider value={{count,setCount}}>
                {props.children}
            </RandomContext.Provider>
        </>
    );
}