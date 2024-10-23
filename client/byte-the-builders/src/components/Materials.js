<<<<<<< HEAD
// import React, { useState, useEffect } from 'react';

// function Materials() {
//   const [materials, setMaterials] = useState([]);
//   const [newMaterial, setNewMaterial] = useState('');
//   const [editMaterial, setEditMaterial] = useState(null);

//   useEffect(() => {
//     fetch('/api/materials')
//       .then((res) => res.json())
//       .then((data) => setMaterials(data));
//   }, []);

//   function addMaterial() {
//     const material = { name: newMaterial };
//     fetch('/api/materials', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(material),
//     })
//       .then((res) => res.json())
//       .then((newMat) => {
//         setMaterials([...materials, newMat]);
//         setNewMaterial('');
//       });
//   }

//   function deleteMaterial(id) {
//     fetch(`/api/materials/${id}`, { method: 'DELETE' })
//       .then(() => setMaterials(materials.filter((m) => m.id !== id)));
//   }

//   function updateMaterial(id) {
//     const updatedMaterial = { name: editMaterial };
//     fetch(`/api/materials/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedMaterial),
//     })
//       .then((res) => res.json())
//       .then((updated) => {
//         setMaterials(materials.map((m) => (m.id === id ? updated : m)));
//         setEditMaterial(null);
//       });
//   }

//   return (
//     <div>
//       <h2>Materials</h2>
//       <ul>
//         {materials.map((material) => (
//           <li key={material.id}>
//             {editMaterial === material.id ? (
//               <input
//                 type="text"
//                 value={editMaterial.name}
//                 onChange={(e) => setEditMaterial(e.target.value)}
//               />
//             ) : (
//               <span>{material.name}</span>
//             )}
//             <button className="edit" onClick={() => updateMaterial(material.id)}>Edit</button>
//             <button className="delete" onClick={() => deleteMaterial(material.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newMaterial}
//         onChange={(e) => setNewMaterial(e.target.value)}
//       />
//       <button onClick={addMaterial}>Add Material</button>
//     </div>
//   );
// }

// export default Materials;


// src/Materials.js
import React, { useState } from 'react';
=======


import React, { useState, useEffect } from 'react';
>>>>>>> 7196ae9b1c6382f4d376aa8d341231c3ac15b725

function Materials() {
  const [materials, setMaterials] = useState([]);
  const [materialData, setMaterialData] = useState({
<<<<<<< HEAD
=======
    name: '',
>>>>>>> 7196ae9b1c6382f4d376aa8d341231c3ac15b725
    id: '',
    unit_price: '',
    quantity: '',
  });
<<<<<<< HEAD

=======
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentMaterialId, setCurrentMaterialId] = useState(null);

  // Fetch materials from the backend
  const fetchMaterials = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/materials'); // Adjust the API endpoint as necessary
      const data = await response.json();
      setMaterials(data);
    } catch (error) {
      console.error("Error fetching materials:", error);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  // Handle input changes
>>>>>>> 7196ae9b1c6382f4d376aa8d341231c3ac15b725
  function handleChange(e) {
    const { name, value } = e.target;
    setMaterialData({ ...materialData, [name]: value });
  }

<<<<<<< HEAD
  function addMaterial() {
    setMaterials([...materials, materialData]);
    setMaterialData({ id: '', unit_price: '', quantity: '' });
  }

  function deleteMaterial(id) {
    setMaterials(materials.filter(material => material.id !== id));
  }

  function updateMaterial(id) {
    // Implement update logic here
  }

  return (
    <div>
      <h2>Materials</h2>
      <input type="text" name="id" value={materialData.id} onChange={handleChange} placeholder="ID" />
      <input type="number" name="unit_price" value={materialData.unit_price} onChange={handleChange} placeholder="Unit Price" />
      <input type="number" name="quantity" value={materialData.quantity} onChange={handleChange} placeholder="Quantity" />
      <button onClick={addMaterial}>Add Material</button>
      
      <ul>
        {materials.map(material => (
          <li key={material.id}>
            {material.id} - ${material.unit_price} (Qty: {material.quantity})
=======
  // Add a new material
  async function addMaterial() {
    try {
      const response = await fetch('http://127.0.0.1:5000/materials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(materialData),
      });
      const newMaterial = await response.json();
      setMaterials([...materials, newMaterial]);
      resetForm();
    } catch (error) {
      console.error("Error adding material:", error);
    }
  }

  // Delete a material
  async function deleteMaterial(id) {
    try {
      await fetch(`http://127.0.0.1:5000/materials/${id}`, {
        method: 'DELETE',
      });
      setMaterials(materials.filter(material => material.id !== id));
    } catch (error) {
      console.error("Error deleting material:", error);
    }
  }

  // Prepare to update a material
  function updateMaterial(id) {
    const material = materials.find(material => material.id === id);
    setMaterialData(material); // Pre-fill the form with material's data
    setIsUpdating(true); // Enable update mode
    setCurrentMaterialId(id); // Set the material being updated
  }

  // Handle the update process
  async function handleUpdate() {
    try {
      await fetch(`http://127.0.0.1:5000/materials/${currentMaterialId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(materialData),
      });

      // Re-fetch materials from the backend to ensure frontend sync
      fetchMaterials();
      resetForm();
    } catch (error) {
      console.error("Error updating material:", error);
    }
  }

  const resetForm = () => {
    setIsUpdating(false);
    setCurrentMaterialId(null);
    setMaterialData({ name: '', id: '', unit_price: '', quantity: '' });
  };

  return (
    <div>
      <h2>{isUpdating ? "Update Material" : "Add Material"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={materialData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={materialData.id}
        onChange={handleChange}
        disabled={isUpdating} // Disable ID change when updating
      />
      <input
        type="text"
        name="unit_price"
        placeholder="Unit Price"
        value={materialData.unit_price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={materialData.quantity}
        onChange={handleChange}
      />

      {isUpdating ? (
        <button onClick={handleUpdate}>OK</button> // OK button for updating
      ) : (
        <button onClick={addMaterial}>Add Material</button> // Add Material button
      )}

      <ul>
        {materials.map(material => (
          <li key={material.id}>
            <strong>Name:</strong> {material.name} <br />
            <strong>ID:</strong> {material.id} <br />
            <strong>Unit Price:</strong> {material.unit_price} <br />
            <strong>Quantity:</strong> {material.quantity} <br />
>>>>>>> 7196ae9b1c6382f4d376aa8d341231c3ac15b725
            <button onClick={() => deleteMaterial(material.id)}>Delete</button>
            <button onClick={() => updateMaterial(material.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Materials;
