<<<<<<< HEAD
// src/Header.js
=======

>>>>>>> 7196ae9b1c6382f4d376aa8d341231c3ac15b725
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/clients">Clients</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/materials">Materials</Link>
        <Link to="/equipment">Equipment</Link>
      </nav>
    </header>
  );
};

export default Header;
