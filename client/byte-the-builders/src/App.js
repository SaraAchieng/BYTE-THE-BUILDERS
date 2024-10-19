// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import Clients from './components/Clients';
// import Employees from './components/Employees';
// import Equipment from './components/Equipment';
// import Materials from './components/Materials';

// function App() {
//   return (
//     <div>
//       <h1>Construction Management</h1>
//       <Clients />
//       <Employees />
//       <Equipment />
//       <Materials />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Clients from './components/Clients';
// import Employees from './components/Employees';
// import Equipment from './components/Equipment';
// import Materials from './components/Materials';
// import './App.css';  // Import the CSS file

// function App() {
//   return (
//     <div className="container">
//       <h1>Construction Management</h1>
//       <div className="section">
//         <Clients />
//       </div>
//       <div className="section">
//         <Employees />
//       </div>
//       <div className="section">
//         <Equipment />
//       </div>
//       <div className="section">
//         <Materials />
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js
// src/App.js
// src/App.js
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


