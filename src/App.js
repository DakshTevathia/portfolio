import './index.css';
import Home from './Routes/Home';
import Project from './Routes/Projects/Project';
import Contact from './Routes/Contact/Contact';
import About from './Routes/About/About';
import { Route, Routes } from 'react-router-dom';
import Resume from './Routes/Resume/Resume';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
