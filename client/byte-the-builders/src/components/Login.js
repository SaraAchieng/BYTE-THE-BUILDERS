
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
    };

    return (
        <div className="login-container">
          <h2>Login to ConstructionCo</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      );
    };
    
    export default Login;
    
  