import { useState } from 'react';
import './App.css';
import { FaFacebook } from 'react-icons/fa';
import { Link, Routes, Route } from 'react-router-dom';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

      
  return (
    <div className='outer'>
      <div className='inner'>
        <h2 className='heading'>Instagram</h2>
        <input
          id="username"
          type="text"
          placeholder='Phone number, username, or email'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <button className='btn'>Login</button>
        <p style={{ margin: '19px 37px', color: '#ccc', }}>-----------------------OR-----------------------</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="link">
          <FaFacebook size={18} color="#1877f2" className='icon' style={{ marginRight: '8px' }} />
          Login with Facebook
        </a>

        <a href="/" style={{ color: 'black', margin: '10px 40px 0 129px' }}>forgot password?</a>
      </div>

      {/* Routes should be wrapped around your content */}

      <div className='second-div'>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default App;
