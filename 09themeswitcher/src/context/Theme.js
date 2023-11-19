import React, {createContext, useContext} from 'react'

//creating a container with default values 
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})
//defining the container it also defines what goes into the container and make it available to the entire application.
export const ThemeProvider = ThemeContext.Provider


//creating a custom hook which extracts the values from the container ThemeContext.
export default function useTheme(){
    return useContext(ThemeContext)
}