
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Clients from './components/Clients';
import Employees from './components/Employees';
import Materials from './components/Materials';
import Equipment from './components/Equipment';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Clients</Link>
          <Link to="/employees">Employees</Link>
          <Link to="/materials">Materials</Link>
          <Link to="/equipment">Equipment</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/equipment" element={<Equipment />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;


