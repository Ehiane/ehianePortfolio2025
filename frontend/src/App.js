import React, { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <Router>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;