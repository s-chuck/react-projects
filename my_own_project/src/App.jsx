import { useState } from 'react'

function App() {
  const [binaryValue, setBinaryValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const handleInputChange = (e) => {
    //replace is used to replace a specific pattern with your specific replacement.
    // '/' the forward slashes are use to tell that our pattern is starting and ending.
    // '[]' square bracket defines a character class in a regular expression
    // '^' -> it has 3 uses at the very beginning of the string ^hello it means that whereever we are checking it should contain hello at the start. 2 ^ -> [^abc] anything except abc it is called negative inside square brackets. 3. -> hello(?!matt) want to find hello at a line only if matt is not being followed by hello.
    // 'g' it is used to tell our program that do this operation all the time or gloablly not just once.
    // at the end we are doin , '' if user try to enter anything other than 0,1 then return an empty string in the input bar.
    
    let input = e.target.value.replace(/[^01]/g, '');
    if(input.length > 8){
      input = input.slice(0,8);
    }
    setBinaryValue(input);
  };
  const handleSubmit = () => {
    console.log("Binary Value: ", binaryValue);
    let decimalValue = parseInt(binaryValue, 2);
    setConvertedValue(decimalValue);
  };
  return (
    <>
      <div className='flex flex-col h-screen items-center justify-center bg-cover bg-center'style={{ backgroundImage: 'url("../pic.jpg")' }}>
        <label htmlFor="binaryInput" className='text-xl bg-blue-600 p-4 rounded-xl'>Enter a binary number (up to 8 digits):</label>
        <input
          type="text"
          id="binaryInput"
          name="binaryInput"
          placeholder="Enter binary no. here..."
          value={binaryValue}
          onChange={handleInputChange}
          className='border-red-600 my-4 rounded-xl p-2'
        />
        <button onClick={handleSubmit} className='text-xl bg-green-600 p-2 rounded-xl'>Convert</button>
        <h1 className='my-4 bg-green-200 p-4 rounded-xl'>The converted decimal value is : {convertedValue}</h1>
        
      </div>
    </>
  )
}

export default App


