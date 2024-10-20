
// import React, { useState } from 'react';

// function Employees() {
//   const [employees, setEmployees] = useState([]);
//   const [employeeData, setEmployeeData] = useState({
//     id: '',
//     name: '',
//     role: '',
//     email: '',
//     phone: '',
//     hire_date: '',
//     salary: '',
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setEmployeeData({ ...employeeData, [name]: value });
//   }

//   function addEmployee() {
//     setEmployees([...employees, employeeData]);
//     setEmployeeData({ id: '', name: '', role: '', email: '', phone: '', hire_date: '', salary: '' });
//   }

//   function deleteEmployee(id) {
//     setEmployees(employees.filter(employee => employee.id !== id));
//   }

//   function updateEmployee(id) {
//     // Implement update logic here
//   }

//   return (
//     <div>
//       <h2>Employees</h2>
//       <input type="text" name="id" value={employeeData.id} onChange={handleChange} placeholder="ID" />
//       <input type="text" name="name" value={employeeData.name} onChange={handleChange} placeholder="Name" />
//       <input type="text" name="role" value={employeeData.role} onChange={handleChange} placeholder="Role" />
//       <input type="email" name="email" value={employeeData.email} onChange={handleChange} placeholder="Email" />
//       <input type="text" name="phone" value={employeeData.phone} onChange={handleChange} placeholder="Phone Number" />
//       <input type="date" name="hire_date" value={employeeData.hire_date} onChange={handleChange} placeholder="Hire Date" />
//       <input type="number" name="salary" value={employeeData.salary} onChange={handleChange} placeholder="Salary" />
//       <button onClick={addEmployee}>Add Employee</button>
      
//       <ul>
//         {employees.map(employee => (
//           <li key={employee.id}>
//              <strong>Name:</strong> {employee.name} <br />
//             <strong>ID:</strong> {employee.id} <br />
//             <strong>Role:</strong> {employee.role} <br />
//             <strong>Email:</strong> {employee.email} <br />
//             <strong>Phone:</strong> {employee.phone} <br />
//             <strong>Salary:</strong> {employee.salary} <br />
//             <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
//             <button onClick={() => updateEmployee(employee.id)}>Update</button>
//           </li>
//         ))}
//       </ul>

    
//     </div>
//   );
// }

// export default Employees;

import React, { useState } from 'react';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [employeeData, setEmployeeData] = useState({
    id: '',
    first_name: '',
    last_name:'',
    role: '',
    email: '',
    phone: '',
    hire_date: '',
    salary: '',
  });
  const [isUpdating, setIsUpdating] = useState(false); // Track if update mode is on
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null); // Track the employee being updated

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  }

  // Add a new employee
  function addEmployee() {
    setEmployees([...employees, employeeData]);
    setEmployeeData({ id: '', first_name: '', last_name: '', role: '', email: '', phone: '', hire_date: '', salary: '' });
  }

  // Delete an employee
  function deleteEmployee(id) {
    setEmployees(employees.filter(employee => employee.id !== id));
  }

  // Prepare to update an employee
  function updateEmployee(id) {
    const employee = employees.find(employee => employee.id === id);
    setEmployeeData(employee); // Pre-fill the form with the employee's data
    setIsUpdating(true); // Enable update mode
    setCurrentEmployeeId(id); // Set the employee being updated
  }

  // Handle the update process
  function handleUpdate() {
    setEmployees(employees.map(employee =>
      employee.id === currentEmployeeId ? { ...employee, ...employeeData } : employee
    ));
    setIsUpdating(false); // Exit update mode
    setEmployeeData({  id: '', first_name: '', last_name: '', role: '', email: '', phone: '', hire_date: '', salary: '' }); // Clear form
  }

  return (
    <div>
      {/* Form for adding or updating employees */}
      <h2>{isUpdating ? "Update Employee" : "Add Employee"}</h2>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={employeeData.id}
        onChange={handleChange}
        disabled={isUpdating} // ID should not be changed while updating
      />
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={employeeData.first_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={employeeData.last_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={employeeData.role}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employeeData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={employeeData.phone}
        onChange={handleChange}
      />
      <input
        type="date"
        name="hire_date"
        placeholder="Hire Date"
        value={employeeData.hire_date}
        onChange={handleChange}
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={employeeData.salary}
        onChange={handleChange}
      />

      {/* Conditionally render the 'Add' or 'OK' button */}
      {isUpdating ? (
        <button onClick={handleUpdate}>OK</button> // OK button for updating
      ) : (
        <button onClick={addEmployee}>Add Employee</button> // Add Employee button
      )}

      {/* List of employees */}
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <strong>First Name:</strong> {employee.first_name} <br />
            <strong>Last Name:</strong> {employee.last_name} <br />
            <strong>Role:</strong> {employee.role} <br />
            <strong>Email:</strong> {employee.email} <br />
            <strong>Phone:</strong> {employee.phone} <br />
            <strong>Hire Date:</strong> {employee.hire_date} <br />
            <strong>Salary:</strong> {employee.salary} <br />
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            <button onClick={() => updateEmployee(employee.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
