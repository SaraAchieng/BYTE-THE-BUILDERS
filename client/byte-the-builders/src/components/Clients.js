// import React, { useState } from 'react';

// function Clients() {
//   const [clients, setClients] = useState([]);
//   const [clientData, setClientData] = useState({
//     name: '',
//     id: '',
//     companyName: '',
//     email: '',
//     phone: '',
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setClientData({ ...clientData, [name]: value });
//   }

//   function addClient() {
//     setClients([...clients, clientData]);
//     setClientData({ name: '', id: '', companyName: '', email: '', phone: '' });
//   }

//   function deleteClient(id) {
//     setClients(clients.filter(client => client.id !== id));
//   }

//   function updateClient(id) {
//     // Implement update logic here
//   }

//   return (
//     <div>
//       <h2>Clients</h2>
//       <input type="text" name="name" value={clientData.name} onChange={handleChange} placeholder="Client Name" />
//       <input type="text" name="id" value={clientData.id} onChange={handleChange} placeholder="Client ID" />
//       <input type="text" name="companyName" value={clientData.companyName} onChange={handleChange} placeholder="Company Name" />
//       <input type="email" name="email" value={clientData.email} onChange={handleChange} placeholder="Email" />
//       <input type="text" name="phone" value={clientData.phone} onChange={handleChange} placeholder="Phone Number" />
//       <button onClick={addClient}>Add Client</button>
      
//       <ul>
//   {clients.map(client => (
//     <li key={client.id}>
//       <strong>Name:</strong> {client.name} <br />
//       <strong>ID:</strong> {client.id} <br />
//       <strong>Company:</strong> {client.companyName} <br />
//       <strong>Email:</strong> {client.email} <br />
//       <strong>Phone:</strong> {client.phone} <br />
//       <button onClick={() => deleteClient(client.id)}>Delete</button>
//       <button onClick={() => updateClient(client.id)}>Update</button>
//     </li>
//   ))}
// </ul>

//     </div>
//   );
// }

// export default Clients;
import React, { useState } from 'react';

function Clients() {
  const [clients, setClients] = useState([]);
  const [clientData, setClientData] = useState({
    name: '',
    id: '',
    companyName: '',
    email: '',
    phone: '',
  });
  const [isUpdating, setIsUpdating] = useState(false); // Track if update mode is on
  const [currentClientId, setCurrentClientId] = useState(null); // Track the client being updated

  function handleChange(e) {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  }

  function addClient() {
    setClients([...clients, clientData]);
    setClientData({ name: '', id: '', companyName: '', email: '', phone: '' });
  }

  function deleteClient(id) {
    setClients(clients.filter(client => client.id !== id));
  }

  function updateClient(id) {
    const client = clients.find(client => client.id === id);
    setClientData(client); // Pre-fill the form with the client's data
    setIsUpdating(true); // Enable update mode
    setCurrentClientId(id); // Set the client being updated
  }

  function handleUpdate() {
    setClients(clients.map(client =>
      client.id === currentClientId ? { ...client, ...clientData } : client
    ));
    setIsUpdating(false); // Turn off update mode
    setClientData({ name: '', id: '', companyName: '', email: '', phone: '' }); // Clear form
  }

  return (
    <div>
      {/* Form for adding or updating clients */}
      <h2>{isUpdating ? "Update Client" : "Add Client"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={clientData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={clientData.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={clientData.companyName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={clientData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={clientData.phone}
        onChange={handleChange}
      />
      
      {/* Conditionally render the 'Add' or 'OK' button */}
      {isUpdating ? (
        <button onClick={handleUpdate}>OK</button> // OK button for updating
      ) : (
        <button onClick={addClient}>Add Client</button> // Add Client button
      )}

      {/* List of clients */}
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <strong>Name:</strong> {client.name} <br />
            <strong>ID:</strong> {client.id} <br />
            <strong>Company:</strong> {client.companyName} <br />
            <strong>Email:</strong> {client.email} <br />
            <strong>Phone:</strong> {client.phone} <br />
            <button onClick={() => deleteClient(client.id)}>Delete</button>
            <button onClick={() => updateClient(client.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;
