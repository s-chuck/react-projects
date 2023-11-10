import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); // Changed setnumberAllowed to setNumberAllowed
  const [charAllowed, setCharAllowed] = useState(false); // Changed setcharAllowed to setCharAllowed
  const [password, setPassword] = useState('');
  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '!@#$%^&*{}[]()~`';
    }

    for (let i = 1; i <= length; i++) { // Changed 'array.length' to 'length'
      let char = Math.floor(Math.random() * str.length); // Removed '+ 1'
      pass += str.charAt(char); // Append the character to the password
    }
    setPassword(pass); // Corrected the state update

  }, [length, numberAllowed, charAllowed, setPassword]); // Removed 'setpassword' from the dependencies

  const copyPasswordToClipboard = useCallback(() => {
    //The value in useRef can be accessed by .current and here we are saying if there are any values present in here select() it.
    passwordRef.current?.select();
    //This one method named setSelectionRange is used to select the text only in teh given range.
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  } , [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md text-orange-500 bg-gray-700 mx-auto shadow-md rounded-lg px-4 my-8">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            //ref is used to make this input field a reference so it can be accessed through passwordRef variable.
            //we can also use ref in many other cases for ex <p ref={passwordRef}> hello </p> so it is a js property.
            ref = {passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-gray-500'>copy</button>
        </div>
        <div className="flex txt-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) =>
                  !prev);
              }}
            />
            <label htmlFor='numberInput'> Number</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) =>
                  !prev);
              }}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
