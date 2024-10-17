
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
  