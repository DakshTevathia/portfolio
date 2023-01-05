import react from 'react';
import './index.css';
import Home from './Routes/Home';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import About from './Routes/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
