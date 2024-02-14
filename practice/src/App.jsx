import './App.css';
import Counter from './components/Counter.jsx'
import { useContext } from 'react';
import RandomContext from './context/random.jsx'
function App() {
  const Data = useContext(RandomContext);
  return (
    <>
      <h1>The value of Count is: {Data.count}</h1>
      <Counter />
      <Counter />
    </>
  );
};

export default App
