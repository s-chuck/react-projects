import './App.css'
import { useState, useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeContext, ThemeProvider } from './context/Theme'

function App() {
  const [themeMode, setThemeMode]  = useState('light')
  //method gets called when we want to implement lightTheme
  const lightTheme = () => {
    setThemeMode('light')
  }
  //method gets called when we want to implement dark.
  const darkTheme = () => {
    setThemeMode('dark')
  }

  //Now the actual change in theme using basic javascript.
  useEffect(()=> {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  } , [themeMode])


  return (
    <ThemeProvider value = {{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* {theme button} */}
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* {card button} */}
          <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
    

  )
}
export default App
