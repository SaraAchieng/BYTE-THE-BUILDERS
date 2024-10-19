
import React, { useState } from 'react';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [employeeData, setEmployeeData] = useState({
    id: '',
    name: '',
    role: '',
    email: '',
    phone: '',
    hire_date: '',
    salary: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  }

  function addEmployee() {
    setEmployees([...employees, employeeData]);
    setEmployeeData({ id: '', name: '', role: '', email: '', phone: '', hire_date: '', salary: '' });
  }

  function deleteEmployee(id) {
    setEmployees(employees.filter(employee => employee.id !== id));
  }

  function updateEmployee(id) {
    // Implement update logic here
  }

  return (
    <div>
      <h2>Employees</h2>
      <input type="text" name="id" value={employeeData.id} onChange={handleChange} placeholder="ID" />
      <input type="text" name="name" value={employeeData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="role" value={employeeData.role} onChange={handleChange} placeholder="Role" />
      <input type="email" name="email" value={employeeData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="phone" value={employeeData.phone} onChange={handleChange} placeholder="Phone Number" />
      <input type="date" name="hire_date" value={employeeData.hire_date} onChange={handleChange} placeholder="Hire Date" />
      <input type="number" name="salary" value={employeeData.salary} onChange={handleChange} placeholder="Salary" />
      <button onClick={addEmployee}>Add Employee</button>
      
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.role}
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            <button onClick={() => updateEmployee(employee.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
