// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import theme from './theme'; // Import the theme
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Destinations from './pages/Destinations';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Box
          sx={{
            display: 'flex',
            height: 'auto',
            flexDirection: 'column',
          }}
        >

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/destinations" element={<Destinations />} />
            </Routes>

          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
