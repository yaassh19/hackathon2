import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from '../Login';
import { AppBar, Typography } from '@mui/material';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <AppBar><Typography>hii</Typography></AppBar>
          <Routes>
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
