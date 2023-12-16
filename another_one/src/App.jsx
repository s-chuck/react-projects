import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
  const [todos, setTodos] = useState();
  const [images, setImage] = useState();
  useEffect(() => {
    axios.get("https://catfact.ninja/fact")
      .then((res) => setTodos(res.data));
  }, [])
  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/images/search")
      .then((res) => setImage(res.data[0].url));
  }, [])
  return (
    <>
      <div className='flex flex-col items-center'>
        <img src={images ? (images) : (<p>Wait a sec...</p>)} className='h-64 w-64 rounded' />
        <ul className=''>
          {todos ? (
            <div>
              {todos.fact}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>

    </>
  );
};

export default App
