import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import NotFound from './components/NotFound.jsx';
import Shared  from './components/Shared.jsx';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Shared />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
}

export default App;
