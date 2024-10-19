// import React, { useState, useEffect } from 'react';

// function Employees() {
//   const [employees, setEmployees] = useState([]);
//   const [newEmployee, setNewEmployee] = useState('');
//   const [editEmployee, setEditEmployee] = useState(null);

//   useEffect(() => {
//     fetch('/api/employees')
//       .then((res) => res.json())
//       .then((data) => setEmployees(data));
//   }, []);

//   function addEmployee() {
//     const employee = { name: newEmployee };
//     fetch('/api/employees', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(employee),
//     })
//       .then((res) => res.json())
//       .then((newEmployee) => {
//         setEmployees([...employees, newEmployee]);
//         setNewEmployee('');
//       });
//   }

//   function deleteEmployee(id) {
//     fetch(`/api/employees/${id}`, { method: 'DELETE' })
//       .then(() => setEmployees(employees.filter((e) => e.id !== id)));
//   }

//   function updateEmployee(id) {
//     const updatedEmployee = { name: editEmployee };
//     fetch(`/api/employees/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedEmployee),
//     })
//       .then((res) => res.json())
//       .then((updated) => {
//         setEmployees(employees.map((e) => (e.id === id ? updated : e)));
//         setEditEmployee(null);
//       });
//   }

//   return (
//     <div>
//       <h2>Employees</h2>
//       <ul>
//         {employees.map((employee) => (
//           <li key={employee.id}>
//             {editEmployee === employee.id ? (
//               <input
//                 type="text"
//                 value={editEmployee.name}
//                 onChange={(e) => setEditEmployee(e.target.value)}
//               />
//             ) : (
//               <span>{employee.name}</span>
//             )}
//             <button className="edit" onClick={() => updateEmployee(employee.id)}>Edit</button>
//             <button className="delete" onClick={() => deleteEmployee(employee.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newEmployee}
//         onChange={(e) => setNewEmployee(e.target.value)}
//       />
//       <button onClick={addEmployee}>Add Employee</button>
//     </div>
//   );
// }

// export default Employees;

// src/Employees.js
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
