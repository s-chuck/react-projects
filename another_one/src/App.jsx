import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'; // Fix the import statement
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [fact, setFact] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  useEffect(() => {
    axios.get("https://catfact.ninja/fact")
      .then((res) => setFact(res.data));
  }, []);

  return (
    <>
      <button onClick={handleClick}>About page..</button>
      <p>{fact}</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Link to='/about'>About</Link>
    </>
  );
}

export default App;
