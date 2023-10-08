import React from 'react'
import ReactDOM from 'react-dom/client'
import Chai from './chai.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* here we are using a <> tag to wrap the whole thing so we can print it in browser if this tag would not be used then the app and chai one is gonna get printed but the h1 tag would not be able to print */}
    <>
    <h1>what's up guys</h1> 
    <App />
    <Chai />
    </>
  </React.StrictMode>,
)


// const element = React.createElement(
//   'tag',       // The type of element (e.g., 'div', 'h1', 'p')
//   {            // Props (optional)
//     prop1: value1,
//     prop2: value2,
//   },
//   'children'   // Child elements (optional)
// );

