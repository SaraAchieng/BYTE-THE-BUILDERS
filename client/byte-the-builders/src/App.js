// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'; // The Home component will include all new features
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'; // Keep your styles

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={<ProtectedRoute component={Home} />}
            />
            <Route path="/" element={<Navigate to="/login" />} /> {/* Default route */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
