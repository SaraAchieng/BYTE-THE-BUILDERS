// import React, { useState, useEffect } from 'react';

// function Clients() {
//   const [clients, setClients] = useState([]);
//   const [newClient, setNewClient] = useState('');
//   const [editClient, setEditClient] = useState(null);

//   useEffect(() => {
//     fetch('/api/clients')
//       .then((res) => res.json())
//       .then((data) => setClients(data));
//   }, []);

//   function addClient() {
//     const client = { name: newClient };
//     fetch('/api/clients', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(client),
//     }).then((res) => res.json()).then((newClient) => {
//       setClients([...clients, newClient]);
//       setNewClient('');
//     });
//   }

//   function deleteClient(id) {
//     fetch(/api/clients/${id}, { method: 'DELETE' }).then(() => {
//       setClients(clients.filter((client) => client.id !== id));
//     });
//   }

//   function updateClient(id) {
//     const updatedClient = { name: editClient };
//     fetch(/api/clients/${id}, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedClient),
//     }).then((res) => res.json()).then((updated) => {
//       setClients(clients.map((client) => (client.id === id ? updated : client)));
//       setEditClient(null);
//     });
//   }

//   return (
//     <div>
//       <h2>Clients</h2>
//       <ul>
//         {clients.map((client) => (
//           <li key={client.id}>
//             {editClient === client.id ? (
//               <input
//                 type="text"
//                 value={editClient.name}
//                 onChange={(e) => setEditClient(e.target.value)}
//               />
//             ) : (
//               <span>{client.name}</span>
//             )}
//             <button className="edit" onClick={() => updateClient(client.id)}>Edit</button>
//             <button className="delete" onClick={() => deleteClient(client.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newClient}
//         onChange={(e) => setNewClient(e.target.value)}
//       />
//       <button onClick={addClient}>Add Client</button>
//     </div>
//   );
// }

// export default Clients;

// src/Clients.js
// src/Clients.js
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
    // Implement update logic here
  }

  return (
    <div>
      <h2>Clients</h2>
      <input type="text" name="name" value={clientData.name} onChange={handleChange} placeholder="Client Name" />
      <input type="text" name="id" value={clientData.id} onChange={handleChange} placeholder="Client ID" />
      <input type="text" name="companyName" value={clientData.companyName} onChange={handleChange} placeholder="Company Name" />
      <input type="email" name="email" value={clientData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="phone" value={clientData.phone} onChange={handleChange} placeholder="Phone Number" />
      <button onClick={addClient}>Add Client</button>
      
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            {client.name} - {client.companyName}
            <button onClick={() => deleteClient(client.id)}>Delete</button>
            <button onClick={() => updateClient(client.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;